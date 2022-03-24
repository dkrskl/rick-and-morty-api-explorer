import { gql } from '@apollo/client';

import { locationFragment } from '../../fragments/location';

export const location = gql`
	${locationFragment}
	query location($id: ID!) {
		location(id: $id) {
			residents {
				id
			}
			...locationFragment
		}
	}
`;
