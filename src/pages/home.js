const Home = () => {
    const homePage = document.createElement('div');
    homePage.classList.add('home');
    homePage.innerHTML = `
    <div class="intro">
                <h1 class="title">
                    555 Wellington St. <br> Hong Kong
                </h1>
                <div class="welcome-image">
                    <img src="./assets/image-asset.jpeg" alt="Plate of Noodles" id="home-image"/>
                </div>
                <h1 class="hours">
                    12:00 to 0:00
                    <br>Every day
                </h1>
            </div>
    `
    return homePage;
}

export default Home;