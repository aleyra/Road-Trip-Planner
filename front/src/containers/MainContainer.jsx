import React from "react";

//css
import './../css/main.css';

//functions
import MyMapContainer from "./MapContainer";
import StepListContainer from "./stepsContainers/StepListContainer";
import HeaderContainer from "./HeaderContainer";

function MainContainer() {
	return (
		<React.Fragment>
			<div className="main-header">
				<HeaderContainer />
			</div>
			<div className="main-body">
				<div className="main-map">
					<MyMapContainer />
				</div>
				<div className="main-step">
					<StepListContainer />
				</div>
			</div>
		</React.Fragment>
	);
}

export default MainContainer;