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

function getAlertBox(alertCheckerFun, id) {
    let wrapper = document.createElement('blockquote');
    wrapper.id = id;
    wrapper.classList.add('alertBox');
    wrapper.classList.toggle('correct', alertCheckerFun());

    return wrapper;
}

function toggleAlertBoxState(alertBoxId, alertCheckerFun, correctMsg, wrongMsg) {
    let alertBox = document.getElementById(alertBoxId);
    if (alertCheckerFun()) {
        alertBox.firstChild.textContent = correctMsg;
        alertBox.classList.add('correct');
    } else {
        alertBox.firstChild.textContent = wrongMsg;
        alertBox.classList.remove('correct');
    }
}

function getLateTransferAlert() {
    let alertBox = getAlertBox(isTransferOnTime, 'transferBox')
    alertBox.innerHTML = `<p id="transferTimeAlert">${isTransferOnTime() ? "✅ Transfer on time" : "❌ Transfer NOT on time"}</p>`;

    let dateArrival = document.querySelectorAll('input[id$="ARV_DATE"]:not([name="A00HOSPITAL_ARV_DATE"])');
    let timeArrival = document.querySelectorAll('input[id$="ARV_TIME"]:not([name="A00HOSPITAL_ARV_TIME"])');
    let dateRef = document.querySelectorAll('input[id$="IN_REQ_DATE"]:not([name="A00TRANS_IN_REQ_DATE"])');
    let timeRef = document.querySelectorAll('input[id$="IN_REQ_TIME"]:not([name="A00TRANS_IN_REQ_TIME"])');
    [...dateArrival, ...timeArrival, ...dateRef, ...timeRef].forEach((el) => {
        el.addEventListener('blur', (e) => {
            toggleAlertBoxState('transferBox', isTransferOnTime, '✅ Transfer on time', '❌ Transfer NOT on time');
        });
    });

    return alertBox;
}

function getRehabNonBptAlert() {
    let alertBox = getAlertBox(isRehabPrescriptionBPT, 'rehabBox');
    alertBox.innerHTML = `<p id="rehabNonBptAlert">${isRehabPrescriptionBPT() ? "✅ Rehab ok" : "❌ Rehab NOT ok"}</p>`;
    // add listener to all buttons that belong to Rehab prescription
    document.querySelectorAll('[id^="R00REHAB"] input[type="radio"]').forEach((button) => {
        button.addEventListener('click', (e) => { 
            toggleAlertBoxState('rehabBox', isRehabPrescriptionBPT, '✅ Rehab ok', '❌ Rehab NOT ok')
        });
    });

    return alertBox;
}

function getLateTxaAlert() {
    let alertBox = getAlertBox(isTxaOnTime, 'txaBox');
    alertBox.innerHTML = `<p id="lateTxaAlert">${isTxaOnTime() ? "✅ TXA on time" : "❌ TXA NOT on time"}</p>`;

    document.querySelectorAll('#DINTER_TRANEX_DATE, #MINTER_TRANEX_DATE, #YINTER_TRANEX_DATE, #HINTER_TRANEX_TIME, #NINTER_TRANEX_TIME').forEach((elm) => {
        elm.addEventListener('change', (e) => {
            toggleAlertBoxState('txaBox', isTxaOnTime, '✅ TXA on time', '❌ TXA NOT on time');
        });
    });

    return alertBox;
};

