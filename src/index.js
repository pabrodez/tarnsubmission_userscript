(function () {
    'use strict';
    // create toolbar and add different sections
    let toolBar = document.createElement('aside');
    toolBar.setAttribute('style', 'position:fixed; top:50%; right:2%;');
    toolBar.id = "toolbar";
    toolBar.appendChild(getAsideAutoSaveSlider());
    toolBar.appendChild(getDisableTimeouButton());
    // toolBar.appendChild(getResetpatientInfoButton());
    document.body.appendChild(toolBar);

    let sectionTitle = document.querySelector('#mainTable h3 span').innerText.toLowerCase();
    // Opening section
    if (sectionTitle === 'opening section') {
        // late transfer alert if transfer in
        document.getElementById('A00HOSPITAL_TRANSFER').addEventListener('change', (e) => {
            if (['2', '4', '6'].includes(e.target.value)) {
               if (!document.getElementById('transferTimeAlert')) document.getElementById('toolbar').appendChild(getLateTransferAlert());
            }
        });
        // Rehab alert
        document.getElementById('toolbar').appendChild(getRehabNonBptAlert());
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
    // Incident section
    if (sectionTitle === 'incident') {
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
    // Pre-hospital section
    if (sectionTitle === 'pre-hospital') {
        // store method of transport, so we know if it's self presentation or not to calculate if TXA on time
        document.getElementById('A00INCIDENT_ARV_MODE').addEventListener('change', (e) => {localStorage.setItem('transportMethod', e.target.value)});
        // transport method to ambulance
        setSelectOptionTriggerChange('A00INCIDENT_ARV_MODE', 1);
        // pre-hospital details
        ifRadiosInRowEmptyClickRadio('R00PREHOSP_STAY', 'RB0PREHOSP_STAY');
        // PRF issued
        ifRadiosInRowEmptyClickRadio('R00PR_FORM', 'RB0PR_FORM');
        // CAD number
        document.getElementById('A00INCIDENT_CAD_NUMBER').value = "9999";
        // attendants
        document.getElementById('RB0INTER_ATTENDANT').addEventListener('click', (e) => {
            document.getElementById('DATT_ATT_DATE').value = document.getElementById('DINCIDENT_ARV_DATE').value;
            document.getElementById('MATT_ATT_DATE').value = document.getElementById('MINCIDENT_ARV_DATE').value;
            document.getElementById('YATT_ATT_DATE').value = document.getElementById('YINCIDENT_ARV_DATE').value;
            document.getElementById('HATT_ATT_TIME').value = document.getElementById('HINCIDENT_ARV_TIME').value;
            document.getElementById('NATT_ATT_TIME').value = document.getElementById('NINCIDENT_ARV_TIME').value;
            setSelectOptionTriggerChange('A00ATT_TYPE', 4);
            setSelectOptionTriggerChange('A00ATT_AMB_SERVICE', 1158);
        });
        // expand observations
        expandObservations();
        // populate obs date-times with arrival at scene
        document.querySelectorAll('#DINCIDENT_ARV_DATE, #MINCIDENT_ARV_DATE, #YINCIDENT_ARV_DATE, #HINCIDENT_ARV_TIME, #NINCIDENT_ARV_TIME').forEach((cell) => {
            cell.addEventListener('blur', (e) => {
                populateObservationsDates(
                    document.getElementById('DINCIDENT_ARV_DATE').value,
                    document.getElementById('MINCIDENT_ARV_DATE').value,
                    document.getElementById('YINCIDENT_ARV_DATE').value
                );
                populateObservationsTimes(
                    document.getElementById('HINCIDENT_ARV_TIME').value,
                    document.getElementById('NINCIDENT_ARV_TIME').value
                );
            });
        });
        // add button to click no tomall remaining unanswered interventions
        let noToIntersButton = document.createElement('input');
        noToIntersButton.type = 'button';
        noToIntersButton.value = 'No to remaining';
        noToIntersButton.addEventListener('click', (e) => {clickNoToRemainingInterventions()});
        document.getElementById('GROUP6').appendChild(noToIntersButton);
        // listeners to usual interventions
        addListenerToUsualInterventions();

    }
    // ED section
    if (sectionTitle === 'ed') {
        // add ED obs helper
        document.getElementById('toolbar').appendChild(getEdObsTextHelper());
        // add late GCS alert
        document.getElementById('toolbar').appendChild(getLateGcsAlert());
        // add late intubation alert
        document.getElementById('toolbar').appendChild(getLateIntubationAlert());
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
        // add button to click no tomall remaining unanswered interventions
        let noToIntersButton = document.createElement('input');
        noToIntersButton.type = 'button';
        noToIntersButton.value = 'No to remaining';
        noToIntersButton.addEventListener('click', (e) => {clickNoToRemainingInterventions(true)});
        document.getElementById('GROUP4').appendChild(noToIntersButton);
        addListenerToUsualInterventions();

    }
    // ED attendants section
    if (sectionTitle === 'ed attendants') {
        // populate usual doctor
        document.getElementById('RB0INTER_ATTENDANT').addEventListener('click', (e) => {
            document.getElementById('B03ATT_ATT_DATE').click();
            setSelectOptionTriggerChange('A00ATT_TYPE', 1);
            setSelectOptionTriggerChange('A00ATT_GRADE', 1);
            setSelectOptionTriggerChange('A00ATT_SPECIALITY', 1);
            setSelectOptionTriggerChange('A00ATT_TRAINING', 16);
        });

    }
    // Imaging section
    if (sectionTitle === 'imaging') {
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
    // TODO: Operations section
    if (sectionTitle === 'operations') {

    }
    // Critical care section
    if (sectionTitle === 'critical care') {
        // add listener to 'Yes' to critical care stay
        document.getElementById('RB0CCARE_STAY').addEventListener('click', (e) => {
            // type of unit
            setSelectOptionTriggerChange('A00CCARE_UNIT_TYPE', 4);
            // readmit
            document.getElementById('RB1CCARE_READMIT').click();
            // No to all observations and interventions
            let obsButtons = document.querySelectorAll('[id^="R00ASSESS_OBS"][style=""]');
            let intervenButtons = document.querySelectorAll('[id^="R00INTER"][style=""]');
            let investigations = document.getElementById('R00ASSESS_BSAMP');
            [...document.querySelectorAll('input[id^="RB1ASSESS_OBS"]'), document.getElementById('RB1ASSESS_BSAMP'), ...document.querySelectorAll('input[id^="RB1INTER"]')]
                .forEach((button) => {button.click()});
        });
        // late GCS alert added when Nervous System obs clicked
        document.getElementById('RB0ASSESS_OBS_NSYS').addEventListener('click', (e) => {
            document.getElementById('toolbar').appendChild(getLateGcsAlert());
        });
    }
    // CC attendants section
    if (sectionTitle === 'cc attendants') {

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
    // At discharge section
    if (sectionTitle === 'at discharge') {
        // append usual source of injuries
        document.getElementById('A00INJURY_DESCRIPTION').value = document.getElementById('A00INJURY_DESCRIPTION').value || 'Source: imaging reports and clinical notes';
        // CFS if patient age < 65 click no, else autopopulate and add late CFS alert
        if (Number(localStorage.getItem('patientAge')) < 65 ) {
            ifRadiosInRowEmptyClickRadio('R00OUT_PATASSESS', 'RB1OUT_PATASSESS');
        } else {
           ifRadiosInRowEmptyClickRadio('R00OUT_PATASSESS', 'RB0OUT_PATASSESS');
           setSelectOptionTriggerChange('A00OUT_PATASS_GRADE', 1);
           setSelectOptionTriggerChange('A00OUT_PATASS_SPEC', 4);
           // add CFS alert
           document.getElementById('toolbar').appendChild(getIncorrectCfsAlert());
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

    function populateObservationsDates(day, month, year) {
        document.querySelectorAll('[id^="DASSESS_DATE"]').forEach((d) => {d.value = d.value || day});
        document.querySelectorAll('[id^="MASSESS_DATE"]').forEach((m) => {m.value = m.value || month});
        // the blur event below triggers the TARN page to store the date
        document.querySelectorAll('[id^="YASSESS_DATE"]').forEach((y) => {y.value = y.value || year; y.dispatchEvent(new Event('blur'))});
    }

    function populateObservationsTimes(hour, minute) {
        document.querySelectorAll('[id^="HASSESS_TIME"]').forEach((h) => {h.value = h.value || hour});
        document.querySelectorAll('[id^="NASSESS_TIME"]').forEach((n) => {n.value = n.value || minute; n.dispatchEvent(new Event('blur'))});
    }

    function addListenerToUsualInterventions() {
        // adds click listener to most common interventions, which populates them with most common values
        // fluids
        document.getElementById('RB0INTER_FLUIDBOLUS').addEventListener('click', (e) => {
            document.getElementById('B03INTER_DATE_FLUID').click();
            document.getElementById('A00INTER_FLUID_BLSTYPE').value = 3;
            document.getElementById('A00INTER_FLUID_VOL').value = 1000;
        });
        // TXA
         document.getElementById('RB0INTER_TRANEXAMIC').addEventListener('click', (e) => {
            document.getElementById('A00INTER_TRANEX_VOL').value = 1000;
            // add late TXA alert
            document.getElementById('toolbar').appendChild(getLateTxaAlert());
        });
        // Spinal immobilisation
         document.getElementById('RB0INTER_SPROT').addEventListener('click', (e) => {
            document.getElementById('A00INTER_SPROT_TYPE').value = 12;
        });
    }

    function expandObservations() {
        // Obs: respiratory
        ifRadiosInRowEmptyClickRadio('R00ASSESS_OBS_RESP', 'RB0ASSESS_OBS_RESP');
        // airways status
        ifRadiosInRowEmptyClickRadio('R00ASSESS_AIRWAYSTATUS', 'RB0ASSESS_AIRWAYSTATUS');
        // breathing status
        ifRadiosInRowEmptyClickRadio('R00ASSESS_BREATHSTATUS', 'RB0ASSESS_BREATHSTATUS');
        // oxygen saturation
        ifRadiosInRowEmptyClickRadio('R00ASSESS_OXIMETER', 'RB0ASSESS_OXIMETER');
        // respiratory rate
        ifRadiosInRowEmptyClickRadio('R00ASSESS_RESP_RATE', 'RB0ASSESS_RESP_RATE');
        // Obs: circulation
        ifRadiosInRowEmptyClickRadio('R00ASSESS_OBS_CIRC', 'RB0ASSESS_OBS_CIRC');
        // pulse rate
        ifRadiosInRowEmptyClickRadio('R00ASSESS_PULSE', 'RB0ASSESS_PULSE');
        // blood presure
        ifRadiosInRowEmptyClickRadio('R00ASSESS_BLOODPRESSURE', 'RB0ASSESS_BLOODPRESSURE');
        // capillary refill
        ifRadiosInRowEmptyClickRadio('R00ASSESS_CREFILL', 'RB0ASSESS_CREFILL');
        // Obs: nervous system
        ifRadiosInRowEmptyClickRadio('R00ASSESS_OBS_NSYS', 'RB0ASSESS_OBS_NSYS');
        // GCS
        ifRadiosInRowEmptyClickRadio('R00ASSESS_GCS', 'RB0ASSESS_GCS');
        // pupil size
        ifRadiosInRowEmptyClickRadio('R00ASSESS_GCS_PSIZE', 'RB0ASSESS_GCS_PSIZE');
        // pupil reactivity
        ifRadiosInRowEmptyClickRadio('R00ASSESS_GCS_PUPIL', 'RB0ASSESS_GCS_PUPIL');
        // Obs: investigations
        ifRadiosInRowEmptyClickRadio('R00ASSESS_BSAMP', 'RB1ASSESS_BSAMP');
    }

    function clickNoToRemainingInterventions(isEd = false) {
        ifRadiosInRowEmptyClickRadio('R00INTER_AIRWAYSUPPORT', 'RB1INTER_AIRWAYSUPPORT');
        ifRadiosInRowEmptyClickRadio('R00INTER_BREATHSUPP', 'RB1INTER_BREATHSUPP');
        ifRadiosInRowEmptyClickRadio('R00INTER_THORACOSTOMY', 'RB1INTER_THORACOSTOMY');
        ifRadiosInRowEmptyClickRadio('R00INTER_SPROT', 'RB1INTER_SPROT');
        ifRadiosInRowEmptyClickRadio('R00INTER_TRANSFUSION', 'RB1INTER_TRANSFUSION');
        ifRadiosInRowEmptyClickRadio('R00INTER_FLUIDBOLUS', 'RB1INTER_FLUIDBOLUS');
        ifRadiosInRowEmptyClickRadio('R00INTER_CDRAIN', 'RB1INTER_CDRAIN');
        ifRadiosInRowEmptyClickRadio('R00INTER_TRANEXAMIC', 'RB1INTER_TRANEXAMIC');
        ifRadiosInRowEmptyClickRadio('R00INTER_ANAL', 'RB1INTER_ANAL');
        ifRadiosInRowEmptyClickRadio('R00INTER_ANTICOAG_REV', 'RB1INTER_ANTICOAG_REV');
        if (isEd) {
            ifRadiosInRowEmptyClickRadio('R00INTER_AWS_EXTUB', 'RB1INTER_AWS_EXTUB');
            ifRadiosInRowEmptyClickRadio('R00INTER_SPROT_REM', 'RB1INTER_SPROT_REM');
            ifRadiosInRowEmptyClickRadio('R00INTER_EMOB', 'RB1INTER_EMOB');
        }
    }

    function ifRadiosInRowEmptyClickRadio(questionnaireRowId, radioIdToClick) {
        // TODO when clicking intervention a value is stored in a hidden input beginning with A00INTER
        // instead of looping through every input of the row, just check it's empty to know there's no answer
        let inputs = document.querySelectorAll(`#${questionnaireRowId} input[type=radio]`);
        if (Array.from(inputs).every(button => !button.checked)) {
            document.getElementById(radioIdToClick).click();
        }
    }

    function ifTextIsEmptyClickPopulate(questionnaireRowId, buttonIdToClick) {
        let dateInputs = document.querySelectorAll('#' + questionnaireRowId + ' input[type=text]');
        if (!Array.from(dateInputs).some(date => date.value)) {
            document.getElementById(buttonIdToClick).click();
        }
    }

    function setSelectOptionTriggerChange(selectId, valueToSet) {
        let selectInput = document.getElementById(selectId);
        if (selectInput.value === "") {
            selectInput.value = valueToSet;
            selectInput.dispatchEvent(new Event('change'));
        }
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

//    function getResetpatientInfoButton() {
//        let button = document.createElement('input');
//        button.type = 'button';
//        button.value = 'Reset patient info';
//        button.onclick = (e) => {localStorage.removeItem('dateTimeArr'); localStorage.removeItem('patientAge');};
//
//        return button;
//    }

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

    function isTxaOnTime() {
        let isOnTime;
        let arrMethod = localStorage.getItem('transportMethod');

        let txaDateTime = moment([...document.querySelectorAll('#DINTER_TRANEX_DATE, #MINTER_TRANEX_DATE, #YINTER_TRANEX_DATE, #HINTER_TRANEX_TIME, #NINTER_TRANEX_TIME')]
                                 .map(e => e.value)
                                 .join(""), 'DDMMYYYYHHmm');
        // by ambulance, else if it's self-presentation
        if (['1', '2', '9', '14'].includes(arrMethod)) {
            let arrScene = moment([...document.querySelectorAll('#DINCIDENT_ARV_DATE, #MINCIDENT_ARV_DATE, #YINCIDENT_ARV_DATE, #HINCIDENT_ARV_TIME, #NINCIDENT_ARV_TIME')]
                                 .map(e => e.value)
                                 .join(""), 'DDMMYYYYHHmm');
            isOnTime = txaDateTime.diff(arrScene, 'minutes', true) <= 60;
        } else if (['13', '3', '6', '5'].includes(arrMethod)) {
            let arrEd = moment(localStorage.getItem('dateTimeArr'), 'DDMMYYYYHHmm');
            isOnTime = txaDateTime.diff(arrEd, 'minutes', true) <= 60;
        }

        return isOnTime;
    }

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
    function isTransferOnTime() {

        let output = ['input[id*="IN_REQ"]:not([name="A00TRANS_IN_REQ_DATE"]):not([name="A00TRANS_IN_REQ_TIME"])',
        'input[id*="ARV"]:not([name="A00HOSPITAL_ARV_TIME"]):not([name="A00HOSPITAL_ARV_DATE"])']
        .map(selector => moment([...document.querySelectorAll(selector)].map(e => e.value).join(""), 'DDMMYYYYHHmm'))
        .reduce((a, b) => b.diff(a, 'hours', true)) <= 48;

        return output;
    }

    function getRehabNonBptAlert() {
        let wrapper = document.createElement('section');
        wrapper.innerHTML = `<p id="rehabNonBptAlert">${isRehabPrescriptionBPT() ? "Rehab ok" : "Rehab NOT ok"}</p>`;
        // add listener to all buttons that belong to Rehab prescription
        document.querySelectorAll('[id^="R00REHAB"] input[type="radio"]').forEach((button) => {
            button.addEventListener('click', (e) => {document.getElementById('rehabNonBptAlert').innerText = isRehabPrescriptionBPT() ? "Rehab ok" : "Rehab NOT ok"})
        });

        return wrapper;
    }

    function isRehabPrescriptionBPT() {
        // when radio button clicked a value is stored in hidden input text
        let output =
            (document.getElementById('A00REHAB_PRESEVAL').value === '2'
            || document.getElementById('A00REHAB_PRESNEED').value === '3'
            || document.getElementById('A00REHAB_PRESCMPLT').value === '2' || document.getElementById('A00REHAB_PRESCMPLT').value === '3'
            || document.getElementById('A00REHAB_PRESCOREA').value === '2' || document.getElementById('A00REHAB_PRESCOREA').value === '3'
            || document.getElementById('A00REHAB_PRESDEVINV').value === '2' || document.getElementById('A00REHAB_PRESDEVINV').value === '3'
            || document.getElementById('A00REHAB_PRESDEVDISC').value === '2' || document.getElementById('A00REHAB_PRESDEVDISC').value === '3'
            || document.getElementById('A00REHAB_PRESDEVGVN1').value === '2' || document.getElementById('A00REHAB_PRESDEVGVN1').value == '3'
            || document.getElementById('A00REHAB_PRESDEVGVN2').value === '2' || document.getElementById('A00REHAB_PRESDEVGVN2').value === '3'
            || document.getElementById('A00REHAB_PRESDEVGVN3').value === '2' || document.getElementById('A00REHAB_PRESDEVGVN3').value === '3'
            || document.getElementById('A00REHAB_PRESCHECKS').value === '2' || document.getElementById('A00REHAB_PRESCHECKS').value === '3');

        return !output;
    }

    function getLateGcsAlert() {
        let wrapper = document.createElement('section');
        wrapper.innerHTML = '<p id="lateGcsAlert"></p>';
        document.querySelectorAll('#A00ASSESS_GCS_TOTAL, #R00ASSESS_DATE_NSYS input[type="text"], #R00ASSESS_TIME_NSYS input[type="text"]').forEach((input) => {
            input.addEventListener('change', (e) => {document.getElementById('lateGcsAlert').textContent = isGcsOnTime() ? 'GCS is ON TIME' : 'GCS is LATE';})
        });

        return wrapper;
    }

    function isGcsOnTime() {
        let arrDateTime = moment(localStorage.getItem('dateTimeArr'), 'DDMMYYYYHHmm');
        let gcsDateTime = moment(
        [...document.querySelectorAll('#DASSESS_DATE_NSYS, #MASSESS_DATE_NSYS, #YASSESS_DATE_NSYS, #HASSESS_TIME_NSYS, #NASSESS_TIME_NSYS')]
            .map(e => e.value).join(""),
            'DDMMYYYYHHmm');
        let gcsValue = document.getElementById('A00ASSESS_GCS_TOTAL');

        return gcsValue && gcsDateTime.diff(arrDateTime, 'minutes', true) <= 30;
    }

    function getLateIntubationAlert() {
        let wrapper = document.createElement('section');
        wrapper.innerHTML = '<p id="lateIntubationAlert"></p>';
        document.querySelectorAll('#A00INTER_AIRWAYSUPP, #R00INTER_DATE_AIRSUPP input[type="text"], #R00INTER_TIME_AIRSUPP input[type="text"]').forEach((input) => {
            input.addEventListener('change', (e) => {document.getElementById('lateIntubationAlert').textContent = isIntubationOnTime() ? 'Intubation is ON TIME' : 'Intubation is LATE';})
        });

        return wrapper;
    }

    function isIntubationOnTime() {
        let arrDateTime = moment(
        [...document.querySelectorAll('#DEMERG_ARV_DATE, #MEMERG_ARV_DATE, #YEMERG_ARV_DATE, #HEMERG_ARV_TIME, #NEMERG_ARV_TIME')]
            .map(e => e.value).join(""),
            "DDMMYYYYHHmm");
        let intubationDateTime = moment(
        [...document.querySelectorAll('#DINTER_DATE_AIRSUPP, #MINTER_DATE_AIRSUPP, #YINTER_DATE_AIRSUPP, #HINTER_TIME_AIRSUPP, #NINTER_TIME_AIRSUPP')]
            .map(e => e.value).join(""),
            "DDMMYYYYHHmm");
        let isIntubated = document.getElementById('A00INTER_AIRWAYSUPP').value === '3';

        return isIntubated && intubationDateTime.diff(arrDateTime, 'minutes', true) <= 30;
    }

    function getLateCtAlert() {
        let wrapper = document.createElement('section');
        wrapper.innerHTML = '<p id="lateCtAlert"></p>';
        document.querySelectorAll('#DASSESS_DATE_CT, #MASSESS_DATE_CT, #YASSESS_DATE_CT, #HASSESS_TIME_CT, #NASSESS_TIME_CT').forEach((input) => {
            input.addEventListener('change', (e) => {document.getElementById('lateCtAlert').textContent = isCtOnTime() ? 'CT is ON TIME' : 'CT is LATE';})
        });

        return wrapper;
    }

    function isCtOnTime() {
        let arrDateTime = moment(localStorage.getItem('dateTimeArr'), 'DDMMYYYYHHmm');
        let ctDateTime = moment(
        [...document.querySelectorAll('#DASSESS_DATE_CT, #MASSESS_DATE_CT, #YASSESS_DATE_CT, #HASSESS_TIME_CT, #NASSESS_TIME_CT')]
            .map(e => e.value).join(""),
            "DDMMYYYYHHmm");

        return ctDateTime.diff(arrDateTime, 'minutes', true) <= 60;
    }

    function getIncorrectCfsAlert() {
        let wrapper = document.createElement('section');
        wrapper.innerHTML = '<p><span id="incorrectCfsAlert"></span>CFS</p>';
        document.querySelectorAll('#DOUT_PATASS_DATE, #MOUT_PATASS_DATE, #YOUT_PATASS_DATE, #HOUT_PATASS_TIME, #NOUT_PATASS_TIME, #A00OUT_PATASS_GRADE, #A00OUT_PATASS_SPEC').forEach((input) => {
            input.addEventListener('change', (e) => {document.getElementById('incorrectCfsAlert').textContent = isCfsCorrect() ? '👌' : '❌';})
        });

        return wrapper;
    }


    function isCfsCorrect() {
        let arrDateTime = moment(localStorage.getItem('dateTimeArr'), 'DDMMYYYYHHmm');
        let cfsDateTime = moment(
        [...document.querySelectorAll('#DOUT_PATASS_DATE, #MOUT_PATASS_DATE, #YOUT_PATASS_DATE, #HOUT_PATASS_TIME, #NOUT_PATASS_TIME')]
            .map(e => e.value).join(""),
            "DDMMYYYYHHmm");
        let isConsultant = document.getElementById('A00OUT_PATASS_GRADE').value === '1';
        let isGeriatrician = document.getElementById('A00OUT_PATASS_SPEC').value === '4';

        return isConsultant && isGeriatrician && cfsDateTime.diff(arrDateTime, 'hours', true) <= 72;
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
            if (/react|brisk|yes/i.test(obs.leftpupreact)) document.getElementById('RB1ASSESS_GCS_RCT_LEFT').click();
            if (/react|brisk|yes/i.test(obs.rightpupreact)) document.getElementById('RB1ASSESS_GCS_RCT_RIGHT').click();
        });

        wrapper.appendChild(textArea);
        wrapper.appendChild(helperButton);

        return wrapper;
    }

    function parseObsFromEdText(edText) {
        // works for ED Major Trauma Assessment v2, ED MTS v2 and NEWS Chart - ADULT
        let obsRegex = {
            'airway': /(?<=airway status:[\s])clear|obstructed|obstruction|intubated|intubation|ett|supported/i,
            'resp':   /(?<=(respiratory rate|Respiration rate Resp\/min):[\s])\d{1,2}/i,
            'sat': /(?<=o2 saturation[\s%]*:[\s]?)\d{1,3}/i,
            'pulse': /(?<=(pulse|heart) rate(\sbpm)?:[\s])\d{1,3}(?=\sbpm)/i,
            'bpsys': /(?<=bp systolic(\smmhg)?:[\s])\d{1,3}(?=\s?mmhg)/i,
            'bpdias': /(?<=bp diastolic(\smmhg)?:[\s])\d{1,3}(?=\s?mmhg)/i,
            'cr': /(?<=capillary refill:[\s]?)normal|abnormal/i,
            'gcse': /(?<=(gcs - e|eyes open):[\s]?)\d/i,
            'gcsv': /(?<=(gcs - v|best verbal response):[\s]?)\d/i,
            'gcsm': /(?<=(gcs - m|best motor response):[\s]?)\d/i,
            'gcstotal': /(?<=(gcs - total|gcs score):[\s]?)\d+/i,
            'leftpupsize': /(?<=left pupil size:[\s]?)\d(?= mm)/i,
            'leftpupreact': /(?<=left pupil (response|reaction):[\s])\w+/i,
            'rightpupsize': /(?<=right pupil size:[\s]?)\d(?= mm)/i,
            'rightpupreact': /(?<=right pupil (response|reaction):[\s])\w+/i,
        }
        for (const [obs, regx] of Object.entries(obsRegex)) {
            let matchStr = edText.match(regx);
            obsRegex[obs] = matchStr ? matchStr[0] : "";
        }

        return obsRegex;
    }
})();