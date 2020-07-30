var arrow = document.querySelector(".arrow");
var units = document.querySelector(".units");

navigator.geolocation.getCurrentPosition(function(position) {
    var latitude  = position.coords.latitude; // широта
    var longitude = position.coords.longitude; // долгота
    
    units.innerHTML = "<span>Ваши координаты:</span><br>Широта: " + latitude.toFixed(3) + "° <br>Долгота: " + longitude.toFixed(3) + "°<br>";

    var img = new Image();
    img.style.margin = "20px";
    img.src = "https://static-maps.yandex.ru/1.x/?l=map&pt=" + longitude + "," + latitude + "&z=16&size=450,200&l=map";

    units.appendChild(img);
});




