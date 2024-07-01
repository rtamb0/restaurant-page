const contentDOM = document.querySelector('#content');

const bodyContainer = document.createElement('section');
bodyContainer.className = 'bodyHome';

// Function to generate header
const headContent = (title, text) => {
    const header = document.createElement('h1');
    header.innerHTML = title;
    const description = document.createElement('p');
    description.innerHTML = text;
    const section = document.createElement('section');
    section.appendChild(header);
    section.appendChild(description);
    section.className = 'headHome';
    return section;
}

// Function to generate body content
const bodyContent = (title, text) => {
    const header = document.createElement('h3');
    header.innerHTML = title;
    const description = document.createElement('p');
    description.innerHTML = text;
    const section = document.createElement('div');
    section.appendChild(header);
    section.appendChild(description);
    return section;
}

// Displays home page
const appendHome = () => {
    contentDOM.appendChild(headContent("Lorem Ipsum", "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."));
    bodyContainer.appendChild(bodyContent("Lorem Ipsum", "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."));
    bodyContainer.appendChild(bodyContent("Lorem Ipsum", "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."));
    bodyContainer.appendChild(bodyContent("Lorem Ipsum", "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."));
    contentDOM.appendChild(bodyContainer);
    contentDOM.className = "home";    
}

export {appendHome};