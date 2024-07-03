const contentDOM = document.querySelector('#content');

// Creates the title
const headContent = (title) => {
    const header = document.createElement('h1');
    header.innerHTML = title;
    
    return header;
}

// Creates the inputs
const inputContent = (name, type) => {
    let label;
    if (type !== 'submit') {
        label = document.createElement('label');
        label.innerHTML = name;
        label.setAttribute('for', name);
    };
    
    let input;
    if (type === 'textarea') {
        input = document.createElement('textarea');
        input.setAttribute('rows', "10");
        input.setAttribute('columns', "50");
    } else input = document.createElement('input');
    input.setAttribute('type', type);
    if (type === 'submit') input.setAttribute('value', name)
    else {
        input.setAttribute('id', name);
        input.setAttribute('name', name);
        input.setAttribute('required', "");
    };
    
    const section = document.createElement('div');
    if (type !== 'submit') section.appendChild(label);
    section.appendChild(input);
    
    return section;
}

const appendContact = () => {
    contentDOM.appendChild(headContent("Contact Us"));

    const inputContainer = document.createElement('form');
    inputContainer.className = 'contactBody';
    inputContainer.setAttribute('method', 'get');
    
    inputContainer.appendChild(inputContent('Name', 'text'));
    inputContainer.appendChild(inputContent('Email', 'email'));
    inputContainer.appendChild(inputContent('Describe here', 'textarea'));
    inputContainer.appendChild(inputContent('Confirm', 'submit'));

    contentDOM.appendChild(inputContainer);
    
    contentDOM.className = "contact";    
}

export {appendContact};