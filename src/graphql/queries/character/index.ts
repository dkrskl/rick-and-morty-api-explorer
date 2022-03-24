import { gql } from '@apollo/client';

import { characterFragment } from '../../fragments/character';

export const character = gql`
	${characterFragment}
	query character($id: ID!) {
		character(id: $id) {
			episode {
				id
			}
			...characterFragment
		}
	}
`;
