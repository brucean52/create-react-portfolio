import contactList from '../images/work/contact_list.png';
import flexnotes from '../images/work/flexnotes.png';
import environmindful from '../images/work/environmindful.png';
import matchTwo from '../images/work/match_two.png';
import portfolio from '../images/work/create_react_portfolio.png';

export default [
    {
        name: 'FlexNotes',
        info: 'Built with a MERN Stack (MongoDB, Express, React Redux, Node.js), FlexNotes is an multi-panel note taking application that allows students to organize their multi-media study materials in one place.  Flexnotes has a binder, tab, and page navigation for organization. And each page has three panels: one for videos, slides, and notes. My role in this group project was creating the navigation, linking, routing and connecting the front end to the back end.',
        img: flexnotes,
        alt: 'FlexNotes',
        codeLink: "https://github.com/conmeconte/flexnotes",
        demoLink: "https://flexnotes.net/"
    },
    {
        name: 'Environmindful',
        info: 'Originally developed during an API hackathon, Environmindful is an environmental dashboard using Google Maps, Google Charts, OpenWeather, AQI, Carma and News APIs. Its purpose is to promote environmental awareness around the world. Built with jQuery, Ajax, and Bootstrap.',
        img: environmindful,    
        alt: 'Environmindful',
        codeLink: "https://github.com/brucean52/Environmindful",
        demoLink: "https://brucean52.github.io/Environmindful/"
    },
    {
        name: 'Match Two!',
        info: 'Match Two! is a comic book themed, memory match game. This project was built using jQuery, Bootstrap, scalable vector graphics (SVG), Photoshop, and Illustrator.',
        img: matchTwo,
        alt: 'Match Two',
        codeLink: "https://github.com/brucean52/memory-match-js",
        demoLink: "https://brucean52.github.io/memory-match-js/"
    },
    {   
        name: 'Contact List',
        info: 'Contact list is a mobile responsive technical demo using a model-view-controller (MVC) architecture, jQuery, Ajax, and Flexbox. A PHP back end was used to perform CRUD operations to a MySQL database. Contacts are sortable by name, and the app is fully mobile responsive.',
        img: contactList,
        alt: 'Contact List',
        codeLink: "https://github.com/brucean52/contact_list",
        demoLink: "http://contact-list.brucedev.net/"
    },
    {
        name: 'Create React Portfolio',
        info: 'A simple portfolio template using React, Nodemailer and Material Design.',
        img: portfolio,
        alt: 'Portfolio',
        codeLink: "https://github.com/brucean52/create-react-portfolio",
        demoLink: ""
    },
];