const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};
//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng


//create map
const map = L.map("mapid", options).setView([lat, lng], 15);

//create and add tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon layer
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchir: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker


L.marker([lat, lng], { icon }).addTo(map);

/*image galery */

function selectImage(event) {
  const button = event.currentTarget;

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  buttons.forEach(removeActiveClass);

  //selecionar imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  //atualizar container de imagem
  imageContainer.src = image.src;

  //adicionar a classe .active para o botão clicado
  button.classList.add("active");
}
