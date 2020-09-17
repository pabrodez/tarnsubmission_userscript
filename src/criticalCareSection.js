import { setSelectOptionTriggerChange } from "Utils";
import { getLateGcsAlert } from "AlertComponents";

function criticalCareSection() {
    // add listener to 'Yes' to critical care stay
    document.getElementById('RB0CCARE_STAY').addEventListener('click', (e) => {
        // type of unit
        setSelectOptionTriggerChange('A00CCARE_UNIT_TYPE', 4);
        // readmit
        document.getElementById('RB1CCARE_READMIT').click();
        // No to all observations and interventions
        [...document.querySelectorAll('input[id^="RB1ASSESS_OBS"]'), document.getElementById('RB1ASSESS_BSAMP'), ...document.querySelectorAll('input[id^="RB1INTER"]')]
            .forEach((button) => { button.click() });
    });
    // late GCS alert added when Nervous System obs clicked
    document.getElementById('RB0ASSESS_OBS_NSYS').addEventListener('click', (e) => {
        if (!document.getElementById('gcsBox')) document.getElementById('R00ASSESS_OBS_NSYS').appendChild(getLateGcsAlert());
    });
}

export { criticalCareSection };