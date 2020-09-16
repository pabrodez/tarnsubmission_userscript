// these methods return a DOM element and
// use the appropriate alertChecker to alert
// the user of an incorrect input

import {
    isRehabPrescriptionBPT, isTransferOnTime, isTxaOnTime,
    isCfsCorrect, isGcsOnTime, isIntubationOnTime, isCtOnTime
} from 'AlertChecker';

import {
    parseObsFromEdText,
    setSelectOptionTriggerChange,
    case_when,
    matched
} from 'Utils';

function getLateTransferAlert() {
    let wrapper = document.createElement('section');
    wrapper.innerHTML = `<p id="transferTimeAlert">${isTransferOnTime() ? "Transfer on time" : "Transfer NOT on time"}</p>`;
    let dateArrival = document.querySelectorAll('input[id$="ARV_DATE"]:not([name="A00HOSPITAL_ARV_DATE"])');
    let timeArrival = document.querySelectorAll('input[id$="ARV_TIME"]:not([name="A00HOSPITAL_ARV_TIME"])');
    let dateRef = document.querySelectorAll('input[id$="IN_REQ_DATE"]:not([name="A00TRANS_IN_REQ_DATE"])');
    let timeRef = document.querySelectorAll('input[id$="IN_REQ_TIME"]:not([name="A00TRANS_IN_REQ_TIME"])');
    [...dateArrival, ...timeArrival, ...dateRef, ...timeRef].forEach((el) => {
        el.addEventListener('blur', (e) => {
            document.getElementById('transferTimeAlert').innerText = isTransferOnTime() ? 'Transfer on time' : 'Transfer NOT on time';
        });
    });

    return wrapper;

}

function getRehabNonBptAlert() {
    let wrapper = document.createElement('section');
    wrapper.innerHTML = `<p id="rehabNonBptAlert">${isRehabPrescriptionBPT() ? "Rehab ok" : "Rehab NOT ok"}</p>`;
    // add listener to all buttons that belong to Rehab prescription
    document.querySelectorAll('[id^="R00REHAB"] input[type="radio"]').forEach((button) => {
        button.addEventListener('click', (e) => { document.getElementById('rehabNonBptAlert').innerText = isRehabPrescriptionBPT() ? "Rehab ok" : "Rehab NOT ok" })
    });

    return wrapper;
}

function getLateTxaAlert() {
    let wrapper = document.createElement('section');
    wrapper.innerHTML = `<p id="lateTxaAlert">${isTxaOnTime() ? "TXA on time" : "TXA NOT on time"}</p>`;

    document.querySelectorAll('#DINTER_TRANEX_DATE, #MINTER_TRANEX_DATE, #YINTER_TRANEX_DATE, #HINTER_TRANEX_TIME, #NINTER_TRANEX_TIME').forEach((elm) => {
        elm.addEventListener('change', (e) => {
            document.getElementById('lateTxaAlert').innerText = isTxaOnTime() ? 'TXA on time' : 'TXA NOT on time';
        });
    });

    return wrapper;
};

function getIncorrectCfsAlert() {
    let wrapper = document.createElement('section');
    wrapper.innerHTML = '<p><span id="incorrectCfsAlert"></span>CFS</p>';
    document.querySelectorAll('#DOUT_PATASS_DATE, #MOUT_PATASS_DATE, #YOUT_PATASS_DATE, #HOUT_PATASS_TIME, #NOUT_PATASS_TIME, #A00OUT_PATASS_GRADE, #A00OUT_PATASS_SPEC').forEach((input) => {
        input.addEventListener('change', (e) => { document.getElementById('incorrectCfsAlert').textContent = isCfsCorrect() ? '👌' : '❌'; })
    });

    return wrapper;
}

