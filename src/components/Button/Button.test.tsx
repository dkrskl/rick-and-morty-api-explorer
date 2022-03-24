import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './index';

const onClick = jest.fn();

test('renders the button and fires onclick when clicked', () => {
	render(<Button text={'Click Me!'} onClick={onClick} />);

	const button = screen.getByText('Click Me!');
	expect(button).toBeInTheDocument();

	fireEvent.click(button);
	expect(onClick).toHaveBeenCalledTimes(1);
});
