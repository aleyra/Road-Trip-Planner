import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet'
import { Icon } from "leaflet";

//css
import './../css/map.css';
import 'leaflet/dist/leaflet.css';

//redux actions
import { order } from "../redux/slices/step";

const pin = new Icon({
    iconUrl: "/pin.png",
    iconSize: [50, 50]
});

function MyMarker(step, indice){
    return (
        <Marker
            key={step.step_name}
            position={step.GPS_coordinates}
            icon={pin}
        >
            <Popup>
                Etape {indice} <br />
                Nom : {step.step_name} <br />
                Adresse : {step.address} <br />
                Date d'arrivée : {step.step_arrival_date} <br />
                Durée du séjour en jours : {step.step_days_stay} <br />
            </Popup>
        </Marker>
    )
}



function MyMapContainer() {
    
    const dispatch = useDispatch();
    const steps = useSelector((state) => state.steps.step);

    dispatch(order());

    return (
        <React.Fragment>

            <MapContainer 
                center={[45.75934600830078, 4.844399929046631]}
                zoom={20}
                // scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker
                    key='WannUp'
                    position={[45.75934600830078, 4.844399929046631]}
                    icon={pin}
                >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
                {steps.map((step, i = 0) => (
                    MyMarker(step, i + 1)
                ))}
            </MapContainer>
        </React.Fragment>
    );
}

export default MyMapContainer;