import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './index';

test('renders the app component', () => {
	render(<App />);
	const linkElement = screen.getByText(/Rick and Morty API Explorer/i);
	expect(linkElement).toBeInTheDocument();
});