function getEdObsTextHelper() {
    let wrapper = document.createElement('section');
    wrapper.setAttribute('style', 'display:flex; flex-direction:column;');
    let textArea = document.createElement('textarea');
    textArea.id = 'obsText';
    let helperButton = document.createElement('input');
    helperButton.type = 'button';
    helperButton.value = 'Paste observations';
    helperButton.addEventListener('click', (e) => {
        let obs = parseObsFromEdText(document.getElementById('obsText').value);

        setSelectOptionTriggerChange('A00ASSESS_AIRWAYS_VAL',
            case_when(obs.airway)
                .is(x => x === 'clear', () => 1)
                .is(x => /intubated|intubation|ett/i.test(x), () => 4)
                .is(x => /vomiting|obstructed|obstruction|partial obstruction/i.test(x), () => 3)
                .is(x => /opa|npa/i.test(x), () => 2)
                .otherwise(() => '')
        );

        document.getElementById('A00ASSESS_OXIMETER_SAT').value = obs.sat;
        document.getElementById('A00ASSESS_RESP_RATE_VAL').value = obs.resp;
        document.getElementById('A00ASSESS_PULSE_VAL').value = obs.pulse;
        document.getElementById('A00ASSESS_SYSBP_VAL').value = obs.bpsys;
        document.getElementById('A00ASSESS_DIABP_VAL').value = obs.bpdias;
        if (/normal/i.test(obs.cr)) document.getElementById('RB0ASSESS_CREFILL_NORM').click();
        document.getElementById('A00ASSESS_GCS_EYE').value = obs.gcse;
        document.getElementById('A00ASSESS_GCS_VERBAL').value = obs.gcsv;
        document.getElementById('A00ASSESS_GCS_MOTOR').value = obs.gcsm;
        setSelectOptionTriggerChange('A00ASSESS_GCS_TOTAL', obs.gcstotal);
        document.getElementById('A00ASSESS_GCS_LEFT_EYE').value = obs.leftpupsize;
        document.getElementById('A00ASSESS_GCS_RIGHT_EYE').value = obs.rightpupsize;
        case_when(obs.leftpupreact)
            .is(x => /react|reactive|brisk|yes/i.test(x),        () => document.getElementById('RB1ASSESS_GCS_RCT_LEFT').click())
            .is(x => /sluggish/i.test(x),                        () => document.getElementById('RB2ASSESS_GCS_RCT_LEFT').click())
            .is(x => /absent|non-?reactive|unreactive/i.test(x), () => document.getElementById('RB3ASSESS_GCS_RCT_LEFT').click())
        case_when(obs.rightpupreact)
            .is(x => /react|reactive|brisk|yes/i.test(x),        () => document.getElementById('RB1ASSESS_GCS_RCT_RIGHT').click())
            .is(x => /sluggish/i.test(x),                        () => document.getElementById('RB2ASSESS_GCS_RCT_RIGHT').click())
            .is(x => /absent|non-?reactive|unreactive/i.test(x), () => document.getElementById('RB3ASSESS_GCS_RCT_RIGHT').click())
    });

    wrapper.appendChild(textArea);
    wrapper.appendChild(helperButton);

    return wrapper;
}

function getLateGcsAlert() {
    let wrapper = document.createElement('section');
    wrapper.innerHTML = '<p id="lateGcsAlert"></p>';
    document.querySelectorAll('#A00ASSESS_GCS_TOTAL, #R00ASSESS_DATE_NSYS input[type="text"], #R00ASSESS_TIME_NSYS input[type="text"]').forEach((input) => {
        input.addEventListener('change', (e) => { document.getElementById('lateGcsAlert').textContent = isGcsOnTime() ? 'GCS is ON TIME' : 'GCS is LATE'; })
    });

    return wrapper;
}

function getLateIntubationAlert() {
    let wrapper = document.createElement('section');
    wrapper.innerHTML = '<p id="lateIntubationAlert"></p>';
    document.querySelectorAll('#A00INTER_AIRWAYSUPP, #R00INTER_DATE_AIRSUPP input[type="text"], #R00INTER_TIME_AIRSUPP input[type="text"]').forEach((input) => {
        input.addEventListener('change', (e) => { document.getElementById('lateIntubationAlert').textContent = isIntubationOnTime() ? 'Intubation is ON TIME' : 'Intubation is LATE'; })
    });

    return wrapper;
}

