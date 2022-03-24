import { gql } from '@apollo/client';

import { infoFragment } from '../../fragments/info';
import { locationFragment } from '../../fragments/location';

export const locations = gql`
	${infoFragment}
	${locationFragment}
	query locations($page: Int) {
		locations(page: $page) {
			results {
				id
				...locationFragment
			}
			info {
				...infoFragment
			}
		}
	}
`;
