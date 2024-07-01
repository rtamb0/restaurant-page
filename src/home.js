const contentDOM = document.querySelector('#content');

const headDOMs = {
    header: document.createElement('h1'),
    description: document.createElement('p'),
    section: document.createElement('section'),
}

const bodyDOMs = {
    section: document.createElement('section'),
}

const headText = (() => {
    headDOMs.header.innerHTML = 'Lorem Ipsum';
    headDOMs.section.appendChild(headDOMs.header)
    headDOMs.description.innerHTML = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
    headDOMs.section.appendChild(headDOMs.description);
})();

const bodyText = (() => {
    
})();

const appendHome = () => {
    contentDOM.appendChild(headDOMs.section);
    contentDOM.className = "home";    
}

export {appendHome};