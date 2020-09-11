import { ifTextIsEmptyClickPopulate, setSelectOptionTriggerChange} from "./utils.js";
function criticalCareAttendantSection() {
    // add listener to 'Yes' to attendant to critical care
    document.getElementById('RB0INTER_ATTENDANT').addEventListener('click', (e) => {
        // date patient seen
        ifTextIsEmptyClickPopulate('R00ATT_ATT_DATE', 'B03ATT_ATT_DATE');
        // type of attendant
        setSelectOptionTriggerChange('A00ATT_TYPE', 1);
        // grade of attendant
        setSelectOptionTriggerChange('A00ATT_GRADE', 1);
        // specialty
        setSelectOptionTriggerChange('A00ATT_SPECIALITY', 5);
        // training
        setSelectOptionTriggerChange('A00ATT_TRAINING', 14);

    });
}
export { criticalCareAttendantSection };