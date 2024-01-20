import {render} from '@testing-library/react';
import {describe, expect, it} from 'vitest';

import App from '../App.jsx';

describe('App', () => {
	it('renders without crashing', () => {
		const rendering = render(<App/>);
		expect(rendering).toMatchSnapshot();
	});
});
