import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//css
import './../css/stepList.css';

//reduc actions
import {
    addStep,
    removeStep,
    updateStep,
    exchangeStep,
    checkOverlapWithNextStep,
    checkOverlapWithPreviousStep
} from "../redux/slices/step";

function StepListContainer() {
    const dispatch = useDispatch();
    const steps = useSelector((state) => state.steps.step);

    function DisplayStep() {
        const steps = useSelector((state) => state.steps.step);
        return (
            <React.Fragment>
                <h2>Step List</h2>
                <ol>
                    {
                        steps.map(
                            (step, index = 0) => (
                                // if (
                                //     (index > 0 &&  dispatch(checkOverlapWithPreviousStep(step.step_name)) == false)
                                //     || (index < steps.length - 1 && dispatch(checkOverlapWithNextStep(step.step_name)) == false)
                                // ) {
                                // <div className="step-overlap">
                                //         <p>Erreur les etapes se supperpose dans le temps</p>
                                // }
                                // else {
                                //     <div className="step-check-ok">
                                // }
                                //     <li key={step.step_name}>
                                //         <p>Etape {index + 1}</p>
                                //         <p>Nom : {step.step_name}</p>
                                //         <p>Adresse : {step.address}</p>
                                //         <p>Date d'arrivée : {step.step_arrival_date}</p>
                                //         <p>Nombre de jours de séjour : {step.step_days_stay}</p>
                                //         <button onClick={() => dispatch(removeStep(step.step_name))}>Supprimer</button>
                                //         <button onClick={() => dispatch(updateStep(step.step_name))}>Modifier</button>
                                //         {/* <button onClick={() => dispatch(exchangeStep(step.step_name))}>Echanger</button> */}
                                //     </li>
                                // </div>
                                <li key={step.step_name}>
                                    <p>Etape {index + 1}</p>
                                    <p>Nom : {step.step_name}</p>
                                    <p>Adresse : {step.address}</p>
                                    <p>Date d'arrivée : {step.step_arrival_date}</p>
                                    <p>Nombre de jours de séjour : {step.step_days_stay}</p>
                                    <button onClick={() => dispatch(removeStep(step.step_name))}>Supprimer</button>
                                    <button onClick={() => dispatch(updateStep(step.step_name))}>Modifier</button>
                                    {/* <button onClick={() => dispatch(exchangeStep(step.step_name))}>Echanger</button> */}
                                </li>
                            )
                        )
                    }
                </ol>
            </React.Fragment>
        );
    }

    function AddStep(){
        const [step_name, setStep_name] = useState("");
        const [address, setAddress] = useState("");
        const [GPS_coordinates, setGPS_coordinates] = useState([]);
        const [step_arrival_date, setStep_arrival_date] = useState("");
        const [step_days_stay, setStep_days_stay] = useState(0);

        function handleStep_nameChange(e){
            setStep_name(e.target.value);
        }

        function handleAddressChange(e){
            setAddress(e.target.value);
        }

        function handleGPS_coordinatesChange(e){
            setGPS_coordinates(e.target.value); //trouver comment passer de l'adresse aux coordonnees GPS
        }

        function handleStep_arrival_dateChange(e){
            setStep_arrival_date(e.target.value);
        }

        function handleStep_days_stayChange(e){
            setStep_days_stay(e.target.value);
        }

        function handleSubmit(e){
            e.preventDefault();
            dispatch(addStep({step_name, address, GPS_coordinates, step_arrival_date, step_days_stay}));
        }

        return(
            <React.Fragment>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nom de l'étape :
                        <input type="text" value={step_name} onChange={handleStep_nameChange} />
                    </label>
                    <label>
                        Adresse :
                        <input type="text" value={address} onChange={handleAddressChange} />
                    </label>
                    <label>
                        Coordonnées GPS :
                        <input type="text" value={GPS_coordinates} onChange={handleGPS_coordinatesChange} />
                    </label>
                    <label>
                        Date d'arrivée :
                        <input type="date" value={step_arrival_date} onChange={handleStep_arrival_dateChange} />
                    </label>
                    <label>
                        Nombre de jours de séjour :
                        <input type="number" value={step_days_stay} onChange={handleStep_days_stayChange} />
                    </label>
                    <button type="submit">Ajouter</button>
                </form>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className="step-list">
                <DisplayStep />
            </div>
            <div className="add-step">
                <h2>Add Step</h2>
                <AddStep />
            </div>
        </React.Fragment>
    );
}

export default StepListContainer;