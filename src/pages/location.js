const Location = () => {
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location');
    locationDiv.innerHTML = `
    <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.9727521679446!2d114.15927073947341!3d22.282118115326753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404006475e39221%3A0xc438a1a5acc57762!2z6aaZ5riv6LO96aas5pyD5aC05aSW5oqV5rOo6JmVIC0g5Lit55Kw5aSp5pif!5e0!3m2!1sen!2seg!4v1594415112036!5m2!1sen!2seg" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div class="intro">
                <h1 class="title">
                    555 Wellington St. <br> Central, HK <br> + 852 1234 5678
                </h1>
                <div class="welcome-image">
                    <img src="../src/assets/empty-logo.png" alt="Empty Logo" id="empty-logo"/>
                </div>
                <h1 class="hours">
                    12:00 to 0:00
                    <br>Every day
                </h1>
            </div>`;
    return locationDiv;
}

export default Location;