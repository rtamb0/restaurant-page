import recipe1 from './assets/recipe1.jpg';

const contentDOM = document.querySelector('#content');

const bodyContainer = document.createElement('section');
bodyContainer.className = 'bodyMenu';

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
    contentDOM.appendChild(bodyContent("Lorem Ipsum", "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", recipe1));
    contentDOM.appendChild(bodyContainer);
    contentDOM.className = "menu";    
}

export {appendMenu};