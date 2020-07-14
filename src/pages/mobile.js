const mobileHeader = () => {
    const header = document.createElement('div');
    header.classList.add("modal-header");
    header.innerHTML = `
        <div class="left-modal">
            <img src="./assets/logo.png" alt="Logo" id="second-logo">
        </div>
        <div class="right-modal">
                <div class="circle icon">
                    <span class="line top"></span>
                    <span class="line middle"></span>
                    <span class="line bottom"></span>
                </div>
        </div>
    `;
    return header;
}


const mobileNav = () => {
    const nav = document.createElement('div');
    nav.classList.add("modal-nav");
    nav.innerHTML = `
        <a href="#" class="nav-item" data-go-to-home>Home</a>
        <a href="#" class="nav-item" data-go-to-menu>Menu</a>
        <a href="#" class="nav-item" data-go-to-chef>Chef</a>
        <a href="#" class="nav-item" data-go-to-reservations>Reservations</a>
        <a href="#" class="nav-item" data-go-to-location>Location</a>
    `
    return nav;
}

export {mobileHeader, mobileNav};