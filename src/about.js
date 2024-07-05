import about1 from './assets/about1.jpg';
import about2 from './assets/about2.jpg';

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

// Create the img element
const picContent = (url, alt) => {
    const img = document.createElement('img');

    img.setAttribute('alt', alt);
    img.setAttribute('src', url);

    return img;
}

const appendAbout = () => {
    contentDOM.appendChild(headContent("About Us"));

    const bodyContainer = document.createElement('section');
    bodyContainer.className = 'bodyAbout';
    
    bodyContainer.appendChild(bodyContent("Our Story", "Founded with a deep respect for the ranching heritage, Cattleman’s Corner is more than just a steakhouse – it's a tribute to the hardworking spirit of the West. Our chefs source the finest cuts of beef and freshest ingredients, crafting each dish with care and precision. From our rustic décor to our welcoming hospitality, we strive to create an authentic Western ambiance that makes every visit memorable."));
    bodyContainer.appendChild(picContent(about1, "A pic of a guy serving hamburger"));
    bodyContainer.appendChild(picContent(about2, "A pic of a steak dish"));
    bodyContainer.appendChild(bodyContent("Our Chefs", "Our talented chefs are the heart of Cattleman’s Corner. With years of experience and a passion for Western cuisine, they create mouthwatering dishes that honor the traditions of the American frontier. From expertly grilled steaks to innovative side dishes, our culinary team is dedicated to delivering a dining experience that is second to none."));
    bodyContainer.appendChild(bodyContent("Our Location", "Nestled in the heart of yours truly, Cattleman’s Corner combines the rustic charm of a Western ranch with the modern comforts of a premier dining establishment. Conveniently located and easy to find, our restaurant is the perfect place for both locals and visitors to enjoy a hearty meal and warm hospitality."));
    contentDOM.appendChild(bodyContainer);

    contentDOM.className = "about";
}

export {appendAbout};