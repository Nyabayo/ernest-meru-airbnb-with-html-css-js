// Function to open the booking modal with specific details
function openBookingModal(title, price) {
    document.getElementById("bookingModal").style.display = "block";
    document.getElementById("airbnbTitle").value = title;
    document.getElementById("price").value = price;
}

// Function to close the booking modal
function closeBookingModal() {
    document.getElementById("bookingModal").style.display = "none";
}

// Function to handle form submission
function submitBooking(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const airbnbTitle = document.getElementById("airbnbTitle").value;
    const price = document.getElementById("price").value;

    // For now, display booking details in an alert (can be replaced with server logic or email integration)
    alert(
        `Booking Confirmed:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nProperty: ${airbnbTitle}\nPrice per Night: ${price} KES`
    );

    // Close the modal after submission
    closeBookingModal();
}
