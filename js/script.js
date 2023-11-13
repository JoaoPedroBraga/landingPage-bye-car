let card = document.getElementById('card');
let icon1 = document.getElementById('icon1');
let icon2 = document.getElementById('icon2');

function Honda(){
    card.src = "img/honda.jpg";
    icon1.setAttribute('onclick', 'Scooter()');
    icon2.setAttribute('onclick', 'Scooter()')
}
function Scooter(){
    card.src = "img/voltz.jpg";
    icon1.setAttribute('onclick', 'Honda()');
    icon2.setAttribute('onclick', 'Honda()')
}
