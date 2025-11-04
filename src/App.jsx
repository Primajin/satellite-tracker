import {Clock, Entity, EntityDescription, Globe, PathGraphics, PointGraphics, Viewer} from 'resium';
import {Camera, Cartesian3, ClockRange, Color, Ion, JulianDate, Rectangle, SampledPositionProperty} from 'cesium';
import {eciToGeodetic, gstime, propagate, twoline2satrec} from 'satellite.js';
import {useEffect, useMemo, useState} from 'react';
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
const DEFAULT_SATELLITE_NAME = 'Unknown Satellite';

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
		}, 333);
	}, [data]);

	const satelliteId = useMemo(() => {
		if (!data) return '';
		
		const tLEs = parsePlanetTLEs(data);
		const flockConstellation = tLEs['FLOCK-4Y'];
		
		if (!flockConstellation || Object.keys(flockConstellation).length === 0) {
			return '';
		}
		
		return Object.keys(flockConstellation)[0];
	}, [data]);

	if (data && satelliteId) {
		const tLEs = parsePlanetTLEs(data);
		const flockConstellation = tLEs['FLOCK-4Y'];
		const eggsInSpace = flockConstellation[satelliteId];
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
			<Clock shouldAnimate={true} startTime={start.clone()} stopTime={stop.clone()} currentTime={start.clone()} multiplier={1} clockRange={ClockRange.LOOP_STOP}/>
			<Entity position={positionsOverTime} tracked={isSelected} selected={isSelected} name={satelliteId || DEFAULT_SATELLITE_NAME}>
				<PathGraphics show material={Color.WHITE} width={1} leadTime={5500} trailTime={100}/>
				<PointGraphics pixelSize={10}/>
				<EntityDescription>
					<h1>Julia Hell</h1>
					<p>In space no one can hear you cluck</p>
					<img alt="Artwork" src="/love-peace.svg" width="437" style={{height: 'auto', maxWidth: '100%'}}/>
				</EntityDescription>
			</Entity>
		</Viewer>
	);
}

export default App;
