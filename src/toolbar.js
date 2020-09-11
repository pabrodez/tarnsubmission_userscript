import {
    getAsideAutoSaveSlider,
    getDisableTimeouButton
} from "./alertComponents.js";

function addToolbar() {
    let toolBar = document.createElement('aside');
    toolBar.setAttribute('style', 'position:fixed; top:50%; right:2%;');
    toolBar.id = "toolbar";
    toolBar.appendChild(getAsideAutoSaveSlider());
    toolBar.appendChild(getDisableTimeouButton());
    document.body.appendChild(toolBar);
}

export { addToolbar };