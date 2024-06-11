import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet'

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
                center={[45.75934600830078, 4.844399929046631]}
                zoom={20}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {steps.map((step,) => (
                    MyMarker(step, ++i)
                ))}
                <RoutingMachine />
            </MapContainer>
        </React.Fragment>
    );
}

export default MyMapContainer;