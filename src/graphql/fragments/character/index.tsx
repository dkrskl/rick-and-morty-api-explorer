import { gql } from '@apollo/client';

export const characterFragment = gql`
	fragment characterFragment on Character {
		name
		image
		gender
		species
		origin {
			name
		}
	}
`;
