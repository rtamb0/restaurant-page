const contentDOM = document.querySelector('#content');

// Creates the title
const headContent = (title) => {
    const header = document.createElement('h1');
    header.innerHTML = title;
    
    return header;
}

// Create the page cards
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

const appendAbout = () => {
    contentDOM.appendChild(headContent("About Us"));

    const bodyContainer = document.createElement('section');
    bodyContainer.className = 'bodyAbout';
    
    bodyContainer.appendChild(bodyContent("Lorem Ipsum", "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."));
    bodyContainer.appendChild(bodyContent("Lorem Ipsum", "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."));
    bodyContainer.appendChild(bodyContent("Lorem Ipsum", "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."));
    contentDOM.appendChild(bodyContainer);

    contentDOM.className = "about";
}

export {appendAbout};