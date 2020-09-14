import {
    setSelectOptionTriggerChange,
    ifRadiosInRowEmptyClickRadio,
    populateObservationsDates,
    populateObservationsTimes,
    clickNoToRemainingInterventions,
    addListenerToUsualObservations,
    addListenerToUsualInterventions,
    expandObservations,    
} from "Utils";

function preHospitalSection() {
    // store method of transport, so we know if it's self presentation or not to calculate if TXA on time
    document.getElementById('A00INCIDENT_ARV_MODE').addEventListener('change', (e) => { localStorage.setItem('transportMethod', e.target.value) });
    // transport method to ambulance
    setSelectOptionTriggerChange('A00INCIDENT_ARV_MODE', 1);
    // pre-hospital details
    ifRadiosInRowEmptyClickRadio('R00PREHOSP_STAY', 'RB0PREHOSP_STAY');
    // PRF issued
    ifRadiosInRowEmptyClickRadio('R00PR_FORM', 'RB0PR_FORM');
    // CAD number
    document.getElementById('A00INCIDENT_CAD_NUMBER').value = "9999";
    // attendants
    document.getElementById('RB0INTER_ATTENDANT').addEventListener('click', (e) => {
        document.getElementById('DATT_ATT_DATE').value = document.getElementById('DINCIDENT_ARV_DATE').value;
        document.getElementById('MATT_ATT_DATE').value = document.getElementById('MINCIDENT_ARV_DATE').value;
        document.getElementById('YATT_ATT_DATE').value = document.getElementById('YINCIDENT_ARV_DATE').value;
        document.getElementById('HATT_ATT_TIME').value = document.getElementById('HINCIDENT_ARV_TIME').value;
        document.getElementById('NATT_ATT_TIME').value = document.getElementById('NINCIDENT_ARV_TIME').value;
        // dispatch blur event to simulate user action
        document.getElementById('NATT_ATT_TIME').dispatchEvent(new Event('blur'));
        setSelectOptionTriggerChange('A00ATT_TYPE', 4);
        setSelectOptionTriggerChange('A00ATT_AMB_SERVICE', 1158);
    });
    // expand observations
    expandObservations();
    // populate obs date-times with arrival at scene
    document.querySelectorAll('#DINCIDENT_ARV_DATE, #MINCIDENT_ARV_DATE, #YINCIDENT_ARV_DATE, #HINCIDENT_ARV_TIME, #NINCIDENT_ARV_TIME').forEach((cell) => {
        cell.addEventListener('blur', (e) => {
            populateObservationsDates(
                document.getElementById('DINCIDENT_ARV_DATE').value,
                document.getElementById('MINCIDENT_ARV_DATE').value,
                document.getElementById('YINCIDENT_ARV_DATE').value
            );
            populateObservationsTimes(
                document.getElementById('HINCIDENT_ARV_TIME').value,
                document.getElementById('NINCIDENT_ARV_TIME').value
            );
        });
    });
    // add button to click no tomall remaining unanswered interventions
    let noToIntersButton = document.createElement('input');
    noToIntersButton.type = 'button';
    noToIntersButton.value = 'No to remaining';
    noToIntersButton.addEventListener('click', (e) => { clickNoToRemainingInterventions() });
    document.getElementById('GROUP6').appendChild(noToIntersButton);
    // listeners to usual observations and interventions
    addListenerToUsualObservations();
    addListenerToUsualInterventions();
}

export { preHospitalSection };
