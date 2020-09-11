import { moment } from "moment";

// These methods are used by alertComponents to check if
// the given relevant field is correct or incorrect in the current submission

function isRehabPrescriptionBPT() {
    // when radio button clicked a value is stored in hidden input text
    let output =
        (document.getElementById('A00REHAB_PRESEVAL').value === '2'
            || document.getElementById('A00REHAB_PRESNEED').value === '3'
            || document.getElementById('A00REHAB_PRESCMPLT').value === '2' || document.getElementById('A00REHAB_PRESCMPLT').value === '3'
            || document.getElementById('A00REHAB_PRESCOREA').value === '2' || document.getElementById('A00REHAB_PRESCOREA').value === '3'
            || document.getElementById('A00REHAB_PRESDEVINV').value === '2' || document.getElementById('A00REHAB_PRESDEVINV').value === '3'
            || document.getElementById('A00REHAB_PRESDEVDISC').value === '2' || document.getElementById('A00REHAB_PRESDEVDISC').value === '3'
            || document.getElementById('A00REHAB_PRESDEVGVN1').value === '2' || document.getElementById('A00REHAB_PRESDEVGVN1').value == '3'
            || document.getElementById('A00REHAB_PRESDEVGVN2').value === '2' || document.getElementById('A00REHAB_PRESDEVGVN2').value === '3'
            || document.getElementById('A00REHAB_PRESDEVGVN3').value === '2' || document.getElementById('A00REHAB_PRESDEVGVN3').value === '3'
            || document.getElementById('A00REHAB_PRESCHECKS').value === '2' || document.getElementById('A00REHAB_PRESCHECKS').value === '3');

    return !output;
}

function isTransferOnTime() {

    let output = ['input[id*="IN_REQ"]:not([name="A00TRANS_IN_REQ_DATE"]):not([name="A00TRANS_IN_REQ_TIME"])',
        'input[id*="ARV"]:not([name="A00HOSPITAL_ARV_TIME"]):not([name="A00HOSPITAL_ARV_DATE"])']
        .map(selector => moment([...document.querySelectorAll(selector)].map(e => e.value).join(""), 'DDMMYYYYHHmm'))
        .reduce((a, b) => b.diff(a, 'hours', true)) <= 48;

    return output;
}

function isTxaOnTime() {
    let isOnTime;
    let arrMethod = localStorage.getItem('transportMethod');

    let txaDateTime = moment([...document.querySelectorAll('#DINTER_TRANEX_DATE, #MINTER_TRANEX_DATE, #YINTER_TRANEX_DATE, #HINTER_TRANEX_TIME, #NINTER_TRANEX_TIME')]
        .map(e => e.value)
        .join(""), 'DDMMYYYYHHmm');
    // by ambulance, else if it's self-presentation
    if (['1', '2', '9', '14'].includes(arrMethod)) {
        let arrScene = moment([...document.querySelectorAll('#DINCIDENT_ARV_DATE, #MINCIDENT_ARV_DATE, #YINCIDENT_ARV_DATE, #HINCIDENT_ARV_TIME, #NINCIDENT_ARV_TIME')]
            .map(e => e.value)
            .join(""), 'DDMMYYYYHHmm');
        isOnTime = txaDateTime.diff(arrScene, 'minutes', true) <= 60;
    } else if (['13', '3', '6', '5'].includes(arrMethod)) {
        let arrEd = moment(localStorage.getItem('dateTimeArr'), 'DDMMYYYYHHmm');
        isOnTime = txaDateTime.diff(arrEd, 'minutes', true) <= 60;
    }

    return isOnTime;
}

function isCfsCorrect() {
    let arrDateTime = moment(localStorage.getItem('dateTimeArr'), 'DDMMYYYYHHmm');
    let cfsDateTime = moment(
        [...document.querySelectorAll('#DOUT_PATASS_DATE, #MOUT_PATASS_DATE, #YOUT_PATASS_DATE, #HOUT_PATASS_TIME, #NOUT_PATASS_TIME')]
            .map(e => e.value).join(""),
        "DDMMYYYYHHmm");
    let isConsultant = document.getElementById('A00OUT_PATASS_GRADE').value === '1';
    let isGeriatrician = document.getElementById('A00OUT_PATASS_SPEC').value === '4';

    return isConsultant && isGeriatrician && cfsDateTime.diff(arrDateTime, 'hours', true) <= 72;
}

function isGcsOnTime() {
    let arrDateTime = moment(localStorage.getItem('dateTimeArr'), 'DDMMYYYYHHmm');
    let gcsDateTime = moment(
        [...document.querySelectorAll('#DASSESS_DATE_NSYS, #MASSESS_DATE_NSYS, #YASSESS_DATE_NSYS, #HASSESS_TIME_NSYS, #NASSESS_TIME_NSYS')]
            .map(e => e.value).join(""),
        'DDMMYYYYHHmm');
    let gcsValue = document.getElementById('A00ASSESS_GCS_TOTAL');

    return gcsValue && gcsDateTime.diff(arrDateTime, 'minutes', true) <= 30;
}

function isIntubationOnTime() {
    let arrDateTime = moment(
        [...document.querySelectorAll('#DEMERG_ARV_DATE, #MEMERG_ARV_DATE, #YEMERG_ARV_DATE, #HEMERG_ARV_TIME, #NEMERG_ARV_TIME')]
            .map(e => e.value).join(""),
        "DDMMYYYYHHmm");
    let intubationDateTime = moment(
        [...document.querySelectorAll('#DINTER_DATE_AIRSUPP, #MINTER_DATE_AIRSUPP, #YINTER_DATE_AIRSUPP, #HINTER_TIME_AIRSUPP, #NINTER_TIME_AIRSUPP')]
            .map(e => e.value).join(""),
        "DDMMYYYYHHmm");
    let isIntubated = document.getElementById('A00INTER_AIRWAYSUPP').value === '3';

    return isIntubated && intubationDateTime.diff(arrDateTime, 'minutes', true) <= 30;
}

function isCtOnTime() {
    let arrDateTime = moment(localStorage.getItem('dateTimeArr'), 'DDMMYYYYHHmm');
    let ctDateTime = moment(
        [...document.querySelectorAll('#DASSESS_DATE_CT, #MASSESS_DATE_CT, #YASSESS_DATE_CT, #HASSESS_TIME_CT, #NASSESS_TIME_CT')]
            .map(e => e.value).join(""),
        "DDMMYYYYHHmm");

    return ctDateTime.diff(arrDateTime, 'minutes', true) <= 60;
}

export {
    isRehabPrescriptionBPT, isTransferOnTime, isTxaOnTime,
    isCfsCorrect, isGcsOnTime, isIntubationOnTime, isCtOnTime
};