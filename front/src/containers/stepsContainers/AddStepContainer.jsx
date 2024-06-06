import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//css
import './../../css/stepList.css';

//reduc actions
import {
    addStep,
} from "../../redux/slices/step";

function AddStep(){
    const dispatch = useDispatch();
    const [stepName, setStepName] = useState("");
    const [address, setAddress] = useState("");
    const [GPSLatitude, setGPSLatitude] = useState(null);
    const [GPSLongitude, setGPSLongitude] = useState(null);
    const [stepArrivalDate, setStepArrivalDate] = useState("");
    const [stepDaysStay, setStepDaysStay] = useState(0);

    function handleStep_nameChange(e){
        setStepName(e.target.value);
    }

    function handleAddressChange(e){
        setAddress(e.target.value);
    }

    // function handleGPS_latitudeChange(e){
    //     setGPSLatitude(e.target.value); //trouver comment passer de l'adresse aux coordonnees GPS
    // }
    // function handleGPS_longitudeChange(e){
    //     setGPSLongitude(e.target.value); //trouver comment passer de l'adresse aux coordonnees GPS
    // }

    function handleStep_arrival_dateChange(e){
        setStepArrivalDate(e.target.value);
    }

    function handleStep_days_stayChange(e){
        setStepDaysStay(e.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        const encodedAddress = encodeURIComponent(address);
        const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&addressdetails=1&limit=1`;
 
        try {
            const response = await axios.get(url);
            if (response.data.length > 0) {
                const location = response.data[0];
                if (location.lat && location.lon) {
                    console.log(`Latitude: ${location.lat}, Longitude: ${location.lon}`);
                    setGPSLatitude(location.lat);
                    setGPSLongitude(location.lon);
                } else {
                    console.error('Coordonnées GPS non disponibles.');
                    alert('Coordonnées GPS non disponibles pour cette adresse.');
                }
            } else {
                alert('Adresse non trouvée.');
            }

        } catch (error) {
            console.error('Erreur lors de la récupération des coordonnées:', error);
            alert('Erreur lors de la récupération des coordonnées.');
        }
        const GPS_coordinates = [GPSLatitude, GPSLongitude];
        dispatch(addStep({
            address, 
            GPS_coordinates, 
            step_name: stepName, 
            step_arrival_date: stepArrivalDate, 
            step_days_stay: stepDaysStay,
        }));
    }

    return(
        <React.Fragment>
            <div className="step-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Nom de l'étape :
                            <input type="text" value={stepName} onChange={handleStep_nameChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Adresse :
                            <input type="text" value={address} onChange={handleAddressChange} />
                        </label>
                    </div>
                    {/* <div>
                        <label>
                            Coordonnées GPS latitude:
                            <input type="text" value={GPSLatitude} onChange={handleGPS_latitudeChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Coordonnées GPS longitude:
                            <input type="text" value={GPSLongitude} onChange={handleGPS_longitudeChange} />
                        </label>
                    </div> */}
                    <div>
                        <label>
                            Date d'arrivée :
                            <input type="date" value={stepArrivalDate} onChange={handleStep_arrival_dateChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Durée du séjour en jours :
                            <input type="number" value={stepDaysStay} onChange={handleStep_days_stayChange} />
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
