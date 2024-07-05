import menu1 from './assets/menu1.jpg';
import menu2 from './assets/menu2.jpg';
import menu3 from './assets/menu3.jpg';
import menu4 from './assets/menu4.jpg';
import menu5 from './assets/menu5.jpg';
import menu6 from './assets/menu6.jpg';

const contentDOM = document.querySelector('#content');

// Creates the title
const headContent = (title) => {
    const header = document.createElement('h1');
    header.innerHTML = title;
    
    return header;
}

// Creates the menu cards
const bodyContent = (title, text, pic, altText, cost) => {
    const img = document.createElement('img');
    img.setAttribute('src', pic);
    img.setAttribute('alt', altText);
    
    const header = document.createElement('h3');
    header.innerHTML = title;
    
    const description = document.createElement('p');
    description.innerHTML = text;

    const price = document.createElement('h5');
    price.innerHTML = cost;
    
    const section = document.createElement('div');
    section.appendChild(img);
    section.appendChild(header);
    section.appendChild(description);
    section.appendChild(price);
    
    return section;
}

// Calls and appends the elements to the DOM tree
const appendMenu = () => {
    contentDOM.appendChild(headContent("Our Menu"));

    const bodyContainer = document.createElement('section');
    bodyContainer.className = 'bodyMenu';
    
    bodyContainer.appendChild(bodyContent("Big Caesar Salad", "Crafted meticulously, this large portion of caesar salad includes lettuce, parmesan cheese, grilled chicken, bacon strip. And of course, caesar dressing.", menu1, "A pic of caesar salad", "$10.99"));
    bodyContainer.appendChild(bodyContent("Chicken Tenders", "Your usual chicken tenders, made by us! Includes lettuce and a dipping sauce of your choice.", menu2, "A pic of chicken tenders", "$6.99"));
    bodyContainer.appendChild(bodyContent("Fettuccine Pasta", "This creamy fettuccine pasta will satisfy your taste buds in every way possible. Includes chicken of your choice.", menu3, "A pic of pasta", "$15.99"));
    bodyContainer.appendChild(bodyContent("Chocolate Cake", "A room for chocolate cake always exists on your stomatch. Can add an ice cream on top of it for additional $3.99.", menu4, "A pic of chocolate cake", "$8.99"));
    bodyContainer.appendChild(bodyContent("Lamb Chops", "Do you want to eat meat but not beef nor pork? Then try our lambs. Cooked to perfection with out finest chefs, our lamb will change your taste buds chemistry.", menu5, "A pic of lamb chops", "$17.99"));
    bodyContainer.appendChild(bodyContent("Pancakes", "Want something to eat but you're in a budget right now? Our pancakes will do. Variety of sauces are available for you to pick.", menu6, "A pic of pancakes", "$3.99"));
    contentDOM.appendChild(bodyContainer);
    
    contentDOM.className = "menu";    
}

export {appendMenu};