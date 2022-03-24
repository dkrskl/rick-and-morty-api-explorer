import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { ListScreen } from '../../pages/ListScreen';
import { CharacterScreen } from '../../pages/CharacterScreen';
import { client } from '../../graphql/client';
import { EpisodeScreen } from '../../pages/EpisodeScreen';
import { LocationScreen } from '../../pages/LocationScreen';

export function AppComponent() {
	return (
		<div className='antialiased bg-gray-100 text-gray-600 min-h-screen px-4 pt-8'>
			<div className='h-full flex flex-col'>
				<header className='mx-auto pb-8 text-4xl'>Rick and Morty API Explorer</header>
				<Routes>
					{['', '/:type'].map(path => (
						<Route path={path} element={<ListScreen />} key={`route_${path}`} />
					))}
					<Route path='/characters/:id' element={<CharacterScreen />} />
					<Route path='/episodes/:id' element={<EpisodeScreen />} />
					<Route path='/locations/:id' element={<LocationScreen />} />
				</Routes>
			</div>
		</div>
	);
}

export function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<AppComponent />
			</BrowserRouter>
		</ApolloProvider>
	);
}
