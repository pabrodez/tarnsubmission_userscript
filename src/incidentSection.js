import {
    ifTextIsEmptyClickPopulate,
    ifRadiosInRowEmptyClickRadio,
    setSelectOptionTriggerChange
} from "Utils";

function incidentSection() {
    // incident date
    ifTextIsEmptyClickPopulate('R00INCIDENT_DATE', 'B03INCIDENT_DATE');
    // injury type
    ifRadiosInRowEmptyClickRadio('R00INJURY_TYPE', 'RB0INJURY_TYPE');
    // injury intent
    setSelectOptionTriggerChange('A00INJURY_INTENT', 1);
    // additional incident information
    setSelectOptionTriggerChange('A00INCIDENT_ADD_INF', 0);
    // trapped at scene
    ifRadiosInRowEmptyClickRadio('R00INJURY_TRAPPED', 'RB1INJURY_TRAPPED');
    // cardiac arrest
    ifRadiosInRowEmptyClickRadio('R00INJURY_EXT_ARREST', 'RB1INJURY_EXT_ARREST');
    // major incident
    ifRadiosInRowEmptyClickRadio('R00INTER_COAGREV_MAJINC', 'RB1INTER_COAGREV_MAJINC');
}

export { incidentSection };