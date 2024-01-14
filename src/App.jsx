import {Clock, Entity, EntityDescription, Globe, PointGraphics, Viewer} from 'resium';
import {Camera, Cartesian3, ClockRange, Ion, JulianDate, Rectangle, SampledPositionProperty} from 'cesium';
import {eciToGeodetic, gstime, propagate, twoline2satrec} from 'satellite.js';
import {useEffect, useState} from 'react';
import axios from 'axios';

import parsePlanetTLEs from './parsePlanetTLEs.js';

Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN;
// Berlin
Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(8, 49, 18, 55);

// Give SatelliteJS the TLEs and a specific time.
// Get back a longitude, latitude, height (m).
// We're going to generate a position every 10 seconds from now until 6 seconds from now.
const totalSeconds = 60 * 60 * 6;
const timestepInSeconds = 10;
const start = JulianDate.fromDate(new Date());
const stop = JulianDate.addSeconds(start, totalSeconds, new JulianDate());

const positionsOverTime = new SampledPositionProperty();

function App() {
	const [isSelected, setIsSelected] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get('https://ephemerides.planet-labs.com/planet_mc.tle').then((res) => {
			setData(res.data);
		});
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setIsSelected(!!data);
		}, 1);
	}, [data]);

	if (data) {
		const tLEs = parsePlanetTLEs(data);
		const eggsInSpace = tLEs['FLOCK-4Y']['24C4'];
		const satrec = twoline2satrec(eggsInSpace.split('\n')[0].trim(), eggsInSpace.split('\n')[1].trim());

		for (let i = 0; i < totalSeconds; i += timestepInSeconds) {
			const time = JulianDate.addSeconds(start, i, new JulianDate());
			const jsDate = JulianDate.toDate(time);

			const positionAndVelocity = propagate(satrec, jsDate);
			const gmst = gstime(jsDate);
			const p = eciToGeodetic(positionAndVelocity.position, gmst);

			const position = Cartesian3.fromRadians(p.longitude, p.latitude, p.height * 1000);
			positionsOverTime.addSample(time, position);
		}
	}

	return data && (
		<Viewer full shadows>
			<Globe enableLighting={true}/>
			<Clock shouldAnimate={true} startTime={start.clone()} stopTime={stop.clone()} currentTime={start.clone()} multiplier={40} clockRange={ClockRange.LOOP_STOP}/>
			<Entity position={positionsOverTime} tracked selected={isSelected} name={'24C4'}>
				<PointGraphics pixelSize={10}/>
				<EntityDescription>
					<h1>24C4</h1>
					<p>In space no one can hear you clucking</p>
				</EntityDescription>
			</Entity>
		</Viewer>
	);
}

export default App;
