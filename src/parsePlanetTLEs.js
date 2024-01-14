/**
 * Parses Planet Labs PBC's two-line element sets (TLE) and returns a collection of individual TLEs keyed by constellation and hardware ID (hwid)
 * @param [planetTLEs] - Planet Labs PBC's two-line element sets (TLE)
 * @returns {Object}
 */
const parsePlanetTLEs = planetTLEs => {
	const lines = planetTLEs?.split('\n');
	const tleCollection = {};

	for (let i = 0; i < lines.length; i += 3) {
		const fields = lines[i].split(' ');
		// eslint-disable-next-line no-unused-vars
		const [_, constellationName, subConstellationName] = fields;
		const hwid = fields.slice(-1)[0];

		const satellite = {}
		satellite[hwid] = lines[i + 1] + '\n' + lines[i + 2];
		const constellation = constellationName === 'FLOCK' ? `${constellationName}-${subConstellationName}` : constellationName;
		tleCollection[constellation] = {...tleCollection[constellation], ...satellite};
	}

  return tleCollection;
}

export default parsePlanetTLEs;
