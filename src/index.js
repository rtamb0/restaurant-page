import 'normalize.css';
import './style.css';
import { appendHome } from "./home";
import { appendMenu } from './menu';

const contentDOM = document.querySelector('#content');

const removeContent = () => {
    while (contentDOM.lastElementChild) contentDOM.removeChild(contentDOM.lastElementChild);
    window.scrollTo(0,0);
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
    buttonDOMs.menu.addEventListener('click', () => {
        if (contentDOM.className === 'menu') return
        else {
            removeContent();
            appendMenu();
        };
    });
})();

appendHome();