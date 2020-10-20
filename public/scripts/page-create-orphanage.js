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
    iconAnchor: [29, 68]
    
})
let marker;

// create and add markers
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 
    marker && map.removeLayer(marker)

    //add icon tileLayer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})


/*adicionar campo de fotos*/

function addPhotoField(){

    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o continer pra duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionda.
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    // verificar se o campo ta vazio, se sim, não adicionar ao containe de img

    const input = newFieldContainer.children[0]


    if(input.value == ""){
        return
    }

    input.value = ""


    //limpar campo antes de adicionar ao container de imagens

    newFieldContainer.children[0].value=""

    //adicionar o clone ao container de #images

    
    container.appendChild(newFieldContainer)



}


function deletField(event){
    const span= event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = ""
        return

    }

    //deletar o campo
    span.parentNode.remove()   

}


// troca deo sim ou nao

function toggleSelect(event){


    //retirar a classe active dos botoes

    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })

    //pegar o botao clicado
    const button = event.currentTarget
    button.classList.add('active')
    //verificar se é sim ou nao
    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
    
    //colocar a classe .active no botao clicado

}