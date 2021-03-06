//create map
const map = L.map("mapid").setView([-27.222633,-49.6455874], 15)

//create and add tile layer
L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)


//create icon layer
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchir: [29, 68],
})

let marker 

//create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat
  const lng = event.latlng.lng

  document.querySelector('[name=lat]').value = lat
  document.querySelector('[name=lng]').value = lng

  //remove all icons
  marker && map.removeLayer(marker)

  //add icon layer
  marker = L.marker([lat, lng], { icon })
  .addTo(map)
})




//adicionar campo de fotos
function addPhotoField() {
  
  //pegar container de fotos #images
  const container = document.querySelector('#images')

  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')

  //realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

  //verificar se o campo está vazio antes de adicionar, se sim, não adicionar ao container
  const input = newFieldContainer.children[0]

  if(input.value == "") {
    return 
  }
  
  //limpar campo antes de add ao container de imagens
  input.value = ""

  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)


}

//deletar botao adicionado
function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }

  //deletar o campo
  span.parentNode.remove()
}

//select yes or no
function toggleSelect(event) {

  // retirar a class .active dos botões
  document.querySelectorAll('.button-select button')
  .forEach((button) => button.classList.remove('active'))

  //pegar o botão clicado
  const button = event.currentTarget

  //colocar a class .active no botãp clicado
  button.classList.add('active')

  
  //atualizar o meu input hidden com valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')
 
  //verificar se sim ou não
  input.value = button.dataset.value

}

function validate(event) {
  
  //validar se lat e lng estão preenchidos
  const needsLatAndLng = false
  if( needsLatAndLng) {
    event.preventDefault()
    alert('Selecione um ponto no mapa')
  }
}