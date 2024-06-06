import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
// import { useMap } from "react-leaflet";
// import * as L from "leaflet";

//css
import './../../css/stepList.css';
import "leaflet-geosearch/dist/geosearch.css";

//reduc actions
import {
    addStep,
} from "../../redux/slices/step";

function AddStep(){
    const dispatch = useDispatch();
    const [stepName, setStepName] = useState("");
    const [address, setAddress] = useState("");
    // const [GPS_coordinates, setGPS_coordinates] = useState([]);
    const [GPSLatitude, setGPSLatitude] = useState(45.75934600830078);
    const [GPSLongitude, setGPSLongitude] = useState(4.844399929046631);
    const [stepArrivalDate, setStepArrivalDate] = useState("");
    const [stepDaysStay, setStepDaysStay] = useState(0);

    // const provider = new OpenStreetMapProvider();
    // const options = {
    //     notFoundMessage: "No results found",
    //     provider: provider,
    //     style: "bar",
    //     showPopup: true,
    // };
    // const searchControl = new GeoSearchControl(options);
    // const map = useMap();

    function handleStep_nameChange(e){
        setStepName(e.target.value);
    }

    function handleAddressChange(e){
        // useEffect(() => {
        //     map.addControl(searchControl);  // Add event listener for search results
        //     map.on("geosearch/showlocation", (result) => {
        //         console.log("Search result:", result);  // process the result here, e.g., update state, show a custom popup, etc.
        //     });
        //     return () => {
        //         map.removeControl(searchControl);   // Remove event listener when component unmounts
        //         map.off("geosearch/showlocation");
        //     };
        // }, [map, searchControl]);
        // setAddress(result.label);   // ?
        // setGPS_coordinates([result.y, result.x]);
        setAddress(e.target.value);
    }

    function handleGPS_latitudeChange(e){
        setGPSLatitude(e.target.value); //trouver comment passer de l'adresse aux coordonnees GPS
    }
    function handleGPS_longitudeChange(e){
        setGPSLongitude(e.target.value); //trouver comment passer de l'adresse aux coordonnees GPS
    }

    function handleStep_arrival_dateChange(e){
        setStepArrivalDate(e.target.value);
    }

    function handleStep_days_stayChange(e){
        setStepDaysStay(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
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
                    <div>
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
                    </div>
                    <div>
                        <label>
                            Date d'arrivée :
                            <input type="date" value={stepArrivalDate} onChange={handleStep_arrival_dateChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Nombre de jours de séjour :
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

/*
import { useEffect } from "react";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";
import { useMap } from "react-leaflet";
import * as L from "leaflet";

const SearchField = () => {
    console.log("SearchField");
    const provider = new OpenStreetMapProvider();
    const options = {
        notFoundMessage: "No results found",
        provider: provider,
        style: "bar",
        showPopup: true,
    };
    const searchControl = new GeoSearchControl(options);
    const map = useMap();
    useEffect(() => {
        map.addControl(searchControl as L.Control);     // Add event listener for search results
        map.on("geosearch/showlocation", (result) => {
            console.log("Search result:", result);       // process the result here, e.g., update state, show a custom popup, etc.
        });
        return () => {
            map.removeControl(searchControl as L.Control);       // Remove event listener when component unmounts
            map.off("geosearch/showlocation");
        };
    }, [map, searchControl]);
    return null; }; 

export default SearchField;
*/
