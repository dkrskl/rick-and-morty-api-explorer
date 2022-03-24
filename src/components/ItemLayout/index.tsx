import React from 'react';

export function ItemLayout(props) {
	return (
		<div className='max-w-sm w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mb-20 min-h-[25%] p-4 mt-20'>
			{props.children}
		</div>
	);
}
