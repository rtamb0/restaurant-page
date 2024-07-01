const contentDOM = document.querySelector('#content');

const headDOMs = {
    header: document.createElement('h1'),
    description: document.createElement('p'),
    headSection: document.createElement('section'),
}

const bodyDOMs = {
    bodySection: document.createElement('section'),
}

const headText = (() => {
    headDOMs.header.innerHTML = 'Lorem Ipsum';
    headDOMs.headSection.appendChild(headDOMs.header)
    headDOMs.description.innerHTML = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
    headDOMs.headSection.appendChild(headDOMs.description);
})();

const bodyText = (() => {
    
})();

const appendHome = () => {
    contentDOM.appendChild(headDOMs.headSection);
    contentDOM.className = "home";    
}

export {appendHome};