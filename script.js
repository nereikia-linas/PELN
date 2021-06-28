'use strict';

var burger = document.getElementById('burger');
var sideMenu = document.getElementById('side-menu');

function burgerClick(){
  sideMenu.classList.toggle('translate');
  // burger.classList.toggle('rotate');
  console.log('burger');
}

burger.addEventListener('click', burgerClick);

// var back = document.getElementById('hideSideMenu');
// var burger = document.getElementById('burger');
// var sideMenu = document.getElementById('side-menu');
//
// function rollBack(){
//   sideMenu.classList.add('translate-back');
//   burger.classList.add('rotate-back');
// }

// back.addEventListener('click', rollBack);



function downloadClick(){
  alert('Global ViRuS Alert!' + '\n' + 'Your system might be in DANGER!!!' + '\n' + 'RISK: vERY hIGH' + '\n' + '\n' + 'Threat Name: praktinioEgzoShyzophrenia 2.0' + '\n' + '\n' + 'Immediately GO to Safe Mode, by drinking two bottles of beer.');
}





// Features button effect and function
var currentButton = document.getElementsByClassName('features-button-active');
var buttons = document.getElementsByClassName('features-button');

// Susiranda mygtukus
for (var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    // Uždeda klasę mygtukams
    for (var ii = 0; ii < buttons.length; ii++){
      buttons[ii].classList.remove("features-button-active");
    }
    this.classList.add("features-button-active");

    // Changes Slides
    var index = document.querySelector(".features-button-active").getAttribute("index");
    swiper2.slideTo(index, 300);
  });
}
