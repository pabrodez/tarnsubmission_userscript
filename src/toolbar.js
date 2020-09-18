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
    disTimeoutButton.classList.add('alertBox');
    if (isTimeoutDisabled === 'yes') disTimeoutButton.classList.add('correct');
    let timeoutInterval;
    if (isTimeoutDisabled === 'yes') {
        timeoutInterval = setInterval(() => { resetTimer(); }, 10 * 1000);
    }
    disTimeoutButton.addEventListener('click', (e) => {
        localStorage.setItem('disTimeout', localStorage.getItem('disTimeout') === 'no' ? 'yes' : 'no');        
        if (localStorage.getItem('disTimeout') === 'yes') {
            e.target.classList.add('correct');
            timeoutInterval = setInterval(() => { resetTimer(); }, 10 * 1000);
        } else {
            e.target.classList.remove('correct');
            clearInterval(timeoutInterval);
        }
    })
    wrapper.appendChild(disTimeoutButton);

    return wrapper;
}

function addToolbar() {
    let toolBar = document.createElement('aside');
    toolBar.classList.add('toolbar');
    toolBar.id = "toolbar";
    toolBar.appendChild(getAsideAutoSaveSlider());
    toolBar.appendChild(getDisableTimeouButton());
    document.body.appendChild(toolBar);
}

export { addToolbar };