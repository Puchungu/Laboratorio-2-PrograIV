//link a otra web
function food() {
  window.location.href = "https://g.co/kgs/8UHFmxV";
}

//link a otra web
function movie(){
    window.location.href = "https://www.netflix.com/sv/title/70143836";
}

//link a otra web
function music(){
  window.location.href = "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3vZHOp?si=4Pwm9CwuR8KxPbc4tGipSA";
}


//hacer que la imagen aparezca al presionar una tecla
document.addEventListener("keydown", function() {
  let image = document.getElementById("CS2")
  image.style.display = "flex";
  
  setTimeout(function() {
    image.style.display = "none";
  }, 5000);
});


//hacer que el texto cambie de color al pasar el mouse sobre el
document.getElementById("c").addEventListener("mouseover", function(event) {
  event.target.style.color = "black";

  setTimeout(() => {
    event.target.style.color = "orange";
  }, 500);

  setTimeout(() => {
    event.target.style.color = "blue";
  }, 1000);
});

//hacer que cambie la imagen cuando el usuario escriba "glaciar" en el input
document.getElementById("Sweden").addEventListener("input", function(event) {
  let image = document.getElementById("flag");
  if (event.target.value === "glaciar") {
    image.src = "https://www.campervansweden.com/assets/img/blog/500/storglaciaren-compressed.jpg";
  }else if(event.target.value === ""){
    image.src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/800px-Flag_of_Sweden.svg.png";
  }
  else {
    image.src = "https://img.freepik.com/vector-premium/advertencia-error-sistema-operativo-ventana-mensaje-emergente-ventana-dialogo-falla-sistema-diseno-plano_812892-54.jpg?semt=ais_hybrid";
  }
});