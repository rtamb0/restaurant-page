const contentDOM = document.querySelector('#content');

// Creates the title
const headContent = (title) => {
    const header = document.createElement('h1');
    header.innerHTML = title;
    
    return header;
}

const inputs = {
    // Creates the placeholder text for the inputs
    placeholderText: function(text, input) {
        input.setAttribute('placeholder', text);
    },
    // Creates the inputs
    content: function(name, type) {
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
        } else {
            input = document.createElement('input');
            input.setAttribute('type', type);
        };
        if (type === 'submit') {
            input.setAttribute('value', name);
        } else {
            input.setAttribute('id', name);
            input.setAttribute('name', name);
            input.setAttribute('required', "");
        };
        
        if (type === "text") this.placeholderText("John Smith", input);
        if (type === "email") this.placeholderText("example@hello.com", input);
        if (type === "textarea") this.placeholderText("Describe your enquiries here...", input);

        const section = document.createElement('div');
        if (type !== 'submit') section.appendChild(label);
        section.appendChild(input);
        section.className = name.toLowerCase().split(" ").join("");
        
        return section;
    }
}

const appendContact = () => {
    contentDOM.appendChild(headContent("Contact Us"));

    const inputContainer = document.createElement('form');
    inputContainer.className = 'contactBody';
    inputContainer.setAttribute('method', 'get');
    
    inputContainer.appendChild(inputs.content('Name', 'text'));
    inputContainer.appendChild(inputs.content('Email', 'email'));
    inputContainer.appendChild(inputs.content('Describe here', 'textarea'));
    inputContainer.appendChild(inputs.content('Confirm', 'submit'));

    contentDOM.appendChild(inputContainer);
    
    contentDOM.className = "contact";    
}

export {appendContact};