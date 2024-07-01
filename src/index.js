import 'normalize.css';
import './style.css';
import { appendHome } from "./home";

const buttonDOMs = {
    home: document.querySelector('#home'),
    menu: document.querySelector('#menu'),
    contact: document.querySelector('#contact'),
    about: document.querySelector('#about'),
}


appendHome()