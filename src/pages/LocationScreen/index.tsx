import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';

import { ItemLayout } from '../../components/ItemLayout';
import { Spinner } from '../../components/Spinner';
import { location } from '../../graphql/queries/location';

export function LocationScreen() {
	const navigate = useNavigate();
	const { id } = useParams();

	const { data, loading } = useQuery(location, {
		variables: { id },
	});

	if (loading || !data) {
		return <Spinner />;
	}

	return (
		<ItemLayout>
			<button className='text-2xl' onClick={() => navigate(-1)}>
				←
			</button>
			<div className='mt-6'>
				<span className='font-bold'>Name:</span> {data.location.name}
				<br />
				<span className='font-bold'>Type:</span> {data.location.type}
				<br />
				<span className='font-bold'>Dimension:</span> {data.location.dimension}
				<br />
				<span className='font-bold'>Total Residents:</span> {data.location.residents.length}
			</div>
		</ItemLayout>
	);
}
