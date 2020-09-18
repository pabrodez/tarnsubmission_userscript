import { addToolbar } from 'Toolbar';
import { openingSection } from "./openingSection.js";
import { incidentSection } from "./incidentSection.js";
import { preHospitalSection } from "./preHospitalSection.js";
import { edSection } from "./edSection.js";
import { edAttendantsSection } from "./edAttendantsSection.js";
import { imagingSection } from "./imagingSection.js";
import { criticalCareSection } from "./criticalCareSection.js";
import { criticalCareAttendantSection } from "./criticalCareAttendantSection.js";
import { dischargeSection } from "./dischargeSection";
import styles from './styles.scss';

(function () {
    'use strict';

    GM_addStyle(styles);

    addToolbar();

    let sectionTitle = document.querySelector('#mainTable h3 span').innerText.toLowerCase();
    // Opening section
    if (sectionTitle === 'opening section') {
        openingSection();
    }
    // Incident section
    if (sectionTitle === 'incident') {
        incidentSection();
    }
    // Pre-hospital section
    if (sectionTitle === 'pre-hospital') {
        preHospitalSection();
    }
    // ED section
    if (sectionTitle === 'ed') {       
        edSection();
    }
    // ED attendants section
    if (sectionTitle === 'ed attendants') {
        edAttendantsSection();
    }
    // Imaging section
    if (sectionTitle === 'imaging') {
        imagingSection();
    }

    // Critical care section
    if (sectionTitle === 'critical care') {
        criticalCareSection();
    }
    // CC attendants section
    if (sectionTitle === 'cc attendants') {
        criticalCareAttendantSection();
    }
    // At discharge section
    if (sectionTitle === 'at discharge') {
        dischargeSection();
    }
})();