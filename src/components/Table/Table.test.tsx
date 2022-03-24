import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './index';
import { HEADERS } from '../../constants/tables';

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom') as any),
	useNavigate: () => jest.fn(),
}));

const DATA = [
	{
		id: '1',
		image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
		name: 'Rick Sanchez',
		gender: 'Male',
		species: 'Human',
		created: '2017-11-04T18:48:46.250Z',
	},
	{
		id: '2',
		image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
		name: 'Morty Smith',
		gender: 'Male',
		species: 'Human',
		created: '2017-11-04T18:50:21.651Z',
	},
	{
		id: '3',
		image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
		name: 'Summer Smith',
		gender: 'Female',
		species: 'Human',
		created: '2017-11-04T19:09:56.428Z',
	},
];

test('renders the table and correct amount of rows', () => {
	render(
		<Table
			totalDataCount={100}
			data={DATA}
			itemPerPage={20}
			onPageChange={null}
			headers={HEADERS.characters}
			page={1}
			title={'Characters'}
		/>,
	);

	const totalRows = screen.getAllByTestId('table_row').length;
	expect(totalRows).toBe(3);
});
