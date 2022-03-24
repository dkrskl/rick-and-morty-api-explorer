import React from 'react';
import { useQuery } from '@apollo/client';

import { ItemLayout } from '../../components/ItemLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';
import { character } from '../../graphql/queries/character';

export function CharacterScreen() {
	const navigate = useNavigate();
	const { id } = useParams();

	const { data, loading } = useQuery(character, {
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
			{data.character.image ? (
				<img
					src={data.character.image}
					alt={data.character.name}
					className='rounded-full mx-auto w-32 h-32 shadow-xl border-2 border-gray-300 -m-24'
				/>
			) : null}
			<div className='mt-36'>
				<span className='font-bold'>Name:</span> {data.character.name}
				<br />
				<span className='font-bold'>Gender:</span> {data.character.gender}
				<br />
				<span className='font-bold'>Species:</span> {data.character.species}
				<br />
				<span className='font-bold'>Origin: </span>
				{data.character.origin.name}
				<br />
				<span className='font-bold'>Total Episodes: </span>
				{data.character.episode.length}
			</div>
		</ItemLayout>
	);
}
