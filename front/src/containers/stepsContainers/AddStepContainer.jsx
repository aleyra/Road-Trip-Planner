import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//css
import './../../css/stepList.css';
import './../../css/leaflet-geosearch.css';

//reduc actions
import {
    addStep,
    removeStep,
    updateStep,
    exchangeStep,
} from "../../redux/slices/step";

function AddStep(){
    const dispatch = useDispatch();
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

export default AddStep;