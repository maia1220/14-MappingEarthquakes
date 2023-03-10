// Create our initial map object
// Set the longitude, latitude, and the starting zoom level


// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map


// Learn Leaflet quick start tutorial
//github clone must use the html or SSH key (will affect later merge)
//after online review, git checkout main, git pull (update branch), git status

var map = L.map('map').setView([34.0522, -118.2437], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// var marker = L.marker([51.5, -0.09]).addTo(map);

let marker = L.marker([34.0522, -118.2437]).addTo(map);


var circle = L.circle([34.0522, -118.2437], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
}).addTo(map);


// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// //popup as a layer
// var popup = L.popup()
//     .setLatLng([51.513, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(map);


// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

console.log("working!")