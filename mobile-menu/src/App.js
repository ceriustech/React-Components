import React from 'react';
import logo from './logo.svg';
import { Layout } from './styles/containers/Layout.Styles';
import Navigation from './containers/Navigation/Navigation';

const App = () => {
	return (
		<>
			<Layout>
				<Navigation />
			</Layout>
		</>
	);
};

export default App;
