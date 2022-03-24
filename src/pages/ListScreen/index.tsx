import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { HEADERS, QUERIES } from '../../constants/tables';
import { Table } from '../../components/Table';
import { Spinner } from '../../components/Spinner';
import { Button } from '../../components/Button';

export function ListScreen() {
	const navigate = useNavigate();
	const { type = 'characters' } = useParams<{ type: 'characters' | 'episodes' | 'locations' }>();
	const page = useRef(1);
	const title = type.charAt(0).toUpperCase() + type.slice(1);

	const { data, loading, refetch } = useQuery(QUERIES[type], {
		variables: { page: page.current },
	});

	const onPageChange = (direction: number) => {
		// -1 for previous page, 1 for next. Can be moved to enum
		const pageDirection = direction > 0 ? 'next' : 'prev';
		const newPage = data?.[type].info[pageDirection];

		// Don't try to navigate if next page is null
		if (newPage == null) {
			return;
		}

		// Set the new page and refetch
		page.current = newPage;
		return refetch({ page: page.current });
	};

	const onTypeClick = (navigateToType: string) => {
		// Reset the page
		page.current = 1;

		navigate(navigateToType);
	};

	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<div className='flex self-center gap-8 mb-10'>
				<Button text={'Characters'} onClick={() => onTypeClick('/characters')} />
				<Button text={'Episodes'} onClick={() => onTypeClick('/episodes')} />
				<Button text={'Locations'} onClick={() => onTypeClick('/locations')} />
			</div>
			<Table
				title={title}
				headers={HEADERS[type]}
				data={data?.[type]?.results || []}
				onPageChange={onPageChange}
				page={page.current}
				totalDataCount={data?.[type]?.info?.count}
				itemPerPage={20}
			/>
		</>
	);
}
