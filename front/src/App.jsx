import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

import './css/App.css';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

//functions
import MainContainer from './containers/MainContainer';
import NotFoundContainer from './containers/NotFoundContainer';

function App(){

	return(
		<React.Fragment>
			<Provider store={store}>
				<HashRouter>
					<div>
						<Routes>
							<Route exact path="/" element={<MainContainer />} />
							<Route element={<NotFoundContainer />} />
						</Routes>
					</div>
				</HashRouter>
			</Provider>
		</React.Fragment>
	);
}

export default App;
