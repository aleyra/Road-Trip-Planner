import React from "react";

//css
import './../css/main.css';

//functions
import MyMapContainer from "./MapContainer";
import StepListContainer from "./stepsContainers/StepListContainer";

function MainContainer() {
	return (
		<React.Fragment>
			<div className="main-header">
				<h1>Road Trip Planner</h1>
				<p>page header TODO</p>
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