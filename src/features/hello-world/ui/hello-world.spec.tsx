import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { HelloWorld } from './hello-world';

describe('features/hello-world', () => {
	test('should render', () => {
		expect(render(<HelloWorld />)).toMatchSnapshot();
	});
});
