document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});
window.onload = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                console.log("Geolocation permission granted.");
                console.log("Latitude: " + position.coords.latitude);
                console.log("Longitude: " + position.coords.longitude);
            },
            function(error) {
                if (error.code === error.PERMISSION_DENIED) {
                    console.log("Geolocation permission denied.");
                } else {
                    console.log("Error: " + error.message);
                }
            }
        );
    } else 
}  
