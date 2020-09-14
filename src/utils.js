import { getLateTxaAlert } from "AlertComponents";

function populateObservationsDates(day, month, year) {
    document.querySelectorAll('[id^="DASSESS_DATE"]').forEach((d) => { d.value = d.value || day });
    document.querySelectorAll('[id^="MASSESS_DATE"]').forEach((m) => { m.value = m.value || month });
    // the blur event below triggers the TARN page to store the date
    document.querySelectorAll('[id^="YASSESS_DATE"]').forEach((y) => { y.value = y.value || year; y.dispatchEvent(new Event('blur')) });
}

function populateObservationsTimes(hour, minute) {
    document.querySelectorAll('[id^="HASSESS_TIME"]').forEach((h) => { h.value = h.value || hour });
    document.querySelectorAll('[id^="NASSESS_TIME"]').forEach((n) => { n.value = n.value || minute; n.dispatchEvent(new Event('blur')) });
}

function addListenerToUsualInterventions() {
    // adds click listener to most common interventions, which populates them with most common values
    // fluids
    document.getElementById('RB0INTER_FLUIDBOLUS').addEventListener('click', (e) => {
        document.getElementById('B03INTER_DATE_FLUID').click();
        document.getElementById('A00INTER_FLUID_BLSTYPE').value = 3;
        document.getElementById('A00INTER_FLUID_VOL').value = 1000;
    });
    // TXA
    document.getElementById('RB0INTER_TRANEXAMIC').addEventListener('click', (e) => {
        document.getElementById('A00INTER_TRANEX_VOL').value = 1000;
        // add late TXA alert
        if (!document.getElementById('lateTxaAlert')) {
            document.getElementById('toolbar').appendChild(getLateTxaAlert());
        }        
    });
    // Spinal immobilisation
    document.getElementById('RB0INTER_SPROT').addEventListener('click', (e) => {
        document.getElementById('A00INTER_SPROT_TYPE').value = 12;
    });
    // if intubated breathing support to mechanical ventilation
    document.getElementById('A00INTER_AIRWAYSUPP').addEventListener('change', (e) => {
        if (e.target.value === '3') {
            document.getElementById('RB0INTER_BREATHSUPP').click();
            setSelectOptionTriggerChange('A00INTER_BSUPP_VAL', 3);
        }
    });
}

function addListenerToUsualObservations() {
    // if airway status is intubated breathing is mechanical ventilation and GCS = No
    document.getElementById('A00ASSESS_AIRWAYS_VAL').addEventListener('change', (e) => {
        if (e.target.value === '4') {
            setSelectOptionTriggerChange('A00ASSESS_BREATHS_VAL', 8);
            document.getElementById('RB1ASSESS_GCS').click();            
        }
    });
}

function expandObservations() {
    // Obs: respiratory
    ifRadiosInRowEmptyClickRadio('R00ASSESS_OBS_RESP', 'RB0ASSESS_OBS_RESP');
    // airways status
    ifRadiosInRowEmptyClickRadio('R00ASSESS_AIRWAYSTATUS', 'RB0ASSESS_AIRWAYSTATUS');
    // breathing status
    ifRadiosInRowEmptyClickRadio('R00ASSESS_BREATHSTATUS', 'RB0ASSESS_BREATHSTATUS');
    // oxygen saturation
    ifRadiosInRowEmptyClickRadio('R00ASSESS_OXIMETER', 'RB0ASSESS_OXIMETER');
    // respiratory rate
    ifRadiosInRowEmptyClickRadio('R00ASSESS_RESP_RATE', 'RB0ASSESS_RESP_RATE');
    // Obs: circulation
    ifRadiosInRowEmptyClickRadio('R00ASSESS_OBS_CIRC', 'RB0ASSESS_OBS_CIRC');
    // pulse rate
    ifRadiosInRowEmptyClickRadio('R00ASSESS_PULSE', 'RB0ASSESS_PULSE');
    // blood presure
    ifRadiosInRowEmptyClickRadio('R00ASSESS_BLOODPRESSURE', 'RB0ASSESS_BLOODPRESSURE');
    // capillary refill
    ifRadiosInRowEmptyClickRadio('R00ASSESS_CREFILL', 'RB0ASSESS_CREFILL');
    // Obs: nervous system
    ifRadiosInRowEmptyClickRadio('R00ASSESS_OBS_NSYS', 'RB0ASSESS_OBS_NSYS');
    // GCS
    ifRadiosInRowEmptyClickRadio('R00ASSESS_GCS', 'RB0ASSESS_GCS');
    // pupil size
    ifRadiosInRowEmptyClickRadio('R00ASSESS_GCS_PSIZE', 'RB0ASSESS_GCS_PSIZE');
    // pupil reactivity
    ifRadiosInRowEmptyClickRadio('R00ASSESS_GCS_PUPIL', 'RB0ASSESS_GCS_PUPIL');
    // Obs: investigations
    ifRadiosInRowEmptyClickRadio('R00ASSESS_BSAMP', 'RB1ASSESS_BSAMP');
}

