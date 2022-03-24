import { gql } from '@apollo/client';

export const episodeFragment = gql`
	fragment episodeFragment on Episode {
		name
		air_date
		episode
	}
`;
