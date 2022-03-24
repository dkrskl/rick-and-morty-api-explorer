import { gql } from '@apollo/client';

import { episodeFragment } from '../../fragments/episode';

export const episode = gql`
	${episodeFragment}
	query episode($id: ID!) {
		episode(id: $id) {
			...episodeFragment
		}
	}
`;
