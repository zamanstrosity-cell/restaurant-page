import 'bootstrap';
import './scss/app.scss';
import Header from './pages/header';
import { mobileHeader, mobileNav } from './pages/mobile';
import Footer from './pages/footer'
import Home from './pages/home';
import Menu from './pages/menu';
import Chef from './pages/chef';
import Reservations from './pages/reservations';
import Location from './pages/location';

const body = document.querySelector("body");

const togglePage = (element) => {
    body.innerHTML = '';
    const mainPage = document.createElement('div');
    mainPage.setAttribute('id', 'content');
    body.appendChild(mainPage);
    body.insertBefore(mobileHeader(), mainPage);
    mainPage.appendChild(Header());
    mainPage.appendChild(element());
    mainPage.appendChild(Footer());
    mainPage.appendChild(mobileNav());
    addEventListeners();
}




const addEventListeners = () => {
    const homeButtons = document.querySelectorAll('[data-go-to-home]');
    homeButtons.forEach( button => {
        button.onclick = () => {
        togglePage(Home);
    }
    });
    const menuButtons = document.querySelectorAll('[data-go-to-menu]');
    menuButtons.forEach(button => {
        button.onclick = () => {
            togglePage(Menu);
        }
    });
    const chefButtons = document.querySelectorAll('[data-go-to-chef]');
    chefButtons.forEach(button => {
        button.onclick = () => {
            togglePage(Chef);
        }
    });
    const reservationButtons = document.querySelectorAll('[data-go-to-reservations]');
    reservationButtons.forEach(button => {
        button.onclick = () => {
            togglePage(Reservations);
        }
    });
    const locationButtons = document.querySelectorAll('[data-go-to-location]');
    locationButtons.forEach(button => {
        button.onclick = () => {
            togglePage(Location);
        }
    });
    
    const mobileMenu = document.querySelector('.right-modal');
    mobileMenu.onclick = () => {
        mobileMenu.querySelector('.circle').classList.toggle('close');
        mobileMenu.classList.toggle('on-left');
        document.querySelector('.modal-nav').classList.toggle('visible');
        document.querySelector('.left-modal').classList.toggle('on-right');
    }
}


togglePage(Home);