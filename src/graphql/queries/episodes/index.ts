import { gql } from '@apollo/client';

import { episodeFragment } from '../../fragments/episode';
import { infoFragment } from '../../fragments/info';

export const episodes = gql`
	${infoFragment}
	${episodeFragment}
	query episodes($page: Int) {
		episodes(page: $page) {
			results {
				id
				...episodeFragment
			}
			info {
				...infoFragment
			}
		}
	}
`;
