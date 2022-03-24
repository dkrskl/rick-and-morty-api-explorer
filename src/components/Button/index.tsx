import React from 'react';

export function Button({text, onClick}: { text: string; onClick: () => void }) {
	return (
		<button className='border-2 rounded p-1 px-2' onClick={onClick}>
			{text}
		</button>
	);
}
