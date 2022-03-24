import React from 'react';

type Row = Record<string, any>;

export type TableHeader = {
	key: string;
	label: string;
	columnType?: 'text' | 'image';
	CustomColumn?: React.FC<any>;
};

type Props = {
	title: string;
	headers: TableHeader[];
	data: Row[];
	totalDataCount: number;
	page: number;
	onPageChange: (amount: number) => void;
	itemPerPage: number;
};

/*
 * A flexible table I made for the assignment
 * If I had more time with the assignment, I would probably split this into components
 * to increase readability and maybe try to optimize it a bit
 * */

export function Table({
	title,
	headers,
	data,
	page,
	totalDataCount,
	onPageChange,
	itemPerPage,
}: Props) {
	return (
		<>
			<div className='w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200'>
				<header className='px-5 py-4 border-b border-gray-100'>
					<h2 className='font-semibold text-gray-800'>{title}</h2>
				</header>
				<div className='p-3'>
					<div className='overflow-x-auto'>
						<table className='table-auto w-full'>
							<thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
								<tr>
									{headers.map(({ key, label }) => (
										<th className='p-2 whitespace-nowrap' key={`header_${key}`}>
											<div className='font-semibold text-left'>{label}</div>
										</th>
									))}
								</tr>
							</thead>
							<tbody className='text-sm divide-y divide-gray-100'>
								{data.map((item, index) => {
									return (
										<tr key={`row_${index}`} data-testid='table_row'>
											{headers.map(({ key, columnType, CustomColumn }) => {
												// If it is a custom column it won't exist in row fields so return the component instead
												if (CustomColumn) {
													return (
														<td
															className='p-2 whitespace-nowrap'
															key={`data_${key}`}
														>
															<div className='text-left font-medium'>
																{React.createElement(
																	CustomColumn,
																	item,
																)}
															</div>
														</td>
													);
												}

												// Make sure the data with required header exist
												if (item[key]) {
													if (columnType === 'image') {
														return (
															<td
																className='p-2 whitespace-nowrap'
																key={`data_${key}`}
															>
																<div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
																	<img
																		className='rounded-full'
																		src={item[key]}
																		width='40'
																		height='40'
																	/>
																</div>
															</td>
														);
													}

													return (
														<td
															className='p-2 whitespace-nowrap'
															key={`data_${key}`}
														>
															<div className='text-left font-medium'>
																{item[key]}
															</div>
														</td>
													);
												}
											})}
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className='flex justify-between mx-auto w-full max-w-2xl p-6 items-center'>
				<span>
					{page * itemPerPage > totalDataCount ? totalDataCount : page * itemPerPage}{' '}
					Items of {totalDataCount}
				</span>
				<div className='flex gap-x-2'>
					<button
						className='border-2 p-1 px-4 rounded bg-white'
						onClick={() => onPageChange(-1)}
					>
						Prev
					</button>
					<button
						className='border-2 p-1 px-4 rounded bg-white'
						onClick={() => onPageChange(1)}
					>
						Next
					</button>
				</div>
			</div>
		</>
	);
}
