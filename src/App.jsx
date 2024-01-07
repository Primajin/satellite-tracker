import {Clock, Entity, EntityDescription, Globe, PointGraphics, Viewer} from 'resium';
import {Camera, Cartesian3, ClockRange, Ion, JulianDate, Rectangle, SampledPositionProperty} from 'cesium';
import {eciToGeodetic, gstime, propagate, twoline2satrec} from 'satellite.js';
import {useEffect, useState} from 'react';

Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN;
// Berlin
Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(8, 49, 18, 55);

const ISS_TLE =
	`1 25544U 98067A   24007.53059513  .00013535  00000-0  24346-3 0  9993
	 2 25544  51.6418  36.3373 0003824   5.5292  91.3413 15.50145959433489`;

const satrec = twoline2satrec(
	ISS_TLE.split('\n')[0].trim(),
	ISS_TLE.split('\n')[1].trim(),
);
// Give SatelliteJS the TLEs and a specific time.
// Get back a longitude, latitude, height (m).
// We're going to generate a position every 10 seconds from now until 6 seconds from now.
const totalSeconds = 60 * 60 * 6;
const timestepInSeconds = 10;
const start = JulianDate.fromDate(new Date());
const stop = JulianDate.addSeconds(start, totalSeconds, new JulianDate());

const positionsOverTime = new SampledPositionProperty();
for (let i = 0; i < totalSeconds; i += timestepInSeconds) {
	const time = JulianDate.addSeconds(start, i, new JulianDate());
	const jsDate = JulianDate.toDate(time);

	const positionAndVelocity = propagate(satrec, jsDate);
	const gmst = gstime(jsDate);
	const p = eciToGeodetic(positionAndVelocity.position, gmst);

	const position = Cartesian3.fromRadians(p.longitude, p.latitude, p.height * 1000);
	positionsOverTime.addSample(time, position);
}

function App() {
	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		// selecting by default will not render the jsx
		setTimeout(() => {
			setIsSelected(true);
		}, 1);
	}, []);

	return (
		<Viewer full shadows>
			<Globe enableLighting={true}/>
			<Clock shouldAnimate={true} startTime={start.clone()} stopTime={stop.clone()} currentTime={start.clone()} multiplier={40} clockRange={ClockRange.LOOP_STOP}/>
			<Entity position={positionsOverTime} tracked selected={isSelected} name={'ISS'}>
				<PointGraphics pixelSize={10}/>
				<EntityDescription>
					<h1>International Space Station</h1>
					<p>The International Space Station (ISS) is the largest space station to have ever been built.</p>
				</EntityDescription>
			</Entity>
		</Viewer>
	);
}

export default App;
