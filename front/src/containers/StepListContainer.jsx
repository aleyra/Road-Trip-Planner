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

function DisplayOneStep(step, index, len, steps) {
    const dispatch = useDispatch();
    //TODO essayer d'ecrire les tests pour les afficher dans le console.log
    console.log("index : ", index);
    if (index > 0 || index < len - 1) {
        if (index > 0 && dispatch(checkOverlapWithPreviousStep(step.step_name)) == false){
            console.log('il y a un chevauchement avec la step precedente')
        }
        if (index < len - 1 && dispatch(checkOverlapWithNextStep(step.step_name)) == false) {
            console.log('il y a un chevauchement avec la step suivante')
        }
    }
    else {
        console.log('il n\'y a pas de step precedente ou de step suivante')
    }

    // console.log("index : ", index);
    // console.log("len : ", len);
    // console.log("step.step_name : ", step.step_name);
    // console.log("checkOverlapWithPreviousStep(step.step_name) : ", dispatch(checkOverlapWithPreviousStep(step.step_name)));
    if ( false
        // (index > 0 && dispatch(checkOverlapWithPreviousStep(step.step_name)) == false)
        // || (index < len - 1 && dispatch(checkOverlapWithNextStep(step.step_name)) == false)
    ) {
        return (
            <div>
                <div className="step-one-nok">
                    <div className="step-number">{index + 1}</div>
                    <div>
                        <p>Nom : {step.step_name}</p>
                        <p>Adresse : {step.address}</p>
                        <p>Date d'arrivée : {step.step_arrival_date}</p>
                        <p>Nombre de jours de séjour : {step.step_days_stay}</p>
                    </div>
                    <div>
                        <button onClick={() => dispatch(updateStep(step.step_name))}>Modifier</button>
                        <button onClick={() => dispatch(removeStep(step.step_name))}>Supprimer</button>
                        {/* <button onClick={() => dispatch(exchangeStep(step.step_name))}>Echanger</button> */}
                    </div>
                </div>
                <div className="error">
                    * Les dates de séjour se chevauchent
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <div className="step-one-ok">
                    <div className="step-number">{index + 1}</div>
                    <div>
                        <p>Nom : {step.step_name}</p>
                        <p>Adresse : {step.address}</p>
                        <p>Date d'arrivée : {step.step_arrival_date}</p>
                        <p>Nombre de jours de séjour : {step.step_days_stay}</p>
                    </div>
                    <div>
                        <button onClick={() => dispatch(updateStep(step.step_name))}>Modifier</button>
                        <button onClick={() => dispatch(removeStep(step.step_name))}>Supprimer</button>
                        {/* <button onClick={() => dispatch(exchangeStep(step.step_name))}>Echanger</button> */}
                    </div>
                </div>
            </div>
        );
    }
}

function StepListContainer() {
    const dispatch = useDispatch();
    const steps = useSelector((state) => state.steps.step);

    function DisplayStep() {
        const steps = useSelector((state) => state.steps.step);
        return (
            <React.Fragment>
                <h2>Liste des étapes</h2>
                {
                    steps.map(
                        (step, index = 0) => (
                            <div className="step-list">
                                {DisplayOneStep(step, index, steps.length, steps)}
                            </div>
                        )
                    )
                }
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
            <div className="step-main">
                <div className="step-list">
                    <DisplayStep />
                </div>
                <div className="add-step">
                    <h2>Add Step</h2>
                    <AddStep />
                </div>
            </div>
        </React.Fragment>
    );
}

export default StepListContainer;
