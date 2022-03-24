import { gql } from '@apollo/client';

import { characterFragment } from '../../fragments/character';
import { infoFragment } from '../../fragments/info';

export const characters = gql`
	${characterFragment}
	${infoFragment}
	query characters($page: Int) {
		characters(page: $page) {
			results {
				id
				...characterFragment
			}
			info {
				...infoFragment
			}
		}
	}
`;
