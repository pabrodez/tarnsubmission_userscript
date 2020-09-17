import {
    getAsideAutoSaveSlider,
    getDisableTimeouButton
} from "AlertComponents";

function addToolbar() {
    let toolBar = document.createElement('aside');
    toolBar.classList.add('toolbar');
    toolBar.id = "toolbar";
    toolBar.appendChild(getAsideAutoSaveSlider());
    toolBar.appendChild(getDisableTimeouButton());
    document.body.appendChild(toolBar);
}

export { addToolbar };