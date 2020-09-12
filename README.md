💻 TARN submission userscript 💻
------

Go from :rage1: to :godmode:

#### _Made for the **TARN** submitter's happiness_
This userscript increases productivity by adding functionality that I wish the TARN submission site had. Among other features, it auto-populates most common data fields, aut-clicks input to extend dataset, avoids client side timeout, allows auto-save, gives live warnings about incorrect key data fields, etc.

#### How to use:
1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Install the userscript located in dist/tarnsubmission.user.js by clicking on _Raw_ button.
Alternatively copy and paste the content in a newly created userscript in Tampermonkey.
3. Log into [TARN website](https://www.tarn.ac.uk/) as you normally would

#### Wish list:
- [] Pre-hosp: invalid date patient seen paramedic
- [] Ed: copy paste obs to include airway and breathing status, crt, and pupil reactivity
- [] Create operations section
- [] Ward: late gcs alert for extended dataset in ward
- [] at discharge: if CFS entered, to show if okay or not after reloading
- [] Improve ifRadiosInRowEmptyClickRadio()

#### Used:
* ES6+ syntax
* [webpack](https://webpack.js.org/) for bundling
