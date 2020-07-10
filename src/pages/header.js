const Header = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
    <div class="left">
                <a href="#" class="nav-item" data-go-to-home>Home</a>
                <a href="#" class="nav-item" data-go-to-menu>Menu</a>
                <a href="#" class="nav-item" data-go-to-chef>Chef</a>
            </div>
            <div class="middle">
                <img src="../src/assets/logo.png" alt="Chotto Motto Logo" id="logo">
            </div>
            <div class="right">
                <a href="#" class="nav-item" data-go-to-reservations>Reservations</a>
                <a href="#" class="nav-item" data-go-to-location>Location</a>
            </div>
    `
    return header;
}


export default Header;