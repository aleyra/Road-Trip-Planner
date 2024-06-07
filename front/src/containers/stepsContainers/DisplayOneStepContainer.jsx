import React from "react";
import { useDispatch } from "react-redux";

//css
import './../../css/stepList.css';

//reduc actions
import {
    removeStep,
    setModifyTrue,
} from "../../redux/slices/step";


function DisplayOneStep(step, index, steps) {
    const dispatch = useDispatch();

    let hasError = false;

    // prepare var to check overlapping with next and previous steps
    const current_step = step;
    const current_step_arrival_date = new Date(current_step.step_arrival_date);
    const current_step_days_stay = current_step.step_days_stay;
    const current_step_departure_date = new Date(current_step_arrival_date);
    current_step_departure_date.setDate(current_step_departure_date.getDate() + current_step_days_stay);
    if (index !== 0){
        const previous_step = steps[index - 1];
        const previous_step_arrival_date = new Date(previous_step.step_arrival_date);
        const previous_step_departure_date = new Date(previous_step_arrival_date);
        previous_step_departure_date.setDate(previous_step_departure_date.getDate() + previous_step.step_days_stay);
        if (previous_step_departure_date > current_step_arrival_date) {
            hasError = true;
        }
    }
    if (index !== steps.length - 1){
        const next_step = steps[index + 1];
        const next_step_arrival_date = new Date(next_step.step_arrival_date);
        if (current_step_departure_date > next_step_arrival_date) {
            hasError = true;
        }
    }

    let classCSS = "step-one-ok";
    let error_msg = "*Le sejour se chevauche avec l'étape précédente ou suivante"

    if (hasError === true) {
        classCSS = "step-one-nok";
    } else {
        error_msg = "";
    }

    // get arrival date in french format
    const arrival_date = new Date(step.step_arrival_date);
    const day = arrival_date.getDate();
    const month = arrival_date.getMonth() + 1; // don't know why getMonth() return month - 1
    const year = arrival_date.getFullYear();
    const txt_arrival_date = `${day.toString().padStart(2, "0")}/${month.toString().padStart(2,"0")}/${year.toString()}`;
    
    let word = "jour";
    if (step.step_days_stay > 1) {
        word = "jours";
    }

    //case to modify is true
    const [stepName, setStepName] = useState(step.step_name);
    const [address, setAddress] = useState(step.address);
    const [stepArrivalDate, setStepArrivalDate] = useState(step.step_arrival_date);
    const [stepDaysStay, setStepDaysStay] = useState(step.step_days_stay);

    function handleStep_nameChange(e){
        setStepName(e.target.value);
    }

    function handleAddressChange(e){
        setAddress(e.target.value);
    }

    function handleStep_arrival_dateChange(e){
        setStepArrivalDate(e.target.value);
    }

    function handleStep_days_stayChange(e){
        setStepDaysStay(e.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        const encodedAddress = encodeURIComponent(address);
        console.log(`Adresse encodée: ${encodedAddress}`);
        const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&addressdetails=1&limit=1`;

        try {
            const response = await axios.get(url);
            if (response.data.length > 0) {
                const location = response.data[0];
                if (location.lat && location.lon) {
                    dispatch(updateStep({
                        address,
                        GPS_coordinates: [location.lat, location.lon],
                        step_name: stepName,
                        step_arrival_date: stepArrivalDate,
                        step_days_stay: stepDaysStay,
                    }));
                    console.log('Etape modifiée:', {
                        address,
                        GPS_coordinates: [location.lat, location.lon],
                        step_name: stepName,
                        step_arrival_date: stepArrivalDate,
                        step_days_stay: stepDaysStay,
                    });
                } else {
                    console.log('Erreur de géolocalisation');
                }
            } else {
                console.log('Adresse non trouvée');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    }

    console.log('step:', step);

    if (step.to_modify === false) {
        return (
            <div>
                <div className={classCSS}>
                    <div className="step-number">{index + 1}</div>
                    <div>
                        <p>Nom : {step.step_name}</p>
                        <p>Adresse : {step.address}</p>
                        <p>Date d'arrivée : {txt_arrival_date}</p>
                        <p>Durée du séjour : {step.step_days_stay} {word}</p>
                    </div>
                    <div>
                        <button onClick={() => dispatch(setModifyTrue(step.step_name))}>Modifier</button>
                        <button onClick={() => dispatch(removeStep(step.step_name))}>Supprimer</button>
                        {/* <button onClick={() => dispatch(exchangeStep(step.step_name))}>Echanger</button> */}
                    </div>
                </div>
                <div className="error">{error_msg}</div>
            </div>
        );
    } else {
        return (
            <div>
                <div className='step-one-modify'>
                    <div className="step-number">{index + 1}</div>
                    <div>
                        <p>Nom : {step.step_name}</p>
                        <p>Adresse : {step.address}</p>
                        <p>Date d'arrivée : {txt_arrival_date}</p>
                        <p>Durée du séjour : {step.step_days_stay} {word}</p>
                    </div>
                    <div>
                        <button onClick={() => dispatch(setModifyTrue(step.step_name))}>Modifier</button>
                        <button onClick={() => dispatch(removeStep(step.step_name))}>Supprimer</button>
                        {/* <button onClick={() => dispatch(exchangeStep(step.step_name))}>Echanger</button> */}
                    </div>
                </div>
                <div className="error">{error_msg}</div>
            </div>
        );
    }
}

export default DisplayOneStep;