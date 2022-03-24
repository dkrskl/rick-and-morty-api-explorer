import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';

import { ItemLayout } from '../../components/ItemLayout';
import { Spinner } from '../../components/Spinner';
import { episode } from '../../graphql/queries/episode';

export function EpisodeScreen() {
	const navigate = useNavigate();
	const { id } = useParams();

	const { data, loading } = useQuery(episode, {
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
				<span className='font-bold'>Name:</span> {data.episode.name}
				<br />
				<span className='font-bold'>Air Date:</span> {data.episode.air_date}
				<br />
				<span className='font-bold'>Episode Code:</span> {data.episode.episode}
			</div>
		</ItemLayout>
	);
}
