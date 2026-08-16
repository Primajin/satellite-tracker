import {afterEach, vi} from 'vitest';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Mock resium components to avoid WebGL initialization
vi.mock('resium', () => ({
	Viewer: ({children}) => children,
	Globe: () => null,
	Clock: () => null,
	Entity: () => null,
	PathGraphics: () => null,
	PointGraphics: () => null,
	EntityDescription: () => null,
}));

// Mock cesium to avoid WebGL errors
vi.mock('cesium', () => {
	const JulianDateMock = vi.fn(function() {
		return {
			clone: vi.fn(() => ({})),
		};
	});
	JulianDateMock.fromDate = vi.fn(() => ({
		clone: vi.fn(() => ({})),
	}));
	JulianDateMock.addSeconds = vi.fn(() => ({
		clone: vi.fn(() => ({})),
	}));
	JulianDateMock.toDate = vi.fn(() => new Date());

	const SampledPositionPropertyMock = vi.fn(function() {
		return {
			addSample: vi.fn(),
		};
	});

	return {
		Camera: {
			DEFAULT_VIEW_RECTANGLE: {},
		},
		Cartesian3: {
			fromRadians: vi.fn(() => ({})),
		},
		ClockRange: {
			LOOP_STOP: 'LOOP_STOP',
		},
		Color: {
			WHITE: {},
		},
		Ion: {
			defaultAccessToken: '',
		},
		JulianDate: JulianDateMock,
		Rectangle: {
			fromDegrees: vi.fn(() => ({})),
		},
		SampledPositionProperty: SampledPositionPropertyMock,
	};
});

// Mock satellite.js
vi.mock('satellite.js', () => ({
	twoline2satrec: vi.fn(() => ({})),
	propagate: vi.fn(() => ({
		position: {x: 0, y: 0, z: 0},
		velocity: {x: 0, y: 0, z: 0},
	})),
	gstime: vi.fn(() => 0),
	eciToGeodetic: vi.fn(() => ({
		longitude: 0,
		latitude: 0,
		height: 0,
	})),
}));

// Runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
});
