import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';

import { Button } from '../Button';

export function ActionsButton(props: { id: number }) {
	const navigate = useNavigate();
	const { type = 'characters' } = useParams();

	const onClick = () => {
		navigate(`/${type}/${props.id}`);
	};

	return <Button text='View' onClick={onClick} />;
}
