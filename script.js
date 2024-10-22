// Set today's date automatically for the date input
window.onload = function() {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
};

// Search functionality demo
document.getElementById('searchBtn').addEventListener('click', function() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const passengers = document.getElementById('passengers').value;
    const date = document.getElementById('date').value;

    if (departure && destination && passengers) {
        alert(`Searching for rides from ${departure} to ${destination} on ${date} for ${passengers} passenger(s).`);
    } else {
        alert('Please fill in all fields.');
    }
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = e.target.getAttribute('href').substring(1);
        document.getElementById(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});














// Offer Ride functionality
document.getElementById('offerBtn').addEventListener('click', function() {
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;
    const offerMessage = document.getElementById('offer-message');

    // Clear previous message
    offerMessage.textContent = '';

    if (pickup && dropoff && date && seats) {
        // Simulate successful offering of a ride
        offerMessage.textContent = `Ride offered from ${pickup} to ${dropoff} on ${date} with ${seats} seat(s) available!`;
    } else {
        offerMessage.textContent = 'Please fill in all fields.';
    }
});



















