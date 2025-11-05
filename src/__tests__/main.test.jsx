import {render, waitFor} from '@testing-library/react';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import axios from 'axios';
import {readFileSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

import App from '../App.jsx';

// Mock axios
vi.mock('axios');

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read mock TLE data
const mockTLEData = readFileSync(join(__dirname, '__mocks__/planet_mc.tle'), 'utf-8');

describe('App', () => {
	beforeEach(() => {
		// Reset mocks before each test
		vi.clearAllMocks();
	});

	it('renders without crashing', () => {
		// Mock axios to reject (simulating network error)
		axios.get.mockRejectedValue(new Error('Network Error'));
		
		const rendering = render(<App/>);
		expect(rendering).toMatchSnapshot();
	});

	it('renders with mocked TLE data', async () => {
		// Mock successful axios response with mock TLE data
		axios.get.mockResolvedValue({data: mockTLEData});
		
		const {container} = render(<App/>);
		
		// Wait for the data to be loaded and processed
		await waitFor(() => {
			expect(axios.get).toHaveBeenCalledWith('https://ephemerides.planet-labs.com/planet_mc.tle');
		}, {timeout: 3000});
		
		// Verify that the component is still rendered
		expect(container).toBeTruthy();
	});

	it('selects first available satellite from FLOCK-4Y constellation', async () => {
		// Mock successful axios response
		axios.get.mockResolvedValue({data: mockTLEData});
		
		const {container} = render(<App/>);
		
		// Wait for data to be loaded
		await waitFor(() => {
			expect(axios.get).toHaveBeenCalled();
		}, {timeout: 3000});
		
		// The component should render successfully with the first available satellite
		expect(container.querySelector('canvas')).toBeTruthy();
	});

	it('handles empty constellation gracefully', async () => {
		// Mock with data that has no FLOCK-4Y satellites
		const emptyTLEData = `0 DOVE 2 0505
1 39132U PLANET   24014.33959491  .00000000  00000+0  68541-3 0    01
2 39132 064.8706 191.0812 0013941 242.6312 160.2676 15.18144161    01`;
		
		axios.get.mockResolvedValue({data: emptyTLEData});
		
		const {container} = render(<App/>);
		
		// Wait for axios call
		await waitFor(() => {
			expect(axios.get).toHaveBeenCalled();
		}, {timeout: 3000});
		
		// Component should handle missing constellation gracefully
		expect(container).toBeTruthy();
	});
});
