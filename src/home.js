const contentDOM = document.querySelector('#content');

// Function to generate header
const headContent = (title, text) => {
    header = document.createElement('h1');
    header.innerHTML = title;
    description = document.createElement('p');
    description.innerHTML = text;
    section = document.createElement('section');
    section.appendChild(header);
    section.appendChild(description);
    section.className = 'headHome';
    return section;
}

// Function to generate body content
const bodyContent = (title, text) => {
    header = document.createElement('h3');
    header.innerHTML = title;
    description = document.createElement('p');
    description.innerHTML = text;
    section = document.createElement('section');
    section.appendChild(header);
    section.appendChild(description);
    section.className = 'bodyHome';
    return section;
}

// Displays home page
const appendHome = () => {
    contentDOM.appendChild(headContent("Lorem Ipsum", "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."));
    contentDOM.className = "home";    
}

export {appendHome};