import {
    ifRadiosInRowEmptyClickRadio,
    setSelectOptionTriggerChange
} from 'Utils';

import { getLateTransferAlert, getRehabNonBptAlert } from 'AlertComponents';

function openingSection() {
    // late transfer alert if transfer in        
    document.getElementById('A00HOSPITAL_TRANSFER').addEventListener('change', (e) => {
        if (['2', '4', '6'].includes(e.target.value)) {
            if (!document.getElementById('transferTimeAlert')) document.getElementById('R00TRANS_IN_REQ_TIME').appendChild(getLateTransferAlert());
        }
    });
    // Rehab alert
    document.getElementById('R00REHAB_PRESEVAL').appendChild(getRehabNonBptAlert());
    // store date time arrival and DoB to be used in other alerts
    localStorage.setItem('dateTimeArr', [...document.querySelectorAll('#DHOSPITAL_ARV_DATE, #MHOSPITAL_ARV_DATE, #YHOSPITAL_ARV_DATE, #HHOSPITAL_ARV_TIME, #NHOSPITAL_ARV_TIME')]
        .map(e => e.value).join(""));
    localStorage.setItem('patientAge', document.getElementById('A00PATIENT_AGE').value);
    // TARN eligible
    ifRadiosInRowEmptyClickRadio('R00COLLECT_TARNCASE', 'RB0COLLECT_TARNCASE');
    // GP
    ifRadiosInRowEmptyClickRadio('R00PATIENT_GP_Q', 'RB0PATIENT_GP_Q');
    // expand field of rehab prescription
    let rehabButtons = document.querySelectorAll('#R00REHAB_PRESEVAL input[type=radio]');
    if (!Array.from(rehabButtons).some(button => button.checked)) {
        rehabButtons[0].click();
        document.getElementById('RB0REHAB_PRESNEED').click();
        document.getElementById('RB0REHAB_PRESCMPLT').click();
        setSelectOptionTriggerChange('A00REHAB_PRESTYPE', 1);
        setSelectOptionTriggerChange('A00REHAB_PRESCMPBYA', 4);
        document.getElementById('RB0REHAB_PRESCOREA').click();
        document.getElementById('RB0REHAB_PRESDEVINV').click();
        document.getElementById('RB0REHAB_PRESDEVDISC').click();
        document.getElementById('RB0REHAB_PRESDEVGVN1').click();
        document.getElementById('RB0REHAB_PRESDEVGVN2').click();
        document.getElementById('RB0REHAB_PRESDEVGVN3').click();
        document.getElementById('RB0REHAB_PRESCHECKS').click();
        document.getElementById('RB0REHAB_PRESCHECK1').click();
        document.getElementById('RB0REHAB_PRESTRANS').click();
    }
    // Old rehab prescription
    ifRadiosInRowEmptyClickRadio('RB1REHAB_PRESCRIP_Q', 'RB1REHAB_PRESCRIP_Q');
}

export { openingSection };