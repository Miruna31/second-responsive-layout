'use strict';

const menuIcon =  document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobileMenu");
const menuIconClose =  document.getElementById("menu-icon-close");
const mainWrapper = document.getElementById("mainWrapper");


menuIcon.addEventListener('click', function(){
    console.log('click');
    // nu ai neaparat nevoie de if aici pentru ca e o functionalitate dedicata pe menuIcon si acest element nici nu e vizibil altfel
    if(mobileMenu.classList.contains('hidden')){
        mobileMenu.classList.remove('hidden');
        mainWrapper.style.overflowY = 'hidden';
    }
});

menuIconClose.addEventListener('click', function(){
    console.log('click');
    mobileMenu.classList.add('hidden');
    mainWrapper.style.overflowY = 'scroll';
});