function clickNoToRemainingInterventions(isEd = false) {
    ifRadiosInRowEmptyClickRadio('R00INTER_AIRWAYSUPPORT', 'RB1INTER_AIRWAYSUPPORT');
    ifRadiosInRowEmptyClickRadio('R00INTER_BREATHSUPP', 'RB1INTER_BREATHSUPP');
    ifRadiosInRowEmptyClickRadio('R00INTER_THORACOSTOMY', 'RB1INTER_THORACOSTOMY');
    ifRadiosInRowEmptyClickRadio('R00INTER_SPROT', 'RB1INTER_SPROT');
    ifRadiosInRowEmptyClickRadio('R00INTER_TRANSFUSION', 'RB1INTER_TRANSFUSION');
    ifRadiosInRowEmptyClickRadio('R00INTER_FLUIDBOLUS', 'RB1INTER_FLUIDBOLUS');
    ifRadiosInRowEmptyClickRadio('R00INTER_CDRAIN', 'RB1INTER_CDRAIN');
    ifRadiosInRowEmptyClickRadio('R00INTER_TRANEXAMIC', 'RB1INTER_TRANEXAMIC');
    ifRadiosInRowEmptyClickRadio('R00INTER_ANAL', 'RB1INTER_ANAL');
    ifRadiosInRowEmptyClickRadio('R00INTER_ANTICOAG_REV', 'RB1INTER_ANTICOAG_REV');
    if (isEd) {
        ifRadiosInRowEmptyClickRadio('R00INTER_AWS_EXTUB', 'RB1INTER_AWS_EXTUB');
        ifRadiosInRowEmptyClickRadio('R00INTER_SPROT_REM', 'RB1INTER_SPROT_REM');
        ifRadiosInRowEmptyClickRadio('R00INTER_EMOB', 'RB1INTER_EMOB');
    }
}

function ifRadiosInRowEmptyClickRadio(questionnaireRowId, radioIdToClick) {
    // when clicking and observation or intervention a value is stored in a hidden input beginning with A00
    let input = document.getElementById(`${'A00' + questionnaireRowId.substring(3)}`).value;
    if (!input) {
        document.getElementById(radioIdToClick).click();
    }
}

function ifTextIsEmptyClickPopulate(questionnaireRowId, buttonIdToClick) {
    let dateInputs = document.querySelectorAll('#' + questionnaireRowId + ' input[type=text]');
    if (!Array.from(dateInputs).some(date => date.value)) {
        document.getElementById(buttonIdToClick).click();
    }
}

function setSelectOptionTriggerChange(selectId, valueToSet) {
    let selectInput = document.getElementById(selectId);
    if (selectInput.value === "") {
        selectInput.value = valueToSet;
        selectInput.dispatchEvent(new Event('change'));
    }
}

function parseObsFromEdText(edText) {
    // works for ED Major Trauma Assessment v2, ED MTS v2 and NEWS Chart - ADULT
    let obsRegex = {
        'airway': /(?<=airway status:[\s])clear|obstructed|obstruction|intubated|intubation|ett|supported/i,
        'resp': /(?<=(respiratory rate|Respiration rate Resp\/min):[\s])\d{1,2}/i,
        'sat': /(?<=o2 saturation[\s%]*:[\s]?)\d{1,3}/i,
        'pulse': /(?<=(pulse|heart) rate(\sbpm)?:[\s])\d{1,3}(?=\sbpm)/i,
        'bpsys': /(?<=bp systolic(\smmhg)?:[\s])\d{1,3}(?=\s?mmhg)/i,
        'bpdias': /(?<=bp diastolic(\smmhg)?:[\s])\d{1,3}(?=\s?mmhg)/i,
        'cr': /(?<=capillary refill:[\s]?)normal|abnormal/i,
        'gcse': /(?<=(gcs - e|eyes open):[\s]?)\d/i,
        'gcsv': /(?<=(gcs - v|best verbal response):[\s]?)\d/i,
        'gcsm': /(?<=(gcs - m|best motor response):[\s]?)\d/i,
        'gcstotal': /(?<=(gcs - total|gcs score):[\s]?)\d+/i,
        'leftpupsize': /(?<=left pupil size:[\s]?)\d(?= mm)/i,
        'leftpupreact': /(?<=left pupil (response|reaction):[\s])\w+/i,
        'rightpupsize': /(?<=right pupil size:[\s]?)\d(?= mm)/i,
        'rightpupreact': /(?<=right pupil (response|reaction):[\s])\w+/i,
    }
    for (const [obs, regx] of Object.entries(obsRegex)) {
        let matchStr = edText.match(regx);
        obsRegex[obs] = matchStr ? matchStr[0] : "";
    }

    return obsRegex;
}

export {
    populateObservationsDates, parseObsFromEdText,
    populateObservationsTimes, addListenerToUsualInterventions,
    expandObservations, clickNoToRemainingInterventions,
    ifTextIsEmptyClickPopulate, setSelectOptionTriggerChange,
    ifRadiosInRowEmptyClickRadio, addListenerToUsualObservations
}