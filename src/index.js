import 'bootstrap';
import './scss/app.scss';
import Header from './pages/header';
import Footer from './pages/footer'
import Home from './pages/home';
import Menu from './pages/menu';
import Chef from './pages/chef';
import Reservations from './pages/reservations';
import Location from './pages/location';


let mainPage = document.getElementById('content');

const toggleMainPage = () => {
    mainPage.innerHTML = '';
    mainPage.appendChild(Header());
    mainPage.appendChild(Home());
    mainPage.appendChild(Footer());
    addEventListeners();
}

const toggleMenuPage = () => {
    mainPage.innerHTML = '';
    mainPage.appendChild(Header());
    mainPage.appendChild(Menu());
    mainPage.appendChild(Footer());
    addEventListeners();
}

const toggleChefPage = () => {
    mainPage.innerHTML = '';
    mainPage.appendChild(Header());
    mainPage.appendChild(Chef());
    mainPage.appendChild(Footer());
    addEventListeners();
}

const toggleReservationsPage = () => {
    mainPage.innerHTML = '';
    mainPage.appendChild(Header());
    mainPage.appendChild(Reservations());
    mainPage.appendChild(Footer());
    addEventListeners();
}

const toggleLocationPage = () => {
    mainPage.innerHTML = '';
    mainPage.appendChild(Header());
    mainPage.appendChild(Location());
    mainPage.appendChild(Footer());
    addEventListeners();
}


const addEventListeners = () => {
    const homeButton = document.querySelector('[data-go-to-home]');
    homeButton.onclick = () => {
        toggleMainPage();
    }
    const menuButtons = document.querySelectorAll('[data-go-to-menu]');
    menuButtons.forEach(button => {
        button.onclick = () => {
            toggleMenuPage();
        }
    })
    const chefButtons = document.querySelectorAll('[data-go-to-chef]');
    chefButtons.forEach(button => {
        button.onclick = () => {
            toggleChefPage();
        }
    });
    const reservationButtons = document.querySelectorAll('[data-go-to-reservations]');
    reservationButtons.forEach(button => {
        button.onclick = () => {
            toggleReservationsPage();
        }
    });
    const locationButtons = document.querySelectorAll('[data-go-to-location]');
    locationButtons.forEach(button => {
        button.onclick = () => {
            toggleLocationPage();
        }
    })
}


toggleMainPage();