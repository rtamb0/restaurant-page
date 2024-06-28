const contentDOM = document.querySelector('#content');

const textDOMs = {
    header: document.createElement('h1'),
    description: document.createElement('p'),
    section: document.createElement('section'),
}

const text = (() => {
    textDOMs.header.innerHTML = 'Lorem Ipsum';
    textDOMs.section.appendChild(textDOMs.header)
    textDOMs.description.innerHTML = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
    textDOMs.section.appendChild(textDOMs.description);
})();

const appendHome = () => {
    contentDOM.appendChild(textDOMs.section);
    contentDOM.className = "home";    
}

export {appendHome};