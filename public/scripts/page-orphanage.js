
const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollwheelZoom:false,
    zoomControl:false
}


//get values from html

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create map
const map = L.map('mapid', options,).setView([lat,lng], 16);

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


//create e add marker


L.marker([lat,lng], {icon})
.addTo(map)





// mimage gallery

function selectImage(event){
    const button = event.currentTarget

    // remover as .active

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
        
    }
    // slecionar img clicada

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")


    // att container de img 

    imageContainer.src= image.src
    // add a classe .active pro botao

    button.classList.add("active")
}
    