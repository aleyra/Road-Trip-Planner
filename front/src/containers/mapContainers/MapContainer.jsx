import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
} from 'react-leaflet'
import { latLngBounds } from 'leaflet';

//css
import './../../css/map.css';

//redux actions
import { order } from "../../redux/slices/step";

//functions
import RoutingMachine from "./RoutingMachineContainer";

//const
import { PIN } from "../../const/pinIcons";


function MyMarker(step, indice){
    return (
        <Marker
            key={step.step_name}
            position={step.GPS_coordinates}
            icon={PIN}
        >
            <Popup>
                Etape {indice} <br />
                Nom : {step.step_name} <br />
                Adresse : {step.address} <br />
                Date d'arrivée : {step.step_arrival_date} <br />
                Durée du séjour en jours : {step.step_days_stay} <br />
            </Popup>
        </Marker>
    );
}


function FitBounds({ steps }) {
    const map = useMap();

    useEffect(() => {
        if (steps.length > 0) {
            const maxLat = Math.max(...steps.map(step => step.GPS_coordinates[0]));
            const minLat = Math.min(...steps.map(step => step.GPS_coordinates[0]));
            const maxLng = Math.max(...steps.map(step => step.GPS_coordinates[1]));
            const minLng = Math.min(...steps.map(step => step.GPS_coordinates[1]));

            const bounds = new latLngBounds([
                [minLat, minLng],
                [maxLat, maxLng],
            ]);
            console.log(bounds);

            map.fitBounds(bounds);
        }
    }, [steps, map]);

    return null;
}


function MyMapContainer() {
    
    const dispatch = useDispatch();
    const steps = useSelector((state) => state.steps.step);

    useEffect(() => {
        dispatch(order());
    }, [dispatch]);

    let i = 0;

    return (
        <React.Fragment>

            <MapContainer 
                center={[45.75934600830078, 4.844399929046631]} //default center
                zoom={20} //default zoom
                // bounds={bounds}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {steps.map((step,) => (
                    MyMarker(step, ++i)
                ))}
                {steps.map((step) => (
                    <RoutingMachine
                        key={step.step_name}
                        step={step}
                        index={steps.indexOf(step)}
                        steps={steps}
                    />
                ))}
                <FitBounds steps={steps} />
            </MapContainer>
        </React.Fragment>
    );
}

export default MyMapContainer;