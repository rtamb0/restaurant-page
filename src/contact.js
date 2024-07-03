const contentDOM = document.querySelector('#content');

// Creates the title
const headContent = (title) => {
    const header = document.createElement('h1');
    header.innerHTML = title;
    
    return header;
}

// Creates the inputs
const inputContent = (name, type) => {
    const label = document.createElement('label');
    label.innerHTML = name;
    label.setAttribute('for', name);
    
    let input;
    if (type === 'textarea') {
        input = document.createElement('textarea');
        input.setAttribute('rows', "10");
        input.setAttribute('columns', "50");
    } else input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', name);
    input.setAttribute('name', name);
    
    const section = document.createElement('div');
    section.appendChild(label);
    section.appendChild(input);
    
    return section;
}