function getIncorrectCfsAlert() {
    let alertBox = getAlertBox(isCfsCorrect, 'cfsBox');
    alertBox.innerHTML = `<p id="incorrectCfsAlert">${isCfsCorrect() ? '👌 CFS correct' :  '❌ CFS NOT correct'}</p>`;
    document.querySelectorAll('#DOUT_PATASS_DATE, #MOUT_PATASS_DATE, #YOUT_PATASS_DATE, #HOUT_PATASS_TIME, #NOUT_PATASS_TIME, #A00OUT_PATASS_GRADE, #A00OUT_PATASS_SPEC').forEach((input) => {
        input.addEventListener('change', (e) => {
            toggleAlertBoxState('cfsBox', isCfsCorrect, '👌 CFS correct', '❌ CFS NOT correct')
        })
    });

    return alertBox;
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
                .is(x => /clear/i.test(x), () => 1)
                .is(x => /intubated|intubation|ett/i.test(x), () => 4)
                .is(x => /vomiting|obstructed|obstruction|obstruction/i.test(x), () => 3)
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
            .is(x => /\b(react|reacting|reactive|brisk|yes)\b/i.test(x), () => document.getElementById('RB1ASSESS_GCS_RCT_LEFT').click())
            .is(x => /sluggish/i.test(x), () => document.getElementById('RB2ASSESS_GCS_RCT_LEFT').click())
            .is(x => /absent|non(-|\s)?reactive|unreactive/i.test(x), () => document.getElementById('RB3ASSESS_GCS_RCT_LEFT').click())
        case_when(obs.rightpupreact)
            .is(x => /\b(react|reacting|reactive|brisk|yes)\b/i.test(x), () => document.getElementById('RB1ASSESS_GCS_RCT_RIGHT').click())
            .is(x => /sluggish/i.test(x), () => document.getElementById('RB2ASSESS_GCS_RCT_RIGHT').click())
            .is(x => /absent|non(-|\s)?reactive|unreactive/i.test(x), () => document.getElementById('RB3ASSESS_GCS_RCT_RIGHT').click())
    });

    wrapper.appendChild(textArea);
    wrapper.appendChild(helperButton);

    return wrapper;
}

function getLateGcsAlert() {
    let alertBox = getAlertBox(isGcsOnTime, 'gcsBox');
    alertBox.innerHTML = `<p id="lateGcsAlert">${isGcsOnTime() ? '✅ GCS is ON TIME' : '❌ GCS is LATE'}</p>`;
    document.querySelectorAll('#R00ASSESS_OBS_NSYS input[type="radio"], #R00ASSESS_GCS input[type="radio"], #A00ASSESS_GCS_TOTAL, #R00ASSESS_DATE_NSYS input[type="text"], #R00ASSESS_TIME_NSYS input[type="text"]')
    .forEach((input) => {
        input.addEventListener('change', (e) => {
            toggleAlertBoxState('gcsBox', isGcsOnTime, '✅ GCS is ON TIME', '❌ GCS is LATE');
        })
    });

    return alertBox;
}

function getLateIntubationAlert() {
    let alertBox = getAlertBox(isIntubationOnTime, 'intubationBox')
    alertBox.innerHTML = `<p id="lateIntubationAlert">${isIntubationOnTime() ? '✅ Intubation is ON TIME' : '❌ Intubation is LATE'}</p>`;
    document.querySelectorAll('#A00INTER_AIRWAYSUPP, #R00INTER_DATE_AIRSUPP input[type="text"], #R00INTER_TIME_AIRSUPP input[type="text"]').forEach((input) => {
        input.addEventListener('change', (e) => {
            toggleAlertBoxState('intubationBox', isIntubationOnTime, '✅ Intubation is ON TIME', '❌ Intubation is LATE')
        })
    });

    return alertBox;
}

function getLateCtAlert() {
    let alertBox = getAlertBox(isCtOnTime, 'ctBox');
    alertBox.innerHTML = `<p id="lateCtAlert">${isCtOnTime() ? '✅ CT is ON TIME' : '❌ CT is LATE'}</p>`;
    document.querySelectorAll('#DASSESS_DATE_CT, #MASSESS_DATE_CT, #YASSESS_DATE_CT, #HASSESS_TIME_CT, #NASSESS_TIME_CT').forEach((input) => {
        input.addEventListener('change', (e) => {
            toggleAlertBoxState('ctBox', isCtOnTime, '✅ CT is ON TIME', '❌ CT is LATE')
        })
    });

    return alertBox;
}

export {
    getLateTransferAlert, getRehabNonBptAlert,
    getLateTxaAlert, getIncorrectCfsAlert,
    getEdObsTextHelper, getLateGcsAlert,
    getLateIntubationAlert, getAsideAutoSaveSlider,
    getDisableTimeouButton, getLateCtAlert
};