function getAsideAutoSaveSlider() {
    if (localStorage.getItem('timeToSave') === null) localStorage.setItem('timeToSave', 5);
    let wrapper = document.createElement('section');
    wrapper.innerHTML = `<p>Auto-save <span id="timeToSave">${localStorage.getItem('timeToSave')}</span>mins</p>`;
    let slider = document.createElement('input');
    slider.type = 'range';
    slider.min = 1;
    slider.max = 10;
    slider.value = Number(localStorage.getItem('timeToSave'));
    slider.step = 1;
    let autosaveInterval = setTimeout(() => { document.getElementById('btnSave').click(); }, 1000 * 60 * Number(localStorage.getItem('timeToSave')));
    slider.addEventListener('input', (e) => {
        document.getElementById('timeToSave').textContent = e.target.value;
        localStorage.setItem('timeToSave', e.target.value);
        clearTimeout(autosaveInterval);
        autosaveInterval = setTimeout(() => { document.getElementById('btnSave').click(); }, 1000 * 60 * Number(localStorage.getItem('timeToSave')));
    });

    wrapper.appendChild(slider);

    return wrapper
}

function getDisableTimeouButton() {
    // client side timeout from https://www.tarn.ac.uk/javascript/ClientSideTimeOut.js
    // resetTimer() clears intervals and re-starts the intervals calling SetTimerInterval()
    // call resetTimer() every 10 secs
    if (localStorage.getItem('disTimeout') === null) localStorage.setItem('disTimeout', 'no');
    let isTimeoutDisabled = localStorage.getItem('disTimeout');
    let wrapper = document.createElement('section');
    let disTimeoutButton = document.createElement('input');
    disTimeoutButton.id = 'disTimeout';
    disTimeoutButton.type = 'button';
    disTimeoutButton.value = 'Disable timeout';
    disTimeoutButton.setAttribute('style', isTimeoutDisabled === 'no' ? 'background-color:red;' : 'background-color:green;');
    let timeoutInterval;
    if (isTimeoutDisabled === 'yes') {
        timeoutInterval = setInterval(() => { resetTimer(); }, 10 * 1000);
    }
    disTimeoutButton.addEventListener('click', (e) => {
        localStorage.setItem('disTimeout', localStorage.getItem('disTimeout') === 'no' ? 'yes' : 'no');
        e.target.setAttribute('style', localStorage.getItem('disTimeout') === 'no' ? 'background-color:red;' : 'background-color:green;');
        if (localStorage.getItem('disTimeout') === 'yes') {
            timeoutInterval = setInterval(() => { resetTimer(); }, 10 * 1000);
        } else if (localStorage.getItem('disTimeout') === 'no') {
            clearInterval(timeoutInterval);
        }
    })
    wrapper.appendChild(disTimeoutButton);

    return wrapper;
}

function getLateCtAlert() {
    let wrapper = document.createElement('section');
    wrapper.innerHTML = '<p id="lateCtAlert"></p>';
    document.querySelectorAll('#DASSESS_DATE_CT, #MASSESS_DATE_CT, #YASSESS_DATE_CT, #HASSESS_TIME_CT, #NASSESS_TIME_CT').forEach((input) => {
        input.addEventListener('change', (e) => { document.getElementById('lateCtAlert').textContent = isCtOnTime() ? 'CT is ON TIME' : 'CT is LATE'; })
    });

    return wrapper;
}

export {
    getLateTransferAlert, getRehabNonBptAlert,
    getLateTxaAlert, getIncorrectCfsAlert,
    getEdObsTextHelper, getLateGcsAlert,
    getLateIntubationAlert, getAsideAutoSaveSlider,
    getDisableTimeouButton, getLateCtAlert
};