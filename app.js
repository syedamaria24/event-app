document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var eventDate = document.getElementById("eventDate").value;
    var eventType = document.getElementById("eventType").value;
    
    if (name && email && eventDate && eventType) {
        alert(`Thank you ${name}! Your ${eventType} event has been successfully booked for ${eventDate}.`);
    } else {
        alert("Please fill out all fields.");
    }
});
