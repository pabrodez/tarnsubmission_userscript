// ==UserScript==
// @name TARN submission helper
// @version 0.1
// @author pabrodez
// @description Made for the TARN submitter's happiness
// @homepage https://github.com/pabrodez/tarnsubmission_userscript
// @match https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&qsid=*&ro=N&mult=N&QAsub=&ssid=&pt=sect
// @match https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&qsid=*&ro=N&mult=N&QAsub=&ssid=*&pt=sect
// @match https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&ssid=*&qsid=*&ro=N&mult=N&QAsub=&&pt=sect
// @match https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&ssid=*&qsid=*&psid=Null&pt=sect&ro=N&mult=N&QAsub=
// @match https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&ssid=*&qsid=*&psid=Null&pt=sect&ro=N&mult=Y&QAsub=
// @match https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&ssid=*&qsid=*&psid=0&pt=sect&ro=N&mult=N&QAsub=
// @grant none
// @require https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js
// @license MIT
// ==/UserScript==

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=moment},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function E(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){return!("2"===document.getElementById("A00REHAB_PRESEVAL").value||"3"===document.getElementById("A00REHAB_PRESNEED").value||"2"===document.getElementById("A00REHAB_PRESCMPLT").value||"3"===document.getElementById("A00REHAB_PRESCMPLT").value||"2"===document.getElementById("A00REHAB_PRESCOREA").value||"3"===document.getElementById("A00REHAB_PRESCOREA").value||"2"===document.getElementById("A00REHAB_PRESDEVINV").value||"3"===document.getElementById("A00REHAB_PRESDEVINV").value||"2"===document.getElementById("A00REHAB_PRESDEVDISC").value||"3"===document.getElementById("A00REHAB_PRESDEVDISC").value||"2"===document.getElementById("A00REHAB_PRESDEVGVN1").value||"3"==document.getElementById("A00REHAB_PRESDEVGVN1").value||"2"===document.getElementById("A00REHAB_PRESDEVGVN2").value||"3"===document.getElementById("A00REHAB_PRESDEVGVN2").value||"2"===document.getElementById("A00REHAB_PRESDEVGVN3").value||"3"===document.getElementById("A00REHAB_PRESDEVGVN3").value||"2"===document.getElementById("A00REHAB_PRESCHECKS").value||"3"===document.getElementById("A00REHAB_PRESCHECKS").value)}function c(){return['input[id*="IN_REQ"]:not([name="A00TRANS_IN_REQ_DATE"]):not([name="A00TRANS_IN_REQ_TIME"])','input[id*="ARV"]:not([name="A00HOSPITAL_ARV_TIME"]):not([name="A00HOSPITAL_ARV_DATE"])'].map((function(e){return o()(E(document.querySelectorAll(e)).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm")})).reduce((function(e,t){return t.diff(e,"hours",!0)}))<=48}function A(){var e,t=localStorage.getItem("transportMethod"),n=o()(E(document.querySelectorAll("#DINTER_TRANEX_DATE, #MINTER_TRANEX_DATE, #YINTER_TRANEX_DATE, #HINTER_TRANEX_TIME, #NINTER_TRANEX_TIME")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm");if(["1","2","9","14"].includes(t)){var r=o()(E(document.querySelectorAll("#DINCIDENT_ARV_DATE, #MINCIDENT_ARV_DATE, #YINCIDENT_ARV_DATE, #HINCIDENT_ARV_TIME, #NINCIDENT_ARV_TIME")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm");e=n.diff(r,"minutes",!0)<=60}else if(["13","3","6","5"].includes(t)){var S=o()(localStorage.getItem("dateTimeArr"),"DDMMYYYYHHmm");e=n.diff(S,"minutes",!0)<=60}return e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,E=void 0;try{for(var S,u=e[Symbol.iterator]();!(r=(S=u.next()).done)&&(n.push(S.value),!t||n.length!==t);r=!0);}catch(e){o=!0,E=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw E}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(){document.getElementById("RB0INTER_FLUIDBOLUS").addEventListener("click",(function(e){document.getElementById("B03INTER_DATE_FLUID").click(),document.getElementById("A00INTER_FLUID_BLSTYPE").value=3,document.getElementById("A00INTER_FLUID_VOL").value=1e3})),document.getElementById("RB0INTER_TRANEXAMIC").addEventListener("click",(function(e){var t;document.getElementById("A00INTER_TRANEX_VOL").value=1e3,document.getElementById("lateTxaAlert")||document.getElementById("toolbar").appendChild(((t=document.createElement("section")).innerHTML='<p id="lateTxaAlert">'.concat(A()?"TXA on time":"TXA NOT on time","</p>"),document.querySelectorAll("#DINTER_TRANEX_DATE, #MINTER_TRANEX_DATE, #YINTER_TRANEX_DATE, #HINTER_TRANEX_TIME, #NINTER_TRANEX_TIME").forEach((function(e){e.addEventListener("change",(function(e){document.getElementById("lateTxaAlert").innerText=A()?"TXA on time":"TXA NOT on time"}))})),t))})),document.getElementById("RB0INTER_SPROT").addEventListener("click",(function(e){document.getElementById("A00INTER_SPROT_TYPE").value=12})),document.getElementById("A00INTER_AIRWAYSUPP").addEventListener("change",(function(e){"3"===e.target.value&&(document.getElementById("RB0INTER_BREATHSUPP").click(),I("A00INTER_BSUPP_VAL",3))}))}function d(){document.getElementById("A00ASSESS_AIRWAYS_VAL").addEventListener("change",(function(e){"4"===e.target.value&&(I("A00ASSESS_BREATHS_VAL",8),document.getElementById("RB1ASSESS_GCS").click())}))}function T(){_("R00ASSESS_OBS_RESP","RB0ASSESS_OBS_RESP"),_("R00ASSESS_AIRWAYSTATUS","RB0ASSESS_AIRWAYSTATUS"),_("R00ASSESS_BREATHSTATUS","RB0ASSESS_BREATHSTATUS"),_("R00ASSESS_OXIMETER","RB0ASSESS_OXIMETER"),_("R00ASSESS_RESP_RATE","RB0ASSESS_RESP_RATE"),_("R00ASSESS_OBS_CIRC","RB0ASSESS_OBS_CIRC"),_("R00ASSESS_PULSE","RB0ASSESS_PULSE"),_("R00ASSESS_BLOODPRESSURE","RB0ASSESS_BLOODPRESSURE"),_("R00ASSESS_CREFILL","RB0ASSESS_CREFILL"),_("R00ASSESS_OBS_NSYS","RB0ASSESS_OBS_NSYS"),_("R00ASSESS_GCS","RB0ASSESS_GCS"),_("R00ASSESS_GCS_PSIZE","RB0ASSESS_GCS_PSIZE"),_("R00ASSESS_GCS_PUPIL","RB0ASSESS_GCS_PUPIL"),_("R00ASSESS_BSAMP","RB1ASSESS_BSAMP")}function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];_("R00INTER_AIRWAYSUPPORT","RB1INTER_AIRWAYSUPPORT"),_("R00INTER_BREATHSUPP","RB1INTER_BREATHSUPP"),_("R00INTER_THORACOSTOMY","RB1INTER_THORACOSTOMY"),_("R00INTER_SPROT","RB1INTER_SPROT"),_("R00INTER_TRANSFUSION","RB1INTER_TRANSFUSION"),_("R00INTER_FLUIDBOLUS","RB1INTER_FLUIDBOLUS"),_("R00INTER_CDRAIN","RB1INTER_CDRAIN"),_("R00INTER_TRANEXAMIC","RB1INTER_TRANEXAMIC"),_("R00INTER_ANAL","RB1INTER_ANAL"),_("R00INTER_ANTICOAG_REV","RB1INTER_ANTICOAG_REV"),e&&(_("R00INTER_AWS_EXTUB","RB1INTER_AWS_EXTUB"),_("R00INTER_SPROT_REM","RB1INTER_SPROT_REM"),_("R00INTER_EMOB","RB1INTER_EMOB"))}function _(e,t){document.getElementById("".concat("A00"+e.substring(3))).value||document.getElementById(t).click()}function R(e,t){var n=document.querySelectorAll("#"+e+" input[type=text]");Array.from(n).some((function(e){return e.value}))||document.getElementById(t).click()}function I(e,t){var n=document.getElementById(e);""===n.value&&(n.value=t,n.dispatchEvent(new Event("change")))}var s=function e(t){return{is:function(){return e(t)},otherwise:function(){return t}}};function B(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(){var e=document.createElement("section");return e.innerHTML='<p><span id="incorrectCfsAlert"></span>CFS</p>',document.querySelectorAll("#DOUT_PATASS_DATE, #MOUT_PATASS_DATE, #YOUT_PATASS_DATE, #HOUT_PATASS_TIME, #NOUT_PATASS_TIME, #A00OUT_PATASS_GRADE, #A00OUT_PATASS_SPEC").forEach((function(e){e.addEventListener("change",(function(e){var t,n,r,S;document.getElementById("incorrectCfsAlert").textContent=(t=o()(localStorage.getItem("dateTimeArr"),"DDMMYYYYHHmm"),n=o()(E(document.querySelectorAll("#DOUT_PATASS_DATE, #MOUT_PATASS_DATE, #YOUT_PATASS_DATE, #HOUT_PATASS_TIME, #NOUT_PATASS_TIME")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm"),r="1"===document.getElementById("A00OUT_PATASS_GRADE").value,S="4"===document.getElementById("A00OUT_PATASS_SPEC").value,r&&S&&n.diff(t,"hours",!0)<=72?"👌":"❌")}))})),e}function g(){var e=document.createElement("section");e.setAttribute("style","display:flex; flex-direction:column;");var t=document.createElement("textarea");t.id="obsText";var n=document.createElement("input");return n.type="button",n.value="Paste observations",n.addEventListener("click",(function(e){var t=function(e){for(var t={airway:/(?<=airway status:[\s])\w+/i,resp:/(?<=(respiratory rate|Respiration rate Resp\/min):[\s])\d{1,2}/i,sat:/(?<=o2 saturation[\s%]*:[\s]?)\d{1,3}/i,pulse:/(?<=(pulse|heart) rate(\sbpm)?:[\s])\d{1,3}(?=\sbpm)/i,bpsys:/(?<=bp systolic(\smmhg)?:[\s])\d{1,3}(?=\s?mmhg)/i,bpdias:/(?<=bp diastolic(\smmhg)?:[\s])\d{1,3}(?=\s?mmhg)/i,cr:/(?<=capillary refill:[\s]?)\w+/i,gcse:/(?<=(gcs - e|eyes open):[\s]?)\d/i,gcsv:/(?<=(gcs - v|best verbal response):[\s]?)\d/i,gcsm:/(?<=(gcs - m|best motor response):[\s]?)\d/i,gcstotal:/(?<=(gcs - total|gcs score):[\s]?)\d+/i,leftpupsize:/(?<=left pupil size:[\s]?)\d(?= mm)/i,leftpupreact:/(?<=left pupil (response|reaction):[\s])\w+/i,rightpupsize:/(?<=right pupil size:[\s]?)\d(?= mm)/i,rightpupreact:/(?<=right pupil (response|reaction):[\s])\w+/i},n=0,r=Object.entries(t);n<r.length;n++){var o,E,S=l(r[n],2),u=S[0],c=S[1];t[u]=null!==(o=null===(E=e.match(c))||void 0===E?void 0:E[0])&&void 0!==o?o:""}return t}(document.getElementById("obsText").value);I("A00ASSESS_AIRWAYS_VAL",function e(t){return{is:function(n,r){return n(t)?s(r(t)):e(t)},otherwise:function(e){return e(t)}}}(t.airway).is((function(e){return"clear"===e}),(function(){return 1})).is((function(e){return/intubated|intubation|ett/i.test(e)}),(function(){return 4})).is((function(e){return/vomiting|obstructed/i.test(e)}),(function(){return 3})).is((function(e){return/opa|npa/i.test(e)}),(function(){return 2})).otherwise((function(){return""}))),document.getElementById("A00ASSESS_OXIMETER_SAT").value=t.sat,document.getElementById("A00ASSESS_RESP_RATE_VAL").value=t.resp,document.getElementById("A00ASSESS_PULSE_VAL").value=t.pulse,document.getElementById("A00ASSESS_SYSBP_VAL").value=t.bpsys,document.getElementById("A00ASSESS_DIABP_VAL").value=t.bpdias,/normal/i.test(t.cr)&&document.getElementById("RB0ASSESS_CREFILL_NORM").click(),document.getElementById("A00ASSESS_GCS_EYE").value=t.gcse,document.getElementById("A00ASSESS_GCS_VERBAL").value=t.gcsv,document.getElementById("A00ASSESS_GCS_MOTOR").value=t.gcsm,I("A00ASSESS_GCS_TOTAL",t.gcstotal),document.getElementById("A00ASSESS_GCS_LEFT_EYE").value=t.leftpupsize,document.getElementById("A00ASSESS_GCS_RIGHT_EYE").value=t.rightpupsize,/react|brisk|yes/i.test(t.leftpupreact)&&document.getElementById("RB1ASSESS_GCS_RCT_LEFT").click(),/react|brisk|yes/i.test(t.rightpupreact)&&document.getElementById("RB1ASSESS_GCS_RCT_RIGHT").click()})),e.appendChild(t),e.appendChild(n),e}function N(){var e=document.createElement("section");return e.innerHTML='<p id="lateGcsAlert"></p>',document.querySelectorAll('#A00ASSESS_GCS_TOTAL, #R00ASSESS_DATE_NSYS input[type="text"], #R00ASSESS_TIME_NSYS input[type="text"]').forEach((function(e){e.addEventListener("change",(function(e){var t,n;document.getElementById("lateGcsAlert").textContent=(t=o()(localStorage.getItem("dateTimeArr"),"DDMMYYYYHHmm"),n=o()(E(document.querySelectorAll("#DASSESS_DATE_NSYS, #MASSESS_DATE_NSYS, #YASSESS_DATE_NSYS, #HASSESS_TIME_NSYS, #NASSESS_TIME_NSYS")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm"),document.getElementById("A00ASSESS_GCS_TOTAL")&&n.diff(t,"minutes",!0)<=30?"GCS is ON TIME":"GCS is LATE")}))})),e}function p(){var e=document.createElement("section");return e.innerHTML='<p id="lateIntubationAlert"></p>',document.querySelectorAll('#A00INTER_AIRWAYSUPP, #R00INTER_DATE_AIRSUPP input[type="text"], #R00INTER_TIME_AIRSUPP input[type="text"]').forEach((function(e){e.addEventListener("change",(function(e){var t,n;document.getElementById("lateIntubationAlert").textContent=(t=o()(E(document.querySelectorAll("#DEMERG_ARV_DATE, #MEMERG_ARV_DATE, #YEMERG_ARV_DATE, #HEMERG_ARV_TIME, #NEMERG_ARV_TIME")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm"),n=o()(E(document.querySelectorAll("#DINTER_DATE_AIRSUPP, #MINTER_DATE_AIRSUPP, #YINTER_DATE_AIRSUPP, #HINTER_TIME_AIRSUPP, #NINTER_TIME_AIRSUPP")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm"),"3"===document.getElementById("A00INTER_AIRWAYSUPP").value&&n.diff(t,"minutes",!0)<=30?"Intubation is ON TIME":"Intubation is LATE")}))})),e}function v(){var e=document.createElement("section");return e.innerHTML='<p id="lateCtAlert"></p>',document.querySelectorAll("#DASSESS_DATE_CT, #MASSESS_DATE_CT, #YASSESS_DATE_CT, #HASSESS_TIME_CT, #NASSESS_TIME_CT").forEach((function(e){e.addEventListener("change",(function(e){var t;document.getElementById("lateCtAlert").textContent=(t=o()(localStorage.getItem("dateTimeArr"),"DDMMYYYYHHmm"),o()(E(document.querySelectorAll("#DASSESS_DATE_CT, #MASSESS_DATE_CT, #YASSESS_DATE_CT, #HASSESS_TIME_CT, #NASSESS_TIME_CT")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm").diff(t,"minutes",!0)<=60?"CT is ON TIME":"CT is LATE")}))})),e}function D(){var e=document.createElement("aside");e.setAttribute("style","position:fixed; top:50%; right:2%;"),e.id="toolbar",e.appendChild(function(){null===localStorage.getItem("timeToSave")&&localStorage.setItem("timeToSave",5);var e=document.createElement("section");e.innerHTML='<p>Auto-save <span id="timeToSave">'.concat(localStorage.getItem("timeToSave"),"</span>mins</p>");var t=document.createElement("input");t.type="range",t.min=1,t.max=10,t.value=Number(localStorage.getItem("timeToSave")),t.step=1;var n=setTimeout((function(){document.getElementById("btnSave").click()}),6e4*Number(localStorage.getItem("timeToSave")));return t.addEventListener("input",(function(e){document.getElementById("timeToSave").textContent=e.target.value,localStorage.setItem("timeToSave",e.target.value),clearTimeout(n),n=setTimeout((function(){document.getElementById("btnSave").click()}),6e4*Number(localStorage.getItem("timeToSave")))})),e.appendChild(t),e}()),e.appendChild(function(){null===localStorage.getItem("disTimeout")&&localStorage.setItem("disTimeout","no");var e,t=localStorage.getItem("disTimeout"),n=document.createElement("section"),r=document.createElement("input");return r.id="disTimeout",r.type="button",r.value="Disable timeout",r.setAttribute("style","no"===t?"background-color:red;":"background-color:green;"),"yes"===t&&(e=setInterval((function(){resetTimer()}),1e4)),r.addEventListener("click",(function(t){localStorage.setItem("disTimeout","no"===localStorage.getItem("disTimeout")?"yes":"no"),t.target.setAttribute("style","no"===localStorage.getItem("disTimeout")?"background-color:red;":"background-color:green;"),"yes"===localStorage.getItem("disTimeout")?e=setInterval((function(){resetTimer()}),1e4):"no"===localStorage.getItem("disTimeout")&&clearInterval(e)})),n.appendChild(r),n}()),document.body.appendChild(e)}function P(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(){var e;document.getElementById("A00HOSPITAL_TRANSFER").addEventListener("change",(function(e){["2","4","6"].includes(e.target.value)&&(document.getElementById("transferTimeAlert")||document.getElementById("toolbar").appendChild(function(){var e=document.createElement("section");e.innerHTML='<p id="transferTimeAlert">'.concat(c()?"Transfer on time":"Transfer NOT on time","</p>");var t=document.querySelectorAll('input[id$="ARV_DATE"]:not([name="A00HOSPITAL_ARV_DATE"])'),n=document.querySelectorAll('input[id$="ARV_TIME"]:not([name="A00HOSPITAL_ARV_TIME"])'),r=document.querySelectorAll('input[id$="IN_REQ_DATE"]:not([name="A00TRANS_IN_REQ_DATE"])'),o=document.querySelectorAll('input[id$="IN_REQ_TIME"]:not([name="A00TRANS_IN_REQ_TIME"])');return[].concat(B(t),B(n),B(r),B(o)).forEach((function(e){e.addEventListener("blur",(function(e){document.getElementById("transferTimeAlert").innerText=c()?"Transfer on time":"Transfer NOT on time"}))})),e}()))})),document.getElementById("toolbar").appendChild(((e=document.createElement("section")).innerHTML='<p id="rehabNonBptAlert">'.concat(u()?"Rehab ok":"Rehab NOT ok","</p>"),document.querySelectorAll('[id^="R00REHAB"] input[type="radio"]').forEach((function(e){e.addEventListener("click",(function(e){document.getElementById("rehabNonBptAlert").innerText=u()?"Rehab ok":"Rehab NOT ok"}))})),e)),localStorage.setItem("dateTimeArr",P(document.querySelectorAll("#DHOSPITAL_ARV_DATE, #MHOSPITAL_ARV_DATE, #YHOSPITAL_ARV_DATE, #HHOSPITAL_ARV_TIME, #NHOSPITAL_ARV_TIME")).map((function(e){return e.value})).join("")),localStorage.setItem("patientAge",document.getElementById("A00PATIENT_AGE").value),_("R00COLLECT_TARNCASE","RB0COLLECT_TARNCASE"),_("R00PATIENT_GP_Q","RB0PATIENT_GP_Q");var t=document.querySelectorAll("#R00REHAB_PRESEVAL input[type=radio]");Array.from(t).some((function(e){return e.checked}))||(t[0].click(),document.getElementById("RB0REHAB_PRESNEED").click(),document.getElementById("RB0REHAB_PRESCMPLT").click(),I("A00REHAB_PRESTYPE",1),I("A00REHAB_PRESCMPBYA",4),document.getElementById("RB0REHAB_PRESCOREA").click(),document.getElementById("RB0REHAB_PRESDEVINV").click(),document.getElementById("RB0REHAB_PRESDEVDISC").click(),document.getElementById("RB0REHAB_PRESDEVGVN1").click(),document.getElementById("RB0REHAB_PRESDEVGVN2").click(),document.getElementById("RB0REHAB_PRESDEVGVN3").click(),document.getElementById("RB0REHAB_PRESCHECKS").click(),document.getElementById("RB0REHAB_PRESCHECK1").click(),document.getElementById("RB0REHAB_PRESTRANS").click()),_("RB1REHAB_PRESCRIP_Q","RB1REHAB_PRESCRIP_Q")}function O(){document.getElementById("A00INCIDENT_ARV_MODE").addEventListener("change",(function(e){localStorage.setItem("transportMethod",e.target.value)})),I("A00INCIDENT_ARV_MODE",1),_("R00PREHOSP_STAY","RB0PREHOSP_STAY"),_("R00PR_FORM","RB0PR_FORM"),document.getElementById("A00INCIDENT_CAD_NUMBER").value="9999",document.getElementById("RB0INTER_ATTENDANT").addEventListener("click",(function(e){document.getElementById("DATT_ATT_DATE").value=document.getElementById("DINCIDENT_ARV_DATE").value,document.getElementById("MATT_ATT_DATE").value=document.getElementById("MINCIDENT_ARV_DATE").value,document.getElementById("YATT_ATT_DATE").value=document.getElementById("YINCIDENT_ARV_DATE").value,document.getElementById("HATT_ATT_TIME").value=document.getElementById("HINCIDENT_ARV_TIME").value,document.getElementById("NATT_ATT_TIME").value=document.getElementById("NINCIDENT_ARV_TIME").value,document.getElementById("NATT_ATT_TIME").dispatchEvent(new Event("blur")),I("A00ATT_TYPE",4),I("A00ATT_AMB_SERVICE",1158)})),T(),document.querySelectorAll("#DINCIDENT_ARV_DATE, #MINCIDENT_ARV_DATE, #YINCIDENT_ARV_DATE, #HINCIDENT_ARV_TIME, #NINCIDENT_ARV_TIME").forEach((function(e){e.addEventListener("blur",(function(e){var t,n,r,o,E;t=document.getElementById("DINCIDENT_ARV_DATE").value,n=document.getElementById("MINCIDENT_ARV_DATE").value,r=document.getElementById("YINCIDENT_ARV_DATE").value,document.querySelectorAll('[id^="DASSESS_DATE"]').forEach((function(e){e.value=e.value||t})),document.querySelectorAll('[id^="MASSESS_DATE"]').forEach((function(e){e.value=e.value||n})),document.querySelectorAll('[id^="YASSESS_DATE"]').forEach((function(e){e.value=e.value||r,e.dispatchEvent(new Event("blur"))})),o=document.getElementById("HINCIDENT_ARV_TIME").value,E=document.getElementById("NINCIDENT_ARV_TIME").value,document.querySelectorAll('[id^="HASSESS_TIME"]').forEach((function(e){e.value=e.value||o})),document.querySelectorAll('[id^="NASSESS_TIME"]').forEach((function(e){e.value=e.value||E,e.dispatchEvent(new Event("blur"))}))}))}));var e=document.createElement("input");e.type="button",e.value="No to remaining",e.addEventListener("click",(function(e){m()})),document.getElementById("GROUP6").appendChild(e),d(),a()}function b(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(){D();var e=document.querySelector("#mainTable h3 span").innerText.toLowerCase();"opening section"===e&&M(),"incident"===e&&(R("R00INCIDENT_DATE","B03INCIDENT_DATE"),_("R00INJURY_TYPE","RB0INJURY_TYPE"),I("A00INJURY_INTENT",1),I("A00INCIDENT_ADD_INF",0),_("R00INJURY_TRAPPED","RB1INJURY_TRAPPED"),_("R00INJURY_EXT_ARREST","RB1INJURY_EXT_ARREST"),_("R00INTER_COAGREV_MAJINC","RB1INTER_COAGREV_MAJINC")),"pre-hospital"===e&&O(),"ed"===e&&function(){document.getElementById("toolbar").appendChild(g()),document.getElementById("toolbar").appendChild(N()),document.getElementById("toolbar").appendChild(p()),_("R00ED_STAY","RB0ED_STAY"),R("R00EMERG_ARV_DATE","B03EMERG_ARV_DATE"),R("R00EMERG_ARV_TIME","B03EMERG_ARV_TIME"),document.getElementById("B03ASSESS_DATE_RESP").click(),document.getElementById("B03ASSESS_DATE_CIRC").click(),document.getElementById("B03ASSESS_DATE_NSYS").click(),document.querySelectorAll('[id^="DASSESS_DATE"], [id^="MASSESS_DATE"], [id^="YASSESS_DATE"], [id^="HASSESS_TIME"], [id^="NASSESS_TIME"]').forEach((function(e){e.addEventListener("change",(function(e){document.querySelectorAll("[id^=".concat(e.target.id.substr(0,12),"]")).forEach((function(t){t.value||(t.value=e.target.value,t.dispatchEvent(new Event("blur")))}))}))})),T();var e=document.createElement("input");e.type="button",e.value="No to remaining",e.addEventListener("click",(function(e){m(!0)})),document.getElementById("GROUP4").appendChild(e),d(),a()}(),"ed attendants"===e&&document.getElementById("RB0INTER_ATTENDANT").addEventListener("click",(function(e){document.getElementById("B03ATT_ATT_DATE").click(),I("A00ATT_TYPE",1),I("A00ATT_GRADE",1),I("A00ATT_SPECIALITY",1),I("A00ATT_TRAINING",16)})),"imaging"===e&&(document.getElementById("RB0ASSESS_CTSCAN").addEventListener("click",(function(e){document.getElementById("B03ASSESS_DATE_CT").click(),I("A00ASSESS_CTS_TRANSFER",5),document.getElementById("RB0ASSESS_CTS_FRSRPT").click(),document.getElementById("RB0ASSESS_CTS_REVIEW").click(),I("A00ASSESS_CTS_REV_GRADE",1)})),document.getElementById("toolbar").appendChild(v())),"critical care"===e&&(document.getElementById("RB0CCARE_STAY").addEventListener("click",(function(e){I("A00CCARE_UNIT_TYPE",4),document.getElementById("RB1CCARE_READMIT").click(),[].concat(b(document.querySelectorAll('input[id^="RB1ASSESS_OBS"]')),[document.getElementById("RB1ASSESS_BSAMP")],b(document.querySelectorAll('input[id^="RB1INTER"]'))).forEach((function(e){e.click()}))})),document.getElementById("RB0ASSESS_OBS_NSYS").addEventListener("click",(function(e){document.getElementById("toolbar").appendChild(N())}))),"cc attendants"===e&&document.getElementById("RB0INTER_ATTENDANT").addEventListener("click",(function(e){R("R00ATT_ATT_DATE","B03ATT_ATT_DATE"),I("A00ATT_TYPE",1),I("A00ATT_GRADE",1),I("A00ATT_SPECIALITY",5),I("A00ATT_TRAINING",14)})),"at discharge"===e&&(document.getElementById("A00INJURY_DESCRIPTION").value=document.getElementById("A00INJURY_DESCRIPTION").value||"Source: imaging reports and clinical notes",Number(localStorage.getItem("patientAge"))<65?_("R00OUT_PATASSESS","RB1OUT_PATASSESS"):(_("R00OUT_PATASSESS","RB0OUT_PATASSESS"),I("A00OUT_PATASS_GRADE",1),I("A00OUT_PATASS_SPEC",4),document.getElementById("toolbar").appendChild(f())),document.getElementById("A00OUT_PRE_DISEASE").addEventListener("change",(function(e){"998"===e.target.value&&(document.getElementById("RB1OUT_ANTICOAG_PRE").click(),document.getElementById("RB1OUT_ANTIPLATE_PRE").click())})),_("R00OUT_DIS_STATUS","RB0OUT_DIS_STATUS"),document.getElementById("RB1OUT_DIS_STATUS").addEventListener("click",(function(e){document.getElementById("A00OUT_DIS_DEST").value=3,document.getElementById("A00OUT_GOS").value=1})),_("R00OUT_DIS_SELF","RB1OUT_DIS_SELF"),I("A00OUT_GOS_GENERICTIME",1),_("R00OUT_READM","RB1OUT_READM"))}()}]);