import { gql } from '@apollo/client';

export const infoFragment = gql`
	fragment infoFragment on Info {
		pages
		count
		next
		prev
	}
`;
