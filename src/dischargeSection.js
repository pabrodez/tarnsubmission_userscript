import {
    ifRadiosInRowEmptyClickRadio, setSelectOptionTriggerChange
} from "Utils";

import { getIncorrectCfsAlert } from "AlertComponents";

function dischargeSection() {
    // append usual source of injuries
    document.getElementById('A00INJURY_DESCRIPTION').value ||= 'Source: imaging reports and clinical notes';
    // CFS if patient age < 65 click no, else autopopulate and add late CFS alert
    if (Number(localStorage.getItem('patientAge')) < 65) {
        ifRadiosInRowEmptyClickRadio('R00OUT_PATASSESS', 'RB1OUT_PATASSESS');
    } else {
        ifRadiosInRowEmptyClickRadio('R00OUT_PATASSESS', 'RB0OUT_PATASSESS');
        setSelectOptionTriggerChange('A00OUT_PATASS_GRADE', 1);
        setSelectOptionTriggerChange('A00OUT_PATASS_SPEC', 4);
        // add CFS alert
        document.getElementById('R00OUT_PATASSESS').appendChild(getIncorrectCfsAlert());
    }
    // if no PMH then no to anticoagulants and antiplatelets
    document.getElementById('A00OUT_PRE_DISEASE').addEventListener('change', (e) => {
        if (e.target.value === '998') {
            document.getElementById('RB1OUT_ANTICOAG_PRE').click();
            document.getElementById('RB1OUT_ANTIPLATE_PRE').click();
        }
    });
    // outcome
    ifRadiosInRowEmptyClickRadio('R00OUT_DIS_STATUS', 'RB0OUT_DIS_STATUS');
    document.getElementById('RB1OUT_DIS_STATUS').addEventListener('click', (e) => {
        document.getElementById('A00OUT_DIS_DEST').value = 3;
        document.getElementById('A00OUT_GOS').value = 1;
    });
    // self-discharge
    ifRadiosInRowEmptyClickRadio('R00OUT_DIS_SELF', 'RB1OUT_DIS_SELF');
    // GOS recorded
    setSelectOptionTriggerChange('A00OUT_GOS_GENERICTIME', 1);
    // readmission
    ifRadiosInRowEmptyClickRadio('R00OUT_READM', 'RB1OUT_READM');
}
export { dischargeSection };