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
// @grant GM_addStyle
// @require https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js
// @license MIT
// ==/UserScript==

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=moment},function(e,t,n){"use strict";var r=n(2),o=n.n(r)()(!0);o.push([e.i,"*,::before,::after{box-sizing:border-box}.QuestionnaireAnswerCell{display:flex !important;flex-flow:row}.toolbar{position:fixed;top:50%;right:2%;display:grid;row-gap:1rem}.toolbar p{border-radius:.35rem;font-size:1.1rem;padding:.5rem;background-color:#383838;color:#ced4da}.toolbar input[type=range]{cursor:pointer;width:100%;margin:3.3px 0;background-color:transparent;-webkit-appearance:none}.toolbar input[type=range]:focus{outline:none}.toolbar input[type=range]::-webkit-slider-runnable-track{background:#3071a9;border:.2px solid #010101;border-radius:1.3px;width:100%;height:8.4px;cursor:pointer}.toolbar input[type=range]::-webkit-slider-thumb{margin-top:-3.5px;width:17px;height:15px;background:#fff;border:1px solid #000;border-radius:6px;cursor:pointer;-webkit-appearance:none}.toolbar input[type=range]:focus::-webkit-slider-runnable-track{background:#367ebd}.toolbar input[type=range]::-moz-range-track{background:#3071a9;border:.2px solid #010101;border-radius:1.3px;width:100%;height:8.4px;cursor:pointer}.toolbar input[type=range]::-moz-range-thumb{width:17px;height:15px;background:#fff;border:1px solid #000;border-radius:6px;cursor:pointer}.toolbar input[type=range]::-ms-track{background:transparent;border-color:transparent;border-width:4.3px 0;color:transparent;width:100%;height:8.4px;cursor:pointer}.toolbar input[type=range]::-ms-fill-lower{background:#2a6495;border:.2px solid #010101;border-radius:2.6px}.toolbar input[type=range]::-ms-fill-upper{background:#3071a9;border:.2px solid #010101;border-radius:2.6px}.toolbar input[type=range]::-ms-thumb{width:17px;height:15px;background:#fff;border:1px solid #000;border-radius:6px;cursor:pointer;margin-top:0px}.toolbar input[type=range]:focus::-ms-fill-lower{background:#3071a9}.toolbar input[type=range]:focus::-ms-fill-upper{background:#367ebd}.toolbar #disTimeout{position:relative;border:.2rem solid rgba(0,0,0,.4);cursor:pointer;-webkit-appearance:none;-moz-appearance:none}.toolbar #disTimeout:active{top:3px;box-shadow:none}.alertBox{margin-left:.8rem;border-radius:.35rem;background-color:#f2777a;font-weight:400;color:#fff;padding:.6rem;font-size:1.1rem;line-height:1.5;transition:all .5s;box-shadow:0 4px 4px rgba(242,119,122,.5)}.alertBox.correct{background-color:#92d192;box-shadow:0 4px 4px rgba(146,209,146,.5)}","",{version:3,sources:["webpack://src/styles.scss"],names:[],mappings:"AAMA,mBACI,qBAAA,CAGJ,yBACI,uBAAA,CACA,aAAA,CAGJ,SACI,cAAA,CACA,OAAA,CACA,QAAA,CACA,YAAA,CACA,YAAA,CAEA,WACI,oBAAA,CACA,gBAAA,CACA,aAAA,CACA,wBAvBI,CAwBJ,aAvBK,CA0BT,2BACI,cAAA,CACA,UAAA,CACA,cAAA,CACA,4BAAA,CACA,uBAAA,CAEE,iCACE,YAAA,CAEF,0DACE,kBAAA,CACA,yBAAA,CACA,mBAAA,CACA,UAAA,CACA,YAAA,CACA,cAAA,CAEF,iDACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,cAAA,CACA,uBAAA,CAEF,gEACE,kBAAA,CAEF,6CACE,kBAAA,CACA,yBAAA,CACA,mBAAA,CACA,UAAA,CACA,YAAA,CACA,cAAA,CAEF,6CACE,UAAA,CACA,WAAA,CACA,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,cAAA,CAEF,sCACE,sBAAA,CACA,wBAAA,CACA,oBAAA,CACA,iBAAA,CACA,UAAA,CACA,YAAA,CACA,cAAA,CAEF,2CACE,kBAAA,CACA,yBAAA,CACA,mBAAA,CAEF,2CACE,kBAAA,CACA,yBAAA,CACA,mBAAA,CAEF,sCACE,UAAA,CACA,WAAA,CACA,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,cAAA,CACA,cAAA,CAGF,iDACE,kBAAA,CAEF,iDACE,kBAAA,CAKR,qBACI,iBAAA,CACA,iCAAA,CACA,cAAA,CACA,uBAAA,CACA,oBAAA,CAEA,4BACI,OAAA,CACA,eAAA,CAKR,UACI,iBAAA,CACA,oBAAA,CACA,wBApIA,CAqIA,eAAA,CACA,UApIA,CAqIA,aAAA,CACA,gBAAA,CACA,eAAA,CACA,kBAAA,CACA,yCAAA,CAEA,kBACI,wBA7IF,CA8IE,yCAAA",sourcesContent:['$error: #f2777a;\r\n$correct: #92d192;\r\n$white: white;\r\n$dark-grey: #383838;\r\n$light-grey: #ced4da;\r\n\r\n*, ::before, ::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.QuestionnaireAnswerCell {\r\n    display: flex !important;\r\n    flex-flow: row;\r\n}\r\n\r\n.toolbar {\r\n    position: fixed;\r\n    top:50%;\r\n    right:2%;\r\n    display: grid;\r\n    row-gap: 1rem;\r\n\r\n    p {\r\n        border-radius: 0.35rem;\r\n        font-size: 1.1rem;\r\n        padding: 0.5rem;\r\n        background-color: $dark-grey;\r\n        color: $light-grey;\r\n    }\r\n\r\n    input[type="range"] {\r\n        cursor: pointer;\r\n        width: 100%;\r\n        margin: 3.3px 0;\r\n        background-color: transparent;\r\n        -webkit-appearance: none;\r\n          \r\n          &:focus {\r\n            outline: none;\r\n          }\r\n          &::-webkit-slider-runnable-track {\r\n            background: #3071a9;\r\n            border: 0.2px solid #010101;\r\n            border-radius: 1.3px;\r\n            width: 100%;\r\n            height: 8.4px;\r\n            cursor: pointer;\r\n          }\r\n          &::-webkit-slider-thumb {\r\n            margin-top: -3.5px;\r\n            width: 17px;\r\n            height: 15px;\r\n            background: #ffffff;\r\n            border: 1px solid #000000;\r\n            border-radius: 6px;\r\n            cursor: pointer;\r\n            -webkit-appearance: none;\r\n          }\r\n          &:focus::-webkit-slider-runnable-track {\r\n            background: #367ebd;\r\n          }\r\n          &::-moz-range-track {\r\n            background: #3071a9;\r\n            border: 0.2px solid #010101;\r\n            border-radius: 1.3px;\r\n            width: 100%;\r\n            height: 8.4px;\r\n            cursor: pointer;\r\n          }\r\n          &::-moz-range-thumb {\r\n            width: 17px;\r\n            height: 15px;\r\n            background: #ffffff;\r\n            border: 1px solid #000000;\r\n            border-radius: 6px;\r\n            cursor: pointer;\r\n          }\r\n          &::-ms-track {\r\n            background: transparent;\r\n            border-color: transparent;\r\n            border-width: 4.3px 0;\r\n            color: transparent;\r\n            width: 100%;\r\n            height: 8.4px;\r\n            cursor: pointer;\r\n          }\r\n          &::-ms-fill-lower {\r\n            background: #2a6495;\r\n            border: 0.2px solid #010101;\r\n            border-radius: 2.6px;\r\n          }\r\n          &::-ms-fill-upper {\r\n            background: #3071a9;\r\n            border: 0.2px solid #010101;\r\n            border-radius: 2.6px;\r\n          }\r\n          &::-ms-thumb {\r\n            width: 17px;\r\n            height: 15px;\r\n            background: #ffffff;\r\n            border: 1px solid #000000;\r\n            border-radius: 6px;\r\n            cursor: pointer;\r\n            margin-top: 0px;\r\n            /*Needed to keep the Edge thumb centred*/\r\n          }\r\n          &:focus::-ms-fill-lower {\r\n            background: #3071a9;\r\n          }\r\n          &:focus::-ms-fill-upper {\r\n            background: #367ebd;\r\n          }   \r\n\r\n    }\r\n    \r\n    #disTimeout {\r\n        position: relative;\r\n        border: 0.2rem solid rgba(0,0,0, 0.4);\r\n        cursor: pointer;\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n\r\n        &:active {\r\n            top: 3px;\r\n            box-shadow: none;\r\n        }\r\n    }\r\n}   \r\n\r\n    .alertBox {\r\n        margin-left: 0.8rem;\r\n        border-radius: 0.35rem;\r\n        background-color: $error;\r\n        font-weight: 400;\r\n        color: $white;\r\n        padding: 0.6rem;\r\n        font-size: 1.1rem;\r\n        line-height: 1.5;\r\n        transition: all 0.5s;\r\n        box-shadow: 0 4px 4px rgba($error, .5);\r\n\r\n        &.correct {\r\n            background-color: $correct;\r\n            box-shadow: 0 4px 4px rgba($correct, .5);            \r\n        }\r\n}'],sourceRoot:""}]),t.a=o},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),A=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(A).concat([o]).join("\n")}var i,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var A=0;A<this.length;A++){var i=this[A][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";function r(){var e=document.createElement("aside");e.classList.add("toolbar"),e.id="toolbar",e.appendChild(function(){null===localStorage.getItem("timeToSave")&&localStorage.setItem("timeToSave",5);var e=document.createElement("section");e.innerHTML='<p>Auto-save <span id="timeToSave">'.concat(localStorage.getItem("timeToSave"),"</span>mins</p>");var t=document.createElement("input");t.type="range",t.min=1,t.max=10,t.value=Number(localStorage.getItem("timeToSave")),t.step=1;var n=setTimeout((function(){document.getElementById("btnSave").click()}),6e4*Number(localStorage.getItem("timeToSave")));return t.addEventListener("input",(function(e){document.getElementById("timeToSave").textContent=e.target.value,localStorage.setItem("timeToSave",e.target.value),clearTimeout(n),n=setTimeout((function(){document.getElementById("btnSave").click()}),6e4*Number(localStorage.getItem("timeToSave")))})),e.appendChild(t),e}()),e.appendChild(function(){null===localStorage.getItem("disTimeout")&&localStorage.setItem("disTimeout","no");var e,t=localStorage.getItem("disTimeout"),n=document.createElement("section"),r=document.createElement("input");return r.id="disTimeout",r.type="button",r.value="Disable timeout",r.classList.add("alertBox"),"yes"===t&&r.classList.add("correct"),"yes"===t&&(e=setInterval((function(){resetTimer()}),1e4)),r.addEventListener("click",(function(t){localStorage.setItem("disTimeout","no"===localStorage.getItem("disTimeout")?"yes":"no"),"yes"===localStorage.getItem("disTimeout")?(t.target.classList.add("correct"),e=setInterval((function(){resetTimer()}),1e4)):(t.target.classList.remove("correct"),clearInterval(e))})),n.appendChild(r),n}()),document.body.appendChild(e)}n.r(t);var o=n(0),A=n.n(o);function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){return!("2"===document.getElementById("A00REHAB_PRESEVAL").value||"3"===document.getElementById("A00REHAB_PRESNEED").value||"2"===document.getElementById("A00REHAB_PRESCMPLT").value||"3"===document.getElementById("A00REHAB_PRESCMPLT").value||"2"===document.getElementById("A00REHAB_PRESCOREA").value||"3"===document.getElementById("A00REHAB_PRESCOREA").value||"2"===document.getElementById("A00REHAB_PRESDEVINV").value||"3"===document.getElementById("A00REHAB_PRESDEVINV").value||"2"===document.getElementById("A00REHAB_PRESDEVDISC").value||"3"===document.getElementById("A00REHAB_PRESDEVDISC").value||"2"===document.getElementById("A00REHAB_PRESDEVGVN1").value||"3"==document.getElementById("A00REHAB_PRESDEVGVN1").value||"2"===document.getElementById("A00REHAB_PRESDEVGVN2").value||"3"===document.getElementById("A00REHAB_PRESDEVGVN2").value||"2"===document.getElementById("A00REHAB_PRESDEVGVN3").value||"3"===document.getElementById("A00REHAB_PRESDEVGVN3").value||"2"===document.getElementById("A00REHAB_PRESCHECKS").value||"3"===document.getElementById("A00REHAB_PRESCHECKS").value)}function a(){var e=['input[id*="IN_REQ"]:not([name="A00TRANS_IN_REQ_DATE"]):not([name="A00TRANS_IN_REQ_TIME"])','input[id*="ARV"]:not([name="A00HOSPITAL_ARV_TIME"]):not([name="A00HOSPITAL_ARV_DATE"])'].map((function(e){return A()(i(document.querySelectorAll(e)).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm")})).reduce((function(e,t){return t.diff(e,"hours",!0)}));return e>=0&&e<=48}function E(){var e,t=localStorage.getItem("transportMethod"),n=A()(i(document.querySelectorAll("#DINTER_TRANEX_DATE, #MINTER_TRANEX_DATE, #YINTER_TRANEX_DATE, #HINTER_TRANEX_TIME, #NINTER_TRANEX_TIME")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm");if(["1","2","9","14"].includes(t)){var r=A()(i(document.querySelectorAll("#DINCIDENT_ARV_DATE, #MINCIDENT_ARV_DATE, #YINCIDENT_ARV_DATE, #HINCIDENT_ARV_TIME, #NINCIDENT_ARV_TIME")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm"),o=n.diff(r,"minutes",!0);e=o>=0&&o<=60}else if(["13","3","6","5"].includes(t)){var c=A()(localStorage.getItem("dateTimeArr"),"DDMMYYYYHHmm"),u=n.diff(c,"minutes",!0);e=u>=0&&u<=60}return e}function S(){var e=A()(localStorage.getItem("dateTimeArr"),"DDMMYYYYHHmm"),t=A()(i(document.querySelectorAll("#DOUT_PATASS_DATE, #MOUT_PATASS_DATE, #YOUT_PATASS_DATE, #HOUT_PATASS_TIME, #NOUT_PATASS_TIME")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm"),n="1"===document.getElementById("A00OUT_PATASS_GRADE").value,r="4"===document.getElementById("A00OUT_PATASS_SPEC").value,o=t.diff(e,"hours",!0);return n&&r&&o>=0&&o<=72}function l(){if(document.getElementById("RB0ASSESS_OBS_NSYS").checked){if(document.getElementById("RB0ASSESS_GCS").checked){var e=A()(localStorage.getItem("dateTimeArr"),"DDMMYYYYHHmm"),t=A()(i(document.querySelectorAll("#DASSESS_DATE_NSYS, #MASSESS_DATE_NSYS, #YASSESS_DATE_NSYS, #HASSESS_TIME_NSYS, #NASSESS_TIME_NSYS")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm"),n=document.getElementById("A00ASSESS_GCS_TOTAL").value,r=t.diff(e,"minutes",!0);return n&&r>=0&&r<=30}return!1}return!1}function d(){var e=A()(i(document.querySelectorAll("#DEMERG_ARV_DATE, #MEMERG_ARV_DATE, #YEMERG_ARV_DATE, #HEMERG_ARV_TIME, #NEMERG_ARV_TIME")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm"),t=A()(i(document.querySelectorAll("#DINTER_DATE_AIRSUPP, #MINTER_DATE_AIRSUPP, #YINTER_DATE_AIRSUPP, #HINTER_TIME_AIRSUPP, #NINTER_TIME_AIRSUPP")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm");return"3"===document.getElementById("A00INTER_AIRWAYSUPP").value&&t.diff(e,"minutes",!0)<=30}function m(){var e=A()(localStorage.getItem("dateTimeArr"),"DDMMYYYYHHmm"),t=A()(i(document.querySelectorAll("#DASSESS_DATE_CT, #MASSESS_DATE_CT, #YASSESS_DATE_CT, #HASSESS_TIME_CT, #NASSESS_TIME_CT")).map((function(e){return e.value})).join(""),"DDMMYYYYHHmm").diff(e,"minutes",!0);return t>=0&&t<=60}function T(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=document.createElement("blockquote");return n.id=t,n.classList.add("alertBox"),n.classList.toggle("correct",e()),n}function R(e,t,n,r){var o=document.getElementById(e);t()?(o.firstChild.textContent=n,o.classList.add("correct")):(o.firstChild.textContent=r,o.classList.remove("correct"))}function I(){var e=document.createElement("section");e.setAttribute("style","display:flex; flex-direction:column;");var t=document.createElement("textarea");t.id="obsText";var n=document.createElement("input");return n.type="button",n.value="Paste observations",n.addEventListener("click",(function(e){var t=function(e){for(var t={airway:/(?<=airway status:[\s])\w+/i,resp:/(?<=(respiratory rate|Respiration rate Resp\/min):[\s])\d{1,2}/i,sat:/(?<=o2 saturation[\s%]*:[\s]?)\d{1,3}/i,pulse:/(?<=(pulse|heart) rate(\sbpm)?:[\s])\d{1,3}(?=\sbpm)/i,bpsys:/(?<=bp systolic(\smmhg)?:[\s])\d{1,3}(?=\s?mmhg)/i,bpdias:/(?<=bp diastolic(\smmhg)?:[\s])\d{1,3}(?=\s?mmhg)/i,cr:/(?<=capillary refill:[\s]?)\w+/i,gcse:/(?<=(gcs - e|eyes open):[\s]?)\d/i,gcsv:/(?<=(gcs - v|best verbal response):[\s]?)\d/i,gcsm:/(?<=(gcs - m|best motor response):[\s]?)\d/i,gcstotal:/(?<=(gcs - total|gcs score):[\s]?)\d+/i,leftpupsize:/(?<=left pupil size:[\s]?)\d(?= mm)/i,leftpupreact:/(?<=left pupil (response|reaction):[\s])\w+/i,rightpupsize:/(?<=right pupil size:[\s]?)\d(?= mm)/i,rightpupreact:/(?<=right pupil (response|reaction):[\s])\w+/i},n=0,r=Object.entries(t);n<r.length;n++){var o,A,i=(a=r[n],E=2,function(e){if(Array.isArray(e))return e}(a)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,A=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,A=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw A}}return n}(a,E)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(a,E)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],u=i[1];t[c]=null!==(o=null===(A=e.match(u))||void 0===A?void 0:A[0])&&void 0!==o?o:""}var a,E;return t}(document.getElementById("obsText").value);N("A00ASSESS_AIRWAYS_VAL",D(t.airway).is((function(e){return/clear/i.test(e)}),(function(){return 1})).is((function(e){return/intubated|intubation|ett/i.test(e)}),(function(){return 4})).is((function(e){return/vomiting|obstructed|obstruction|obstruction/i.test(e)}),(function(){return 3})).is((function(e){return/opa|npa/i.test(e)}),(function(){return 2})).otherwise((function(){return""}))),document.getElementById("A00ASSESS_OXIMETER_SAT").value=t.sat,document.getElementById("A00ASSESS_RESP_RATE_VAL").value=t.resp,document.getElementById("A00ASSESS_PULSE_VAL").value=t.pulse,document.getElementById("A00ASSESS_SYSBP_VAL").value=t.bpsys,document.getElementById("A00ASSESS_DIABP_VAL").value=t.bpdias,/normal/i.test(t.cr)&&document.getElementById("RB0ASSESS_CREFILL_NORM").click(),document.getElementById("A00ASSESS_GCS_EYE").value=t.gcse,document.getElementById("A00ASSESS_GCS_VERBAL").value=t.gcsv,document.getElementById("A00ASSESS_GCS_MOTOR").value=t.gcsm,N("A00ASSESS_GCS_TOTAL",t.gcstotal),document.getElementById("A00ASSESS_GCS_LEFT_EYE").value=t.leftpupsize,document.getElementById("A00ASSESS_GCS_RIGHT_EYE").value=t.rightpupsize,D(t.leftpupreact).is((function(e){return/\b(react|reacting|reactive|brisk|yes)\b/i.test(e)}),(function(){return document.getElementById("RB1ASSESS_GCS_RCT_LEFT").click()})).is((function(e){return/sluggish/i.test(e)}),(function(){return document.getElementById("RB2ASSESS_GCS_RCT_LEFT").click()})).is((function(e){return/absent|non(-|\s)?reactive|unreactive/i.test(e)}),(function(){return document.getElementById("RB3ASSESS_GCS_RCT_LEFT").click()})),D(t.rightpupreact).is((function(e){return/\b(react|reacting|reactive|brisk|yes)\b/i.test(e)}),(function(){return document.getElementById("RB1ASSESS_GCS_RCT_RIGHT").click()})).is((function(e){return/sluggish/i.test(e)}),(function(){return document.getElementById("RB2ASSESS_GCS_RCT_RIGHT").click()})).is((function(e){return/absent|non(-|\s)?reactive|unreactive/i.test(e)}),(function(){return document.getElementById("RB3ASSESS_GCS_RCT_RIGHT").click()}))})),e.appendChild(t),e.appendChild(n),e}function p(){var e=s(l,"gcsBox");return e.innerHTML='<p id="lateGcsAlert">'.concat(l()?"✅ GCS is ON TIME":"❌ GCS is LATE","</p>"),document.querySelectorAll('#R00ASSESS_OBS_NSYS input[type="radio"], #R00ASSESS_GCS input[type="radio"], #A00ASSESS_GCS_TOTAL, #R00ASSESS_DATE_NSYS input[type="text"], #R00ASSESS_TIME_NSYS input[type="text"]').forEach((function(e){e.addEventListener("change",(function(e){R("gcsBox",l,"✅ GCS is ON TIME","❌ GCS is LATE")}))})),e}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(){document.getElementById("RB0INTER_FLUIDBOLUS").addEventListener("click",(function(e){document.getElementById("B03INTER_DATE_FLUID").click(),document.getElementById("A00INTER_FLUID_BLSTYPE").value=3,document.getElementById("A00INTER_FLUID_VOL").value=1e3})),document.getElementById("RB0INTER_TRANEXAMIC").addEventListener("click",(function(e){var t;document.getElementById("A00INTER_TRANEX_VOL").value=1e3,document.getElementById("txaBox")||document.querySelector("#R00INTER_TRANEXAMIC .QuestionnaireAnswerCell").appendChild(((t=s(E,"txaBox")).innerHTML='<p id="lateTxaAlert">'.concat(E()?"✅ TXA on time":"❌ TXA NOT on time","</p>"),document.querySelectorAll("#DINTER_TRANEX_DATE, #MINTER_TRANEX_DATE, #YINTER_TRANEX_DATE, #HINTER_TRANEX_TIME, #NINTER_TRANEX_TIME").forEach((function(e){e.addEventListener("change",(function(e){R("txaBox",E,"✅ TXA on time","❌ TXA NOT on time")}))})),t))})),document.getElementById("RB0INTER_SPROT").addEventListener("click",(function(e){document.getElementById("A00INTER_SPROT_TYPE").value=12})),document.getElementById("A00INTER_AIRWAYSUPP").addEventListener("change",(function(e){"3"===e.target.value&&(document.getElementById("RB0INTER_BREATHSUPP").click(),N("A00INTER_BSUPP_VAL",3))}))}function C(){document.getElementById("A00ASSESS_AIRWAYS_VAL").addEventListener("change",(function(e){"4"===e.target.value&&(N("A00ASSESS_BREATHS_VAL",8),document.getElementById("RB1ASSESS_GCS").click())}))}function B(){b("R00ASSESS_OBS_RESP","RB0ASSESS_OBS_RESP"),b("R00ASSESS_AIRWAYSTATUS","RB0ASSESS_AIRWAYSTATUS"),b("R00ASSESS_BREATHSTATUS","RB0ASSESS_BREATHSTATUS"),b("R00ASSESS_OXIMETER","RB0ASSESS_OXIMETER"),b("R00ASSESS_RESP_RATE","RB0ASSESS_RESP_RATE"),b("R00ASSESS_OBS_CIRC","RB0ASSESS_OBS_CIRC"),b("R00ASSESS_PULSE","RB0ASSESS_PULSE"),b("R00ASSESS_BLOODPRESSURE","RB0ASSESS_BLOODPRESSURE"),b("R00ASSESS_CREFILL","RB0ASSESS_CREFILL"),b("R00ASSESS_OBS_NSYS","RB0ASSESS_OBS_NSYS"),b("R00ASSESS_GCS","RB0ASSESS_GCS"),b("R00ASSESS_GCS_PSIZE","RB0ASSESS_GCS_PSIZE"),b("R00ASSESS_GCS_PUPIL","RB0ASSESS_GCS_PUPIL"),b("R00ASSESS_BSAMP","RB1ASSESS_BSAMP")}function y(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];b("R00INTER_AIRWAYSUPPORT","RB1INTER_AIRWAYSUPPORT"),b("R00INTER_BREATHSUPP","RB1INTER_BREATHSUPP"),b("R00INTER_THORACOSTOMY","RB1INTER_THORACOSTOMY"),b("R00INTER_SPROT","RB1INTER_SPROT"),b("R00INTER_TRANSFUSION","RB1INTER_TRANSFUSION"),b("R00INTER_FLUIDBOLUS","RB1INTER_FLUIDBOLUS"),b("R00INTER_CDRAIN","RB1INTER_CDRAIN"),b("R00INTER_TRANEXAMIC","RB1INTER_TRANEXAMIC"),b("R00INTER_ANAL","RB1INTER_ANAL"),b("R00INTER_ANTICOAG_REV","RB1INTER_ANTICOAG_REV"),e&&(b("R00INTER_AWS_EXTUB","RB1INTER_AWS_EXTUB"),b("R00INTER_SPROT_REM","RB1INTER_SPROT_REM"),b("R00INTER_EMOB","RB1INTER_EMOB"))}function b(e,t){document.getElementById("".concat("A00"+e.substring(3))).value||document.getElementById(t).click()}function v(e,t){var n=document.querySelectorAll("#"+e+" input[type=text]");Array.from(n).some((function(e){return e.value}))||document.getElementById(t).click()}function N(e,t){var n=document.getElementById(e);""===n.value&&(n.value=t,n.dispatchEvent(new Event("change")))}var D=function e(t){return{is:function(n,r){return n(t)?h(r(t)):e(t)},otherwise:function(e){return e(t)}}},h=function e(t){return{is:function(){return e(t)},otherwise:function(){return t}}};function P(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(){var e;document.getElementById("A00HOSPITAL_TRANSFER").addEventListener("change",(function(e){["2","4","6"].includes(e.target.value)&&(document.getElementById("transferTimeAlert")||document.querySelector("#R00TRANS_IN_REQ_TIME .QuestionnaireAnswerCell").appendChild(function(){var e=s(a,"transferBox");e.innerHTML='<p id="transferTimeAlert">'.concat(a()?"✅ Transfer on time":"❌ Transfer NOT on time","</p>");var t=document.querySelectorAll('input[id$="ARV_DATE"]:not([name="A00HOSPITAL_ARV_DATE"])'),n=document.querySelectorAll('input[id$="ARV_TIME"]:not([name="A00HOSPITAL_ARV_TIME"])'),r=document.querySelectorAll('input[id$="IN_REQ_DATE"]:not([name="A00TRANS_IN_REQ_DATE"])'),o=document.querySelectorAll('input[id$="IN_REQ_TIME"]:not([name="A00TRANS_IN_REQ_TIME"])');return[].concat(T(t),T(n),T(r),T(o)).forEach((function(e){e.addEventListener("blur",(function(e){R("transferBox",a,"✅ Transfer on time","❌ Transfer NOT on time")}))})),e}()))})),document.querySelector("#R00REHAB_PRESEVAL .QuestionnaireAnswerCell").appendChild(((e=s(u,"rehabBox")).innerHTML='<p id="rehabNonBptAlert">'.concat(u()?"✅ Rehab ok":"❌ Rehab NOT ok","</p>"),document.querySelectorAll('[id^="R00REHAB"] input[type="radio"]').forEach((function(e){e.addEventListener("click",(function(e){R("rehabBox",u,"✅ Rehab ok","❌ Rehab NOT ok")}))})),e)),localStorage.setItem("dateTimeArr",P(document.querySelectorAll("#DHOSPITAL_ARV_DATE, #MHOSPITAL_ARV_DATE, #YHOSPITAL_ARV_DATE, #HHOSPITAL_ARV_TIME, #NHOSPITAL_ARV_TIME")).map((function(e){return e.value})).join("")),localStorage.setItem("patientAge",document.getElementById("A00PATIENT_AGE").value),b("R00COLLECT_TARNCASE","RB0COLLECT_TARNCASE"),b("R00PATIENT_GP_Q","RB0PATIENT_GP_Q");var t=document.querySelectorAll("#R00REHAB_PRESEVAL input[type=radio]");Array.from(t).some((function(e){return e.checked}))||(t[0].click(),document.getElementById("RB0REHAB_PRESNEED").click(),document.getElementById("RB0REHAB_PRESCMPLT").click(),N("A00REHAB_PRESTYPE",1),N("A00REHAB_PRESCMPBYA",4),document.getElementById("RB0REHAB_PRESCOREA").click(),document.getElementById("RB0REHAB_PRESDEVINV").click(),document.getElementById("RB0REHAB_PRESDEVDISC").click(),document.getElementById("RB0REHAB_PRESDEVGVN1").click(),document.getElementById("RB0REHAB_PRESDEVGVN2").click(),document.getElementById("RB0REHAB_PRESDEVGVN3").click(),document.getElementById("RB0REHAB_PRESCHECKS").click(),document.getElementById("RB0REHAB_PRESCHECK1").click(),document.getElementById("RB0REHAB_PRESTRANS").click()),b("RB1REHAB_PRESCRIP_Q","RB1REHAB_PRESCRIP_Q")}function x(){document.getElementById("A00INCIDENT_ARV_MODE").addEventListener("change",(function(e){localStorage.setItem("transportMethod",e.target.value)})),N("A00INCIDENT_ARV_MODE",1),b("R00PREHOSP_STAY","RB0PREHOSP_STAY"),b("R00PR_FORM","RB0PR_FORM"),document.getElementById("A00INCIDENT_CAD_NUMBER").value="9999",document.getElementById("RB0INTER_ATTENDANT").addEventListener("click",(function(e){document.getElementById("DATT_ATT_DATE").value=document.getElementById("DINCIDENT_ARV_DATE").value,document.getElementById("MATT_ATT_DATE").value=document.getElementById("MINCIDENT_ARV_DATE").value,document.getElementById("YATT_ATT_DATE").value=document.getElementById("YINCIDENT_ARV_DATE").value,document.getElementById("HATT_ATT_TIME").value=document.getElementById("HINCIDENT_ARV_TIME").value,document.getElementById("NATT_ATT_TIME").value=document.getElementById("NINCIDENT_ARV_TIME").value,document.getElementById("YATT_ATT_DATE").dispatchEvent(new Event("blur")),document.getElementById("NATT_ATT_TIME").dispatchEvent(new Event("blur")),N("A00ATT_TYPE",4),N("A00ATT_AMB_SERVICE",1158)})),B(),document.querySelectorAll("#DINCIDENT_ARV_DATE, #MINCIDENT_ARV_DATE, #YINCIDENT_ARV_DATE, #HINCIDENT_ARV_TIME, #NINCIDENT_ARV_TIME").forEach((function(e){e.addEventListener("blur",(function(e){var t,n,r,o,A;t=document.getElementById("DINCIDENT_ARV_DATE").value,n=document.getElementById("MINCIDENT_ARV_DATE").value,r=document.getElementById("YINCIDENT_ARV_DATE").value,document.querySelectorAll('[id^="DASSESS_DATE"]').forEach((function(e){e.value=e.value||t})),document.querySelectorAll('[id^="MASSESS_DATE"]').forEach((function(e){e.value=e.value||n})),document.querySelectorAll('[id^="YASSESS_DATE"]').forEach((function(e){e.value=e.value||r,e.dispatchEvent(new Event("blur"))})),o=document.getElementById("HINCIDENT_ARV_TIME").value,A=document.getElementById("NINCIDENT_ARV_TIME").value,document.querySelectorAll('[id^="HASSESS_TIME"]').forEach((function(e){e.value=e.value||o})),document.querySelectorAll('[id^="NASSESS_TIME"]').forEach((function(e){e.value=e.value||A,e.dispatchEvent(new Event("blur"))}))}))}));var e=document.createElement("input");e.type="button",e.value="No to remaining",e.addEventListener("click",(function(e){y()})),document.getElementById("GROUP6").appendChild(e),C(),g()}function Y(){document.getElementById("toolbar").appendChild(I()),document.querySelector("#R00ASSESS_OBS_NSYS .QuestionnaireAnswerCell").appendChild(p()),document.getElementById("A00INTER_AIRWAYSUPP").addEventListener("change",(function(e){var t,n;"3"!==e.target.value||document.getElementById("intubationBox")?null===(t=document.getElementById("intubationBox"))||void 0===t||t.remove():document.querySelector("#R00INTER_AIRWAYSUPPORT .QuestionnaireAnswerCell").appendChild(((n=s(d,"intubationBox")).innerHTML='<p id="lateIntubationAlert">'.concat(d()?"✅ Intubation is ON TIME":"❌ Intubation is LATE","</p>"),document.querySelectorAll('#A00INTER_AIRWAYSUPP, #R00INTER_DATE_AIRSUPP input[type="text"], #R00INTER_TIME_AIRSUPP input[type="text"]').forEach((function(e){e.addEventListener("change",(function(e){R("intubationBox",d,"✅ Intubation is ON TIME","❌ Intubation is LATE")}))})),n))})),b("R00ED_STAY","RB0ED_STAY"),v("R00EMERG_ARV_DATE","B03EMERG_ARV_DATE"),v("R00EMERG_ARV_TIME","B03EMERG_ARV_TIME"),document.getElementById("B03ASSESS_DATE_RESP").click(),document.getElementById("B03ASSESS_DATE_CIRC").click(),document.getElementById("B03ASSESS_DATE_NSYS").click(),document.querySelectorAll('[id^="DASSESS_DATE"], [id^="MASSESS_DATE"], [id^="YASSESS_DATE"], [id^="HASSESS_TIME"], [id^="NASSESS_TIME"]').forEach((function(e){e.addEventListener("change",(function(e){document.querySelectorAll("[id^=".concat(e.target.id.substr(0,12),"]")).forEach((function(t){t.value||(t.value=e.target.value,t.dispatchEvent(new Event("blur")))}))}))})),B();var e=document.createElement("input");e.type="button",e.value="No to remaining",e.addEventListener("click",(function(e){y(!0)})),document.getElementById("GROUP4").appendChild(e),C(),g()}function k(){var e;document.getElementById("RB0ASSESS_CTSCAN").addEventListener("click",(function(e){document.getElementById("B03ASSESS_DATE_CT").click(),N("A00ASSESS_CTS_TRANSFER",5),document.getElementById("RB0ASSESS_CTS_FRSRPT").click(),document.getElementById("RB0ASSESS_CTS_REVIEW").click(),N("A00ASSESS_CTS_REV_GRADE",1)})),document.querySelector("#R00ASSESS_CTSCAN .QuestionnaireAnswerCell").appendChild(((e=s(m,"ctBox")).innerHTML='<p id="lateCtAlert">'.concat(m()?"✅ CT is ON TIME":"❌ CT is LATE","</p>"),document.querySelectorAll("#DASSESS_DATE_CT, #MASSESS_DATE_CT, #YASSESS_DATE_CT, #HASSESS_TIME_CT, #NASSESS_TIME_CT").forEach((function(e){e.addEventListener("change",(function(e){R("ctBox",m,"✅ CT is ON TIME","❌ CT is LATE")}))})),e))}function L(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U(){var e,t;(e=document.getElementById("A00INJURY_DESCRIPTION")).value||(e.value="Source: imaging reports and clinical notes"),Number(localStorage.getItem("patientAge"))<65?b("R00OUT_PATASSESS","RB1OUT_PATASSESS"):(b("R00OUT_PATASSESS","RB0OUT_PATASSESS"),N("A00OUT_PATASS_GRADE",1),N("A00OUT_PATASS_SPEC",4),document.querySelector("#R00OUT_PATASSESS .QuestionnaireAnswerCell").appendChild(((t=s(S,"cfsBox")).innerHTML='<p id="incorrectCfsAlert">'.concat(S()?"👌 CFS correct":"❌ CFS NOT correct","</p>"),document.querySelectorAll("#DOUT_PATASS_DATE, #MOUT_PATASS_DATE, #YOUT_PATASS_DATE, #HOUT_PATASS_TIME, #NOUT_PATASS_TIME, #A00OUT_PATASS_GRADE, #A00OUT_PATASS_SPEC").forEach((function(e){e.addEventListener("change",(function(e){R("cfsBox",S,"👌 CFS correct","❌ CFS NOT correct")}))})),t))),document.getElementById("A00OUT_PRE_DISEASE").addEventListener("change",(function(e){"998"===e.target.value&&(document.getElementById("RB1OUT_ANTICOAG_PRE").click(),document.getElementById("RB1OUT_ANTIPLATE_PRE").click())})),b("R00OUT_DIS_STATUS","RB0OUT_DIS_STATUS"),document.getElementById("RB1OUT_DIS_STATUS").addEventListener("click",(function(e){document.getElementById("A00OUT_DIS_DEST").value=3,document.getElementById("A00OUT_GOS").value=1})),b("R00OUT_DIS_SELF","RB1OUT_DIS_SELF"),N("A00OUT_GOS_GENERICTIME",1),b("R00OUT_READM","RB1OUT_READM")}var w=n(1);!function(){GM_addStyle(w.a),r();var e=document.querySelector("#mainTable h3 span").innerText.toLowerCase();"opening section"===e&&O(),"incident"===e&&(v("R00INCIDENT_DATE","B03INCIDENT_DATE"),b("R00INJURY_TYPE","RB0INJURY_TYPE"),N("A00INJURY_INTENT",1),N("A00INCIDENT_ADD_INF",0),b("R00INJURY_TRAPPED","RB1INJURY_TRAPPED"),b("R00INJURY_EXT_ARREST","RB1INJURY_EXT_ARREST"),b("R00INTER_COAGREV_MAJINC","RB1INTER_COAGREV_MAJINC")),"pre-hospital"===e&&x(),"ed"===e&&Y(),"ed attendants"===e&&document.getElementById("RB0INTER_ATTENDANT").addEventListener("click",(function(e){document.getElementById("B03ATT_ATT_DATE").click(),N("A00ATT_TYPE",1),N("A00ATT_GRADE",1),N("A00ATT_SPECIALITY",1),N("A00ATT_TRAINING",16)})),"imaging"===e&&k(),"critical care"===e&&(document.getElementById("RB0CCARE_STAY").addEventListener("click",(function(e){N("A00CCARE_UNIT_TYPE",4),document.getElementById("RB1CCARE_READMIT").click(),[].concat(L(document.querySelectorAll('input[id^="RB1ASSESS_OBS"]')),[document.getElementById("RB1ASSESS_BSAMP")],L(document.querySelectorAll('input[id^="RB1INTER"]'))).forEach((function(e){e.click()}))})),document.getElementById("RB0ASSESS_OBS_NSYS").addEventListener("click",(function(e){document.getElementById("gcsBox")||document.querySelector("#R00ASSESS_OBS_NSYS .QuestionnaireAnswerCell").appendChild(p())}))),"cc attendants"===e&&document.getElementById("RB0INTER_ATTENDANT").addEventListener("click",(function(e){v("R00ATT_ATT_DATE","B03ATT_ATT_DATE"),N("A00ATT_TYPE",1),N("A00ATT_GRADE",1),N("A00ATT_SPECIALITY",5),N("A00ATT_TRAINING",14)})),"at discharge"===e&&U()}()}]);