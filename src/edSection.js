import {
    ifRadiosInRowEmptyClickRadio,
    clickNoToRemainingInterventions,
    addListenerToUsualObservations,
    addListenerToUsualInterventions,
    ifTextIsEmptyClickPopulate,
    expandObservations,    
} from "Utils";

import { getEdObsTextHelper, getLateGcsAlert, getLateIntubationAlert } from 'AlertComponents';

function edSection() {
    // add ED obs helper
    document.getElementById('toolbar').appendChild(getEdObsTextHelper());
    // add late GCS alert
    document.querySelector('#R00ASSESS_OBS_NSYS .QuestionnaireAnswerCell').appendChild(getLateGcsAlert());
    // add late intubation alert
    document.getElementById('A00INTER_AIRWAYSUPP').addEventListener('change', (e) => {
        if (e.target.value === '3' && !document.getElementById('intubationBox')) {
            document.querySelector('#R00INTER_AIRWAYSUPPORT .QuestionnaireAnswerCell').appendChild(getLateIntubationAlert());
        } else {
            document.getElementById('intubationBox')?.remove();
        }
    });
    // ed stay
    ifRadiosInRowEmptyClickRadio('R00ED_STAY', 'RB0ED_STAY');
    // date arrival
    ifTextIsEmptyClickPopulate('R00EMERG_ARV_DATE', 'B03EMERG_ARV_DATE');
    // time arrival
    ifTextIsEmptyClickPopulate('R00EMERG_ARV_TIME', 'B03EMERG_ARV_TIME');
    // date auto-populate
    document.getElementById('B03ASSESS_DATE_RESP').click();
    document.getElementById('B03ASSESS_DATE_CIRC').click();
    document.getElementById('B03ASSESS_DATE_NSYS').click();
    // when entering time in any observation, other observations times are updated
    document.querySelectorAll('[id^="DASSESS_DATE"], [id^="MASSESS_DATE"], [id^="YASSESS_DATE"], [id^="HASSESS_TIME"], [id^="NASSESS_TIME"]')
        .forEach((cell) => {
            cell.addEventListener('change', (e) => {
                document.querySelectorAll(`[id^=${e.target.id.substr(0, 12)}]`).forEach((obsDate) => {
                    if (!obsDate.value) {
                        obsDate.value = e.target.value;
                        obsDate.dispatchEvent(new Event('blur'));
                    }
                });
            })
        });

    expandObservations();
    // add button to click no to all remaining unanswered interventions
    let noToIntersButton = document.createElement('input');
    noToIntersButton.type = 'button';
    noToIntersButton.value = 'No to remaining';
    noToIntersButton.addEventListener('click', (e) => { clickNoToRemainingInterventions(true) });
    document.getElementById('GROUP4').appendChild(noToIntersButton);

    addListenerToUsualObservations();
    addListenerToUsualInterventions();
}

export { edSection };