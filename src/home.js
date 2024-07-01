const contentDOM = document.querySelector('#content');

const textDOMs = {
    header: document.createElement('h1'),
    description: document.createElement('p'),
    headSection: document.createElement('section'),
    bodySection: document.createElement('section'),
}

const headText = (() => {
    textDOMs.header.innerHTML = 'Lorem Ipsum';
    textDOMs.headSection.appendChild(textDOMs.header)
    textDOMs.description.innerHTML = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
    textDOMs.headSection.appendChild(textDOMs.description);
})();

const appendHome = () => {
    contentDOM.appendChild(textDOMs.headSection);
    contentDOM.className = "home";    
}

export {appendHome};