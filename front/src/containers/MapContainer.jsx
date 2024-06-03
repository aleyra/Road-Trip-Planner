import React from "react";
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup
} from 'react-leaflet'
// import {
//     MapContainer,
//     TileLayer,
//     useMap,
//     Marker,
//     Popup
//   } from 'https://cdn.esm.sh/react-leaflet'

//css
import './../css/map.css';

function MyMapContainer() {
    return (
        <React.Fragment>

            <MapContainer 
                center={[45.75934600830078, 4.844399929046631]}
                zoom={20}
                // zoom={13} 
                // scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </React.Fragment>
    );
}

export default MyMapContainer;