const Reservations = () => {
    const reservations = document.createElement('div');
    reservations.classList.add('reservation');
    reservations.innerHTML = `
            <div class="reservations-header">
                <h1>+ 852 1234 5678</h1>
                <p>
                    Please inquire about reservations at least two weeks in advance by using the form below. For reservations within the coming week, or for parties larger than four, please call us at the number listed above. We will call you to confirm your reservation at least 24 hours prior to your reservation.
                </p>
            </div>
    `
    const reservationsForm = document.createElement('form');
    reservationsForm.classList.add('reservation-form');
    reservationsForm.innerHTML = `
    <form class="reservation-form">
                <div class="form-group">
                    <label for="name">Name *</label>
                    <div class="form-row" id="name">
                        <div class="col">
                            <input type="text" name="first-name" class="input-field" required>
                            <label for="first-name">First Name</label>
                        </div>
                        <div class="col">
                            <input type="text" name="last-name" class="input-field" required>
                            <label for="first-name">Last Name</label>
                        </div>
                    </div>
                </div>
                <div class="form-group enter-email">
                    <label for="email-address">Email Address *</label>
                    <input type="email" name="email-address" required>
                </div>
                <div class="form-group enter-number">
                    <label for="number">Number *</label>
                    <small class="number-notice">We will call you to confirm at least 24 hours prior to your reservation</small>
                    <input type="text" name="number" required>
                </div>
                <div class="form-group">
                    <label for="special-requests">Special Requests</label>
                    <textarea name="special-requests" id="special-requests" rows="7"></textarea>
                </div>
                <div class="form-group">
                    <label for="date">Date *</label>
                    <div class="form-row">
                        <div class="col date-field-container">
                            <input type="text" name="month" class="input-field-date" required><label for="month" class="date-field">MM</label>
                        </div>
                        <div class="col date-field-container">
                            <input type="text" name="day" class="input-field-date" required><label for="day" class="date-field">DD</label>
                        </div>
                        <div class="col date-field-container">
                            <input type="text" name="year" class="input-field-date" required><label for="year" class="date-field">YYYY</label>
                        </div>
                    </div>
                </div>
                <div class="form-group size-of-party">
                    <label for="party-size">Party Size *</label>
                    <select name="party-size" id="party-size">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div class="form-group time-of-res">
                    <label for="time">Time *</label>
                    <select name="time" id="time">
                        <option value="12">12:00</option>
                        <option value="13">13:00</option>
                        <option value="14">14:00</option>
                        <option value="15">15:00</option>
                        <option value="16">16:00</option>
                        <option value="17">17:00</option>
                        <option value="18">18:00</option>
                        <option value="19">19:00</option>
                        <option value="20">20:00</option>
                        <option value="21">21:00</option>
                        <option value="22">22:00</option>
                        <option value="23">23:00</option>
                    </select>
                </div>
                <button type="submit" id="submit-form">SUBMIT</button>
            </form>
    `;
    reservations.appendChild(reservationsForm);
    return reservations;
}

export default Reservations;