import {
    setSelectOptionTriggerChange
} from "./utils.js";

function edAttendantsSection() {
    // populate usual doctor
    document.getElementById('RB0INTER_ATTENDANT').addEventListener('click', (e) => {
        document.getElementById('B03ATT_ATT_DATE').click();
        setSelectOptionTriggerChange('A00ATT_TYPE', 1);
        setSelectOptionTriggerChange('A00ATT_GRADE', 1);
        setSelectOptionTriggerChange('A00ATT_SPECIALITY', 1);
        setSelectOptionTriggerChange('A00ATT_TRAINING', 16);
    });
}

export { edAttendantsSection };