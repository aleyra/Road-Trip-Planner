import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

import { WANNUP_ORANGE } from "../../const/colors";

const createRoutineMachineLayer = () => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(45.75, 4.85),
      L.latLng(43.3, 5.4)
    ],
    lineOptions: {
        styles: [{ color: WANNUP_ORANGE, weight: 4 }]
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
