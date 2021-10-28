//DETECTING BUTTON PRESS

var numberOfButtons = document.querySelectorAll(".drum").length; //a variável numberOfButtons vai verificar a quantidade de buttons na classe .drum
for (var i = 0; i < numberOfButtons; i++) { //for loop


  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //seleciona o 1° botão no arquivo html, adiciona o evento click que depois aciona a função criada handleClick
    //alert ("I got clicked");
    //function handleClick() {
    //alert("i got clicked");

    //}
    /*what todo when click detected*/
    //this.style.color = "black"; alterando color

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
} //FOR LOOP vai começar na posição 0 e terminar no resultado que a variável numberOfButtons retornar

//DETECTING KEYBOARD PRESS

document.addEventListener("keypress", function(event) {
  //alert("key was pressed");
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }

}

function  buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  //setTimeout(function, milliseconds, param1, param2, ....);

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
