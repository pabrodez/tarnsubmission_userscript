import { setSelectOptionTriggerChange } from "Utils";
import { getLateCtAlert } from "AlertComponents";

function imagingSection() {

    // add listener to CT scan to auto-populate
    document.getElementById('RB0ASSESS_CTSCAN').addEventListener('click', (e) => {
        document.getElementById('B03ASSESS_DATE_CT').click();
        setSelectOptionTriggerChange('A00ASSESS_CTS_TRANSFER', 5);
        document.getElementById('RB0ASSESS_CTS_FRSRPT').click();
        document.getElementById('RB0ASSESS_CTS_REVIEW').click();
        setSelectOptionTriggerChange('A00ASSESS_CTS_REV_GRADE', 1);
    });
    // add late ct alert
    document.getElementById('toolbar').appendChild(getLateCtAlert());
}

export { imagingSection };