import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

// import logo from './logo.svg';
//css
import './css/App.css';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

//functions
import MainContainer from './containers/MainContainer';
import NotFoundContainer from './containers/NotFoundContainer';

function App(){
	// return (
	//   <div className="App">
	//     <header className="App-header">
	//       <img src={logo} className="App-logo" alt="logo" />
	//       <p>
	//         Edit <code>src/App.js</code> and save to reload.
	//       </p>
	//       <a
	//         className="App-link"
	//         href="https://reactjs.org"
	//         target="_blank"
	//         rel="noopener noreferrer"
	//       >
	//         Learn React
	//       </a>
	//     </header>
	//   </div>
	// );
	return(
		<React.Fragment>
			<Provider store={store}>
				<HashRouter>
					<div className='Main-div'>
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
