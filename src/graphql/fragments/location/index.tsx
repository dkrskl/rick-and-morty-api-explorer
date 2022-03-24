import { gql } from '@apollo/client';

export const locationFragment = gql`
	fragment locationFragment on Location {
		name
		type
		dimension
	}
`;
