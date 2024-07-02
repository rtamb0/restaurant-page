import menu1 from './assets/menu1.jpg';
import menu2 from './assets/menu1.jpg';
import menu3 from './assets/menu1.jpg';
import menu4 from './assets/menu1.jpg';
import menu5 from './assets/menu1.jpg';
import menu6 from './assets/menu1.jpg';

const contentDOM = document.querySelector('#content');

const headContent = (title) => {
    const header = document.createElement('h1');
    header.innerHTML = title;
    
    return header;
}

const bodyContent = (title, text, pic) => {
    const img = document.createElement('img');
    img.setAttribute('src', pic);
    
    const header = document.createElement('h3');
    header.innerHTML = title;
    
    const description = document.createElement('p');
    description.innerHTML = text;
    
    const section = document.createElement('div');
    section.appendChild(img);
    section.appendChild(header);
    section.appendChild(description);
    
    return section;
}

const appendMenu = () => {
    contentDOM.appendChild(headContent("Our Menu"));

    const bodyContainer = document.createElement('section');
    bodyContainer.className = 'bodyMenu';
    
    bodyContainer.appendChild(bodyContent("Lorem Ipsum", "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", menu1));
    contentDOM.appendChild(bodyContainer);
    
    contentDOM.className = "menu";    
}

export {appendMenu};