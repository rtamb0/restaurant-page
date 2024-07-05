const contentDOM = document.querySelector('#content');

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
    contentDOM.appendChild(headContent("Cattleman’s Corner", "Rustic Dining, Refined Taste"));
    
    const bodyContainer = document.createElement('section');
    bodyContainer.className = 'bodyHome';
    
    bodyContainer.appendChild(bodyContent("Where the West Meets Your Plate", "At Cattleman’s Corner, we celebrate the robust flavors and timeless traditions of the American West. Our passion for quality steaks and hearty meals brings a true Western dining experience to your table. Whether you're a cowboy at heart or just love a great steak, you're home at Cattleman’s Corner."));
    bodyContainer.appendChild(bodyContent("Steaks as Bold as the West", "Indulge in our menu, where every dish is a celebration of flavor and tradition. From our signature ribeye to the perfectly seasoned T-bone, each steak is grilled to perfection and served with classic Western sides. Explore our selection of mouthwatering appetizers, fresh salads, and delectable desserts. At Cattleman’s Corner, every bite is a journey through the rich culinary landscape of the frontier."));
    bodyContainer.appendChild(bodyContent("Where Every Meal is a Rodeo", "Looking for the perfect venue for your next celebration? Cattleman’s Corner offers a unique setting for birthdays, anniversaries, and corporate events. Our spacious dining area and private rooms provide a versatile space for gatherings of all sizes. Let us make your special occasion unforgettable with our exceptional service and unbeatable Western charm."));
    bodyContainer.appendChild(bodyContent("Bringing Ranch Flavor to the Table", "We invite you to experience the warmth and hospitality of Cattleman’s Corner. Whether you're joining us for a family dinner, a night out with friends, or a romantic evening, we're here to make your dining experience exceptional. Saddle up and come on down to Cattleman’s Corner – where great food and good times await."));
    contentDOM.appendChild(bodyContainer);
    
    contentDOM.className = "home";
}

export {appendHome};