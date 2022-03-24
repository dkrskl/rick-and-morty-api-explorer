import { TableHeader } from '../components/Table';
import { ActionsButton } from '../components/ActionsButton';
import { characters } from '../graphql/queries/characters';
import { episodes } from '../graphql/queries/episodes';
import { locations } from '../graphql/queries/locations';

const ACTION_COLUMN = {
	key: 'action',
	label: 'Actions',
	CustomColumn: ActionsButton,
};

const CHARACTER_HEADERS: TableHeader[] = [
	{
		key: 'image',
		label: 'Image',
		columnType: 'image',
	},
	{
		key: 'name',
		label: 'Name',
	},
	{
		key: 'gender',
		label: 'Gender',
	},
	{
		key: 'species',
		label: 'Species',
	},
	ACTION_COLUMN,
];

const EPISODE_HEADERS: TableHeader[] = [
	{
		key: 'name',
		label: 'Name',
	},
	{
		key: 'air_date',
		label: 'Air Date',
	},
	{
		key: 'episode',
		label: 'Episode',
	},
	ACTION_COLUMN,
];

const LOCATION_HEADERS: TableHeader[] = [
	{
		key: 'name',
		label: 'Name',
	},
	{
		key: 'type',
		label: 'Type',
	},
	{
		key: 'dimension',
		label: 'Dimension',
	},
	ACTION_COLUMN,
];

export const HEADERS = {
	characters: CHARACTER_HEADERS,
	locations: LOCATION_HEADERS,
	episodes: EPISODE_HEADERS,
};

export const QUERIES = {
	characters,
	locations,
	episodes,
};
