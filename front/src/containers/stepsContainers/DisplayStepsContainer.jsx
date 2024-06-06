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


function DisplaySteps() {
    const dispatch = useDispatch();
    const steps = useSelector((state) => state.steps.step);

    dispatch(order());

    return (
        <React.Fragment>
            <h2>Liste des étapes</h2>
            {
                steps.map(
                    (step, index = 0) => (
                        <div className="step-list" key={index}>
                            {DisplayOneStep(step, index, steps)}
                        </div>
                    )
                )
            }
        </React.Fragment>
    );
}

export default DisplaySteps;