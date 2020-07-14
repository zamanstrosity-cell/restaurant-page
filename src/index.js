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
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

library.add(faCheck);
dom.watch();

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


const carousel = () => {
    const carouselSlide = document.querySelector('.slides');
    const carouselImages = [...document.querySelectorAll('.image')];
    console.log(carouselImages);
    console.log(carouselSlide);

    const prevBtn = document.querySelector('#prev-button');
    const nextBtn = document.querySelector('#next-button');
    console.log(prevBtn)
    console.log(nextBtn);

    let counter = 1;
    let size = 400;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click', () => {
        console.log('clicked');
        if(counter >= carouselImages.length-1) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter += 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    })

    prevBtn.addEventListener('click', () => {
        console.log('clicked');
        if(counter <= 0) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter -= 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    })

    carouselSlide.addEventListener('transitionend', () => {
        if(carouselImages[counter].id === 'lastClone'){
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if(carouselImages[counter].id === 'firstClone'){
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });
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
    
    carousel();
}


togglePage(Chef);