import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

import { 
    WANNUP_ORANGE,
    WANNUP_VIOLET
} from "../../const/colors";

const createRoutineMachineLayer = ({step, index, steps}) => {

    if (index === steps.length - 1) {
        return L.layerGroup();
    }

    const current_step = step;
    const current_GPS_coordinates = current_step.GPS_coordinates;
    const next_step = steps[index + 1];
    const next_GPS_coordinates = next_step.GPS_coordinates;

    const instance = L.Routing.control({
        waypoints: [
        L.latLng(current_GPS_coordinates[0], current_GPS_coordinates[1]),
        L.latLng(next_GPS_coordinates[0], next_GPS_coordinates[1])
        ],
        lineOptions: {
            styles: [{ color: WANNUP_VIOLET, weight: 4 }]
        },
        createMarker: function() { return null; }, // Disable markers creation
        show: false, // Disable the default instructions panel
        addWaypoints: false,
        routeWhileDragging: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false,
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
