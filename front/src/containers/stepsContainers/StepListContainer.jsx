import React from "react";

//css
import './../../css/stepList.css';

//functions
// import DisplayOneStep from "./DisplayOneStepContainer";
import AddStep from "./AddStepContainer";
import DisplaySteps from "./DisplayStepsContainer";


function StepListContainer() {
    
    return (
        <React.Fragment>
            <div className="step-main">
                <div className="step-list">
                    <DisplaySteps />
                </div>
                <div className="step-add">
                    <h2>Add Step</h2>
                    <AddStep />
                </div>
            </div>
        </React.Fragment>
    );
}

export default StepListContainer;
