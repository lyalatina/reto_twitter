const boton = document.getElementById("btn");
boton.addEventListener('click', () => {
  //aca guardo el comentario ingresado por el usuario

  let comments = document.getElementById("tweet").value;


  //limpiar el textarea
  document.getElementById("tweet").value = " ";

  //contenedor donde dejare mis comentarios en html
  const cont = document.getElementById("cont");

  //crear un div contenedor
  const newComments = document.createElement("div");


  //validar que el textarea tenga un comentario
  /*
  if (comments.length === 0 || comments === null) {
    alert("Debes ingresar un mensaje");
    return false;
  }
  */
  //crear checkbox
  const chck = document.createElement("input");
  chck.type = "checkbox";

  //crear icono corazón
  const heart = document.createElement("i");
  heart.classList.add('fas', 'fa-heart', 'heart');

  //crear icono basura
  const trash = document.createElement("i");
  trash.classList.add('fas', 'fa-trash', 'trash');

  //nodos de texto tarea
  let textNewComment = document.createTextNode(comments);

  const contenedorElemento = document.createElement('p'); //icono y comentario contener
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(chck);
  newComments.appendChild(trash);
  newComments.appendChild(heart);
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);
})

//Key caracteres

boton.addEventListener("click", function () {
  var tweet = document.getElementById("tweet").value;
  var contadorDeNumbers = document.getElementById("contadorNumeros");
  document.getElementById("tweet").value = "";
  
});
var contadorDeNumbers;
function newTweet(tweet) {
  var nuevoTweet = document.createElement("div"),
    contenedor = document.getElementById("contenedorTweets"),
    p = document.createElement("p");


  newFunction(tweet, contenedor, nuevoTweet);
}
tweet.addEventListener("keydown", function () {
  contador(tweet);
});



function contador(tweet) {
  boton.disabled = false;
  contadorDeNumbers = document.getElementById("contadorNum");
  var limite = 140;
  var longitud = document.getElementById("tweet").value.length;
  var count = document.getElementById("contadorNum").innerHTML = limite - longitud;
  
  if (longitud >= 140) {
    contadorDeNumbers.style.color = "red";
    boton.disabled = true;
  } else if (longitud >= 120) {
    contadorDeNumbers.style.color = "blue";
    boton.disabled = false;
  }
  else if (longitud >= 130) {
    contadorDeNumbers.style.color = "green";
    boton.disabled = true;
  }
  else {
    contadorDeNumbers.style.color = "black";
  }
}








