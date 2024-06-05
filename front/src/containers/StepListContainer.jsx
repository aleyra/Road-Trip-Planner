import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//css
import './../css/stepList.css';
import './../css/leaflet-geosearch.css';

//reduc actions
import {
    addStep,
    removeStep,
    updateStep,
    exchangeStep,
} from "../redux/slices/step";


function DisplayOneStep(step, index) {
    const dispatch = useDispatch();
    // const [hasError, sethasError] = useState(false);
    let hasError = false;

    const steps = useSelector((state) => state.steps.step);
    
    // function checkOverlapWithNextStep(step_name){
    //     const index = steps.findIndex(step => step.step_name === step_name);
    //     if (index == steps.length - 1){
    //         return false;
    //     }
    //     const next_step = steps[index + 1];
    //     const current_step = steps[index];
    //     const next_step_arrival_date = new Date(next_step.step_arrival_date);
    //     const current_step_arrival_date = new Date(current_step.step_arrival_date);
    //     const next_step_days_stay = next_step.step_days_stay;
    //     const current_step_days_stay = current_step.step_days_stay;
    //     const next_step_departure_date = new Date(next_step_arrival_date);
    //     next_step_departure_date.setDate(next_step_departure_date.getDate() + next_step_days_stay);
    //     const current_step_departure_date = new Date(current_step_arrival_date);
    //     current_step_departure_date.setDate(current_step_departure_date.getDate() + current_step_days_stay);
    //     if (current_step_departure_date > next_step_arrival_date){
    //         return false;
    //     }
    //     return true;
    // }
 
    // console.log("step : ", step);
    //TODO essayer d'ecrire les tests pour les afficher dans le console.log
    // console.log("index : ", index);

    // useEffect(() => {
        // if (checkOverlapWithPreviousStep(step.step_name) == false || checkOverlapWithNextStep(step.step_name) == false){
        //         sethasError(true);
        // }
    // }, [step, hasError])
    console.log("index : ", index);

    // prepare var to check overlapping with next and previous steps
    const current_step = step;
    const current_step_arrival_date = new Date(current_step.step_arrival_date);
    const current_step_days_stay = current_step.step_days_stay;
    const current_step_departure_date = new Date(current_step_arrival_date);
    current_step_departure_date.setDate(current_step_departure_date.getDate() + current_step_days_stay);
    console.log("current_step_departure_date : ", current_step_departure_date);
    if (index != 0){
        const previous_step = steps[index - 1];
        const previous_step_arrival_date = new Date(previous_step.step_arrival_date);
        const previous_step_departure_date = new Date(previous_step_arrival_date);
        previous_step_departure_date.setDate(previous_step_departure_date.getDate() + previous_step.step_days_stay);
        if (previous_step_departure_date > current_step_arrival_date) {
            console.log("previous_step_departure_date > current_step_arrival_date");
            hasError = true;
        }
    }
    if (index != steps.length - 1){
        const next_step = steps[index + 1];
        const next_step_arrival_date = new Date(next_step.step_arrival_date);
        if (current_step_departure_date > next_step_arrival_date) {
            console.log("current_step_departure_date > next_step_arrival_date");
            hasError = true;
        }
    }


    
    console.log(hasError)

    let classCSS = "step-one-ok";
    let error_msg = "*Le sejour se chevauche avec l'étape précédente ou suivante"

    if (hasError == true) {
        classCSS = "step-one-nok";
    } else {
        error_msg = "";
    }

    // get arrival date in french format
    const arrival_date = new Date(step.step_arrival_date);
    console.log("arrival_date : ", arrival_date);
    const day = arrival_date.getDate();
    const month = arrival_date.getMonth() + 1; // don't know why getMonth() return month - 1
    const year = arrival_date.getFullYear();
    const txt_arrival_date = `${day.toString().padStart(2, "0")}/${month.toString().padStart(2,"0")}/${year.toString()}`;

    return (
        <div>
            <div className={classCSS}>
                <div className="step-number">{index + 1}</div>
                <div>
                    <p>Nom : {step.step_name}</p>
                    <p>Adresse : {step.address}</p>
                    <p>Date d'arrivée : {txt_arrival_date}</p>
                    <p>Nombre de jours de séjour : {step.step_days_stay}</p>
                </div>
                <div>
                    <button onClick={() => dispatch(updateStep(step.step_name))}>Modifier</button>
                    <button onClick={() => dispatch(removeStep(step.step_name))}>Supprimer</button>
                    {/* <button onClick={() => dispatch(exchangeStep(step.step_name))}>Echanger</button> */}
                </div>
            </div>
            <div className="error">{error_msg}</div>

        </div>
    );
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
                            <div className="step-list" key={index}>
                                {DisplayOneStep(step, index)}
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
                <div className="step-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                Nom de l'étape :
                                <input type="text" value={step_name} onChange={handleStep_nameChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Adresse :
                                <input type="text" value={address} onChange={handleAddressChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Coordonnées GPS :
                                <input type="text" value={GPS_coordinates} onChange={handleGPS_coordinatesChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Date d'arrivée :
                                <input type="date" value={step_arrival_date} onChange={handleStep_arrival_dateChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Nombre de jours de séjour :
                                <input type="number" value={step_days_stay} onChange={handleStep_days_stayChange} />
                            </label>
                        </div>
                        <div>
                            <button type="submit">Ajouter</button>
                        </div>
                    </form>

                </div>
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
