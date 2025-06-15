window.onload = () => {

    // Define constants for all of the elements we will be working with
    const form = document.querySelector('#myForm');
    const nameInput = document.querySelector('#fullName');
    const emailInput = document.querySelector('#emailAddress');
    const nameError = document.querySelector('#fullName + .field-error');
    const emailError = document.querySelector('#emailAddress + .field-error');
    
    function validateName() {
        if (nameInput.validity.valid) {
        // Value is valid, so remove any previous error message
        nameError.textContent = '';
        } else {
        // Value is not valid, so display an error message
        showNameError();
        }
        }
    
        function showNameError() {
            nameError.textContent = 'Please enter your name';
            }
            
    
            function validateEmail() {
                if (emailInput.validity.valid) {
                // Value is valid, so remove any previous error message
                emailError.textContent = '';
                } else {
                // Value is not valid, so display an error message
                showEmailError();
                }
                }
    
                function showEmailError() {
                    if (emailInput.validity.valueMissing) {
                    // The field is empty
                    emailError.textContent = 'Please enter your email address';
                    } else if (emailInput.validity.typeMismatch) {
                    // The field contains an invalid email address
                    emailError.textContent = 'Your email address does not appear to be correct';
                    }
                    }
                    
    
                    function validateForm(event) {
                        // Keep track of our validation "state"
                        let formHasErrors = false;
                        if (!nameInput.validity.valid) {
                        // Name input is invalid, show its error and change "state"
                        formHasErrors = true;
                        showNameError();
                        }
                        if (!emailInput.validity.valid) {
                        // Email input is invalid, show its error and change "state"
                        formHasErrors = true;
                        showEmailError();
                        }
                        // Check the "state" to see if the form should be submitted
                        if (formHasErrors) {
                        event.preventDefault();
                        }
                        }
    
    // Set up an event listener for each of the fields in the form
    // The event we are listening for is "input" (occurs when user types or pastes text into a field)
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    
    // Set up an event listener for the form
    // The event we are listening for is "submit" (occurs when user trys to submit the form)
    form.addEventListener('submit', validateForm);
                    

//  Google map and Leafet   
const gMap =  document.getElementById("gMap");
const map = L.map('myMap', {
    center: [0, 0],
    minZoom: 2,
    zoom: 12
});

function getLocation() {
    var x = document.getElementById("demo");
  if (!navigator.geolocation) {

    x.innerHTML = "Geolocation is not supported by this browser.";
    return;
  }

        
function showPosition(position) {
    var latitude = position.coords.latitude;
        var longitude = position.coords.longitude; 
  x.innerHTML = "Latitude: " + latitude + 
  "° <br>Longitude: " + longitude + "°";
  makeMyMap(latitude, longitude);
}

function error() {
        x.innerHTML = "Unable to retrieve your location"; 
    }
    navigator.geolocation.getCurrentPosition(showPosition, error);
}
const button = document.querySelector('#find-me');
button.addEventListener('click', doZoom);

function doZoom() {
    map.setZoom(5);
    }

    function makeMyMap(mylat, mylong) {
    map.panTo(new L.LatLng(mylat, mylong), 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

var marker = L.marker([mylat, mylong]).addTo(map);
marker.bindPopup("<b>You are here!</b>").openPopup();

const popup = L.popup()
.setLatLng(e.latlng)
    .setContent("I am a standalone popup.")
    .openOn(map);
        function onMapClick(e) {
          alert("You clicked the map at " + e.latlng.toString());
        }
        map.on('click', onMapClick);

        for (var i = 0; i < markers.length; ++i) {
        L.marker([markers[i].lat, markers[i].lng], {
            icon: new L.DivIcon({
                className: 'my-div-icon',
                html: '<span class="my-map-label">' + markers[i].name + '</span>'
            })
        }).addTo(map);
 
        L.marker([markers[i].lat, markers[i].lng]).addTo(map)
            .bindPopup(markers[i].name);
 
 
 
    }


}


gMap.addEventListener("click", getLocation);   



}
    


