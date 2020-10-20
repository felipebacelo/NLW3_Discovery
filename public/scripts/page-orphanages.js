// create map
const map = L.map('mapid').setView([-27.2190877,-49.6500042], 16);

// crete and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



//create iconon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


function addMarker({id, name, lat, lng}){
 
    //create popip overlay

    const popup = L.popup({

        closeButton: false,
        className:'map-popup',
        minWidth: 240,
        minHeight: 240

    }).setContent(` ${name} <a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)

    //create e add marker
    L.marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup)
    
}


const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {
    const orphanage = {
        id:span.dataset.id,
        name:span.dataset.name,
        lat:span.dataset.lat,
        lng:span.dataset.lng

    }
    addMarker(orphanage)

})
    