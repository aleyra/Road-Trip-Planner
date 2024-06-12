import React from "react";
import { useDispatch, useSelector } from "react-redux";

//css
import './../../css/stepList.css';

//redux actions
import { order } from "../../redux/slices/step";

//functions
import DisplayOneStep from "./DisplayOneStepContainer";
import ModifyOneStep from "./ModifyOneStepContainer";

function DisplaySteps() {
    const dispatch = useDispatch();
    const steps = useSelector((state) => state.steps.step);

    React.useEffect(() => {
        dispatch(order());
    }, [dispatch]);

    console.log(steps);

    return (
        <React.Fragment>
            <h2>Liste des étapes</h2>
            {steps.map((step, index) => (
                <div className="step-list" key={index}>
                    {step.to_modify ? (
                        <ModifyOneStep step={step} index={index} />
                    ) : (
                        <DisplayOneStep step={step} index={index} steps={steps} />
                    )}
                </div>
            ))}
        </React.Fragment>
    );
}

export default DisplaySteps;
