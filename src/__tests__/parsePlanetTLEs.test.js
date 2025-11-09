import {describe, expect, it} from 'vitest';
import parsePlanetTLEs from '../parsePlanetTLEs.js';

describe('parsePlanetTLEs', () => {
it('parses TLE data correctly', () => {
const sampleTLE = `0 FLOCK 4Y 1 2415
1 55039U PLANET   24014.35593750  .00000000  00000+0  70863-3 0    09
2 55039 097.4501 077.5361 0009502 355.3438 300.6883 15.25954389    05
0 FLOCK 4Y 7 2417
1 55032U PLANET   24014.25806713  .00000000  00000+0  39313-3 0    02
2 55032 097.4481 077.0480 0010169 353.1694 237.5951 15.23247457    06`;

const result = parsePlanetTLEs(sampleTLE);

expect(result).toBeDefined();
expect(result['FLOCK-4Y']).toBeDefined();
expect(result['FLOCK-4Y']['2415']).toBeDefined();
expect(result['FLOCK-4Y']['2417']).toBeDefined();

// Check that TLE lines are properly stored
expect(result['FLOCK-4Y']['2415']).toContain('55039U PLANET');
expect(result['FLOCK-4Y']['2415']).toContain('097.4501');
});

it('handles FLOCK constellation names correctly', () => {
const sampleTLE = `0 FLOCK 1C 1 0903
1 40027U PLANET   24014.34041667  .00000000  00000+0  21303-2 0    08
2 40027 098.0882 349.5505 0007262 303.2218 266.8341 15.07759420    07`;

const result = parsePlanetTLEs(sampleTLE);

expect(result['FLOCK-1C']).toBeDefined();
expect(result['FLOCK-1C']['0903']).toBeDefined();
});

it('handles non-FLOCK satellites', () => {
const sampleTLE = `0 DOVE 2 0505
1 39132U PLANET   24014.33959491  .00000000  00000+0  68541-3 0    01
2 39132 064.8706 191.0812 0013941 242.6312 160.2676 15.18144161    01`;

const result = parsePlanetTLEs(sampleTLE);

expect(result['DOVE']).toBeDefined();
expect(result['DOVE']['0505']).toBeDefined();
});

it('handles multiple satellites in same constellation', () => {
const sampleTLE = `0 FLOCK 4Y 1 2415
1 55039U PLANET   24014.35593750  .00000000  00000+0  70863-3 0    09
2 55039 097.4501 077.5361 0009502 355.3438 300.6883 15.25954389    05
0 FLOCK 4Y 7 2417
1 55032U PLANET   24014.25806713  .00000000  00000+0  39313-3 0    02
2 55032 097.4481 077.0480 0010169 353.1694 237.5951 15.23247457    06
0 FLOCK 4Y 3 242E
1 55035U PLANET   24014.25806713  .00000000  00000+0  36783-3 0    03
2 55035 097.4483 077.0360 0012698 358.4220 271.4676 15.23292654    00`;

const result = parsePlanetTLEs(sampleTLE);

expect(result['FLOCK-4Y']).toBeDefined();
expect(Object.keys(result['FLOCK-4Y']).length).toBe(3);
expect(result['FLOCK-4Y']['2415']).toBeDefined();
expect(result['FLOCK-4Y']['2417']).toBeDefined();
expect(result['FLOCK-4Y']['242E']).toBeDefined();
});
});
