💻 TARN submission userscript 💻
------

Go from :rage1: to :godmode:

#### _Made for the **TARN** submitter's happiness_
This userscript increases productivity by adding functionality that I wish the TARN submission site had. Among other features, it auto-populates most common data fields, auto-clicks inputs to extend dataset, avoids client side timeout, allows auto-save, gives live warnings about incorrect key data fields, etc.

#### How to use:
1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Install the userscript located in *dist/tarnsubmission.user.js* by clicking on _Raw_ button.
Alternatively copy and paste the content in a newly created userscript in Tampermonkey.
3. Log into [TARN website](https://www.tarn.ac.uk/) as you normally would

#### 💡 Wish list:
- ✅ Ed: copy paste obs to include airway, and pupil reactivity
- ✅ The GCS alert should also check GCS is not missing
- [] in obs: if resp rate above 25 to change breathing status to respiratory distress
- [] Create operations section
- [] Ward: late gcs alert for extended dataset in ward
- ✅ in obs: when select intubation to auto-populate breathing support to mechanical ventilation
- ✅ when airway status is intubated to autopopulate breathing status to mechanical ventilation and GCS to No

#### Used:
* ES6+ syntax
* [webpack](https://webpack.js.org/) for bundling
