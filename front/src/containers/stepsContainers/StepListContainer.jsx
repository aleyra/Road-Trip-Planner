import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//css
import './../../css/stepList.css';

//reduc actions
import {
    order,
} from "../../redux/slices/step";

//functions
import DisplayOneStep from "./DisplayOneStepContainer";
import AddStep from "./AddStepContainer";

function StepListContainer() {
    
    function DisplayStep() {
        const dispatch = useDispatch();
        const [currentSteps, setCurrentSteps] = useState([]);
        const steps = useSelector((state) => state.steps.step);

        useEffect(() => {
            dispatch(order());
            setCurrentSteps(steps);
        }, [steps]);

        return (
            <React.Fragment>
                <h2>Liste des étapes</h2>
                {
                    steps.map(
                        (step, index = 0) => (
                            <div className="step-list" key={index}>
                                {DisplayOneStep(step, index)}
                            </div>
                        )
                    )
                }
            </React.Fragment>
        );
    }

    

    return (
        <React.Fragment>
            <div className="step-main">
                <div className="step-list">
                    <DisplayStep />
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
