const Footer = () => {
    let footer = document.createElement('div');
    footer.classList.add('links-contact');
    footer.innerHTML = `
    <div class="links">
                    <a href="#" class="link-item" data-go-to-menu>Menu</a> •
                    <a href="#" class="link-item" data-go-to-chef>Chef</a>  •
                    <a href="#" class="link-item" data-go-to-reservations>Reservations</a>  •
                    <a href="#" class="link-item" data-go-to-location>Location</a>
                </div>
                <div class="number">
                    <number>+ 852 1234 5678</number>
                </div>
    `

    return footer;
}

export default Footer;