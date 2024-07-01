import 'normalize.css';
import './style.css';
import { appendHome } from "./home";

const contentDOM = document.querySelector('#content');

const removeContent = () => {
    while (contentDOM.lastElementChild) contentDOM.removeChild(contentDOM.lastElementChild);
}

const buttonDOMs = {
    home: document.querySelector('#home'),
    menu: document.querySelector('#menu'),
    contact: document.querySelector('#contact'),
    about: document.querySelector('#about'),
}

const eventListeners = (() => {
    buttonDOMs.home.addEventListener('click', () => {
        if (contentDOM.className === 'home') return
        else {
            removeContent();
            appendHome();
        };
    });
})();

appendHome();