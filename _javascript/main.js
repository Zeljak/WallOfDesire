// document.addEventListener('DOMContentLoaded', () => {
//   console.log('Hello Bulma!');
// });

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// // hamburger.addEventListener("click", mobileMenu);



// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }


// // Smooth Scrolling
// $(".links__style").on("click", function(event){
//   if (this.hash !== "") {
//       event.preventDefault();
//       const hash = this.hash;
//       $("html, body").animate(
//           {
//               scrollTop: $(hash).offset().top
//           },
//           1100
//       );
//   }
// });


// Moda
const modaToggle = document.querySelector('.links__style--moda').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#moda').classList.toggle('is-hidden');

  if (!document.querySelector('#moda').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(moda).offset().top
        },
        1100
    ); 
  }
});

// Beauty
const beautyToggle = document.querySelector('.links__style--beauty').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#beauty').classList.toggle('is-hidden');

  if (!document.querySelector('#beauty').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(beauty).offset().top
        },
        1100
    ); 
  }
});

// Hrana
const hranaToggle = document.querySelector('.links__style--hrana').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#hrana').classList.toggle('is-hidden');

  if (!document.querySelector('#hrana').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(hrana).offset().top
        },
        1100
    ); 
  }
});

// Sport
const sportToggle = document.querySelector('.links__style--sport').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#sport').classList.toggle('is-hidden');

  if (!document.querySelector('#sport').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(sport).offset().top
        },
        1100
    ); 
  }
});

// Tehnologija
const techToggle = document.querySelector('.links__style--tech').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#tech').classList.toggle('is-hidden');

  if (!document.querySelector('#tech').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(tech).offset().top
        },
        1100
    ); 
  }
});

// Putovanja
const putovanjaToggle = document.querySelector('.links__style--putovanja').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#putovanja').classList.toggle('is-hidden');

  if (!document.querySelector('#putovanja').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(putovanja).offset().top
        },
        1100
    ); 
  }
});

// Tretmani
const tretmaniToggle = document.querySelector('.links__style--tretmani').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#tretmani').classList.toggle('is-hidden');

  if (!document.querySelector('#tretmani').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(tretmani).offset().top
        },
        1100
    ); 
  }
});

// shopping
const shoppingToggle = document.querySelector('.links__style--shopping').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#shopping').classList.toggle('is-hidden');

  if (!document.querySelector('#shopping').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(shopping).offset().top
        },
        1100
    ); 
  }
});

// zdravlje
const zdravljeToggle = document.querySelector('.links__style--zdravlje').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#zdravlje').classList.toggle('is-hidden');

  if (!document.querySelector('#zdravlje').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(zdravlje).offset().top
        },
        1100
    ); 
  }
});

function closeAllForms(){
  document.querySelectorAll('.form__wrapper').forEach(function(form){
    if (!form.classList.contains('is-hidden')) {
      form.classList.add('is-hidden');
    }
  });
}

// Anketa moda desktop
document.querySelector('#submit-form-moda-desktop').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-moda-desktop').checked && document.getElementById('email-moda').value !== '') {

      document.querySelector('#submit-form-moda-desktop').classList.add('is-hidden');
      document.querySelector('.error-msg-moda').classList.add('is-hidden');
      document.querySelector('.loading-indicator-moda').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaModa').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-moda').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-moda').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-moda').classList.remove('is-hidden');
  }

});

// Anketa moda mobile
document.querySelector('#submit-form-moda-mobile').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';
  

  e.preventDefault();

  if(document.getElementById('pravila-moda-mobile').checked && document.getElementById('email-moda').value !== '') {

      document.querySelector('#submit-form-moda-mobile').classList.add('is-hidden');
      document.querySelector('.error-msg-moda').classList.add('is-hidden');
      document.querySelector('.loading-indicator-moda').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaModa').serializeJSON()
      })
      .then(document.querySelector('.loading-indicator-moda').classList.add('is-hidden'))
      .then(document.querySelector('.response-msg-moda').classList.remove('is-hidden'));
      
    } else {
      document.querySelector('.error-msg-moda').classList.remove('is-hidden');
  }

});

// Anketa beauty desktop
document.querySelector('#submit-form-beauty-desktop').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-beauty-desktop').checked && document.getElementById('email-beauty').value !== '') {

      document.querySelector('#submit-form-beauty-desktop').classList.add('is-hidden');
      document.querySelector('.error-msg-beauty').classList.add('is-hidden');
      document.querySelector('.loading-indicator-beauty').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaBeauty').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-beauty').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-beauty').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-beauty').classList.remove('is-hidden');
  }

});

// Anketa beauty mobile
document.querySelector('#submit-form-beauty-mobile').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';
  

  e.preventDefault();

  if(document.getElementById('pravila-beauty-mobile').checked && document.getElementById('email-beauty').value !== '') {

      document.querySelector('#submit-form-beauty-mobile').classList.add('is-hidden');
      document.querySelector('.error-msg-beauty').classList.add('is-hidden');
      document.querySelector('.loading-indicator-beauty').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaBeauty').serializeJSON()
      })
      .then(document.querySelector('.loading-indicator-beauty').classList.add('is-hidden'))
      .then(document.querySelector('.response-msg-beauty').classList.remove('is-hidden'));
      
    } else {
      document.querySelector('.error-msg-beauty').classList.remove('is-hidden');
  }

});

// Anketa hrana desktop
document.querySelector('#submit-form-hrana-desktop').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-hrana-desktop').checked && document.getElementById('email-hrana').value !== '') {

      document.querySelector('#submit-form-hrana-desktop').classList.add('is-hidden');
      document.querySelector('.error-msg-hrana').classList.add('is-hidden');
      document.querySelector('.loading-indicator-hrana').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaHrana').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-hrana').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-hrana').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-hrana').classList.remove('is-hidden');
  }

});

// Anketa hrana mobile
document.querySelector('#submit-form-hrana-mobile').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';
  

  e.preventDefault();

  if(document.getElementById('pravila-hrana-mobile').checked && document.getElementById('email-hrana').value !== '') {

      document.querySelector('#submit-form-hrana-mobile').classList.add('is-hidden');
      document.querySelector('.error-msg-hrana').classList.add('is-hidden');
      document.querySelector('.loading-indicator-hrana').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaHrana').serializeJSON()
      })
      .then(document.querySelector('.loading-indicator-hrana').classList.add('is-hidden'))
      .then(document.querySelector('.response-msg-hrana').classList.remove('is-hidden'));
      
    } else {
      document.querySelector('.error-msg-hrana').classList.remove('is-hidden');
  }

});

// Anketa sport desktop
document.querySelector('#submit-form-sport-desktop').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-sport-desktop').checked && document.getElementById('email-sport').value !== '') {

      document.querySelector('#submit-form-sport-desktop').classList.add('is-hidden');
      document.querySelector('.error-msg-sport').classList.add('is-hidden');
      document.querySelector('.loading-indicator-sport').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaSport').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-sport').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-sport').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-sport').classList.remove('is-hidden');
  }

});

// Anketa sport mobile
document.querySelector('#submit-form-sport-mobile').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';
  

  e.preventDefault();

  if(document.getElementById('pravila-sport-mobile').checked && document.getElementById('email-sport').value !== '') {

      document.querySelector('#submit-form-sport-mobile').classList.add('is-hidden');
      document.querySelector('.error-msg-sport').classList.add('is-hidden');
      document.querySelector('.loading-indicator-sport').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaSport').serializeJSON()
      })
      .then(document.querySelector('.loading-indicator-sport').classList.add('is-hidden'))
      .then(document.querySelector('.response-msg-sport').classList.remove('is-hidden'));
      
    } else {
      document.querySelector('.error-msg-sport').classList.remove('is-hidden');
  }

});

// Anketa tehnologija desktop
document.querySelector('#submit-form-tech-desktop').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-tech-desktop').checked && document.getElementById('email-tech').value !== '') {

      document.querySelector('#submit-form-tech-desktop').classList.add('is-hidden');
      document.querySelector('.error-msg-tech').classList.add('is-hidden');
      document.querySelector('.loading-indicator-tech').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaTech').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-tech').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-tech').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-tech').classList.remove('is-hidden');
  }

});

// Anketa tehnologija mobile
document.querySelector('#submit-form-tech-mobile').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';
  

  e.preventDefault();

  if(document.getElementById('pravila-tech-mobile').checked && document.getElementById('email-tech').value !== '') {

      document.querySelector('#submit-form-tech-mobile').classList.add('is-hidden');
      document.querySelector('.error-msg-tech').classList.add('is-hidden');
      document.querySelector('.loading-indicator-tech').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaTech').serializeJSON()
      })
      .then(document.querySelector('.loading-indicator-tech').classList.add('is-hidden'))
      .then(document.querySelector('.response-msg-tech').classList.remove('is-hidden'));
      
    } else {
      document.querySelector('.error-msg-tech').classList.remove('is-hidden');
  }

});

// Anketa putovanja desktop
document.querySelector('#submit-form-putovanja-desktop').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-putovanja-desktop').checked && document.getElementById('email-putovanja').value !== '') {

      document.querySelector('#submit-form-putovanja-desktop').classList.add('is-hidden');
      document.querySelector('.error-msg-putovanja').classList.add('is-hidden');
      document.querySelector('.loading-indicator-putovanja').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaPutovanja').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-putovanja').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-putovanja').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-putovanja').classList.remove('is-hidden');
  }

});

// Anketa putovanja mobile
document.querySelector('#submit-form-putovanja-mobile').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';
  

  e.preventDefault();

  if(document.getElementById('pravila-putovanja-mobile').checked && document.getElementById('email-putovanja').value !== '') {

      document.querySelector('#submit-form-putovanja-mobile').classList.add('is-hidden');
      document.querySelector('.error-msg-putovanja').classList.add('is-hidden');
      document.querySelector('.loading-indicator-putovanja').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaPutovanja').serializeJSON()
      })
      .then(document.querySelector('.loading-indicator-putovanja').classList.add('is-hidden'))
      .then(document.querySelector('.response-msg-putovanja').classList.remove('is-hidden'));
      
    } else {
      document.querySelector('.error-msg-putovanja').classList.remove('is-hidden');
  }

});

// Anketa tretmani desktop
document.querySelector('#submit-form-tretmani-desktop').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-tretmani-desktop').checked && document.getElementById('email-tretmani').value !== '') {

      document.querySelector('#submit-form-tretmani-desktop').classList.add('is-hidden');
      document.querySelector('.error-msg-tretmani').classList.add('is-hidden');
      document.querySelector('.loading-indicator-tretmani').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaTretmani').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-tretmani').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-tretmani').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-tretmani').classList.remove('is-hidden');
  }

});

// Anketa tretmani mobile
document.querySelector('#submit-form-tretmani-mobile').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';
  

  e.preventDefault();

  if(document.getElementById('pravila-tretmani-mobile').checked && document.getElementById('email-tretmani').value !== '') {

      document.querySelector('#submit-form-tretmani-mobile').classList.add('is-hidden');
      document.querySelector('.error-msg-tretmani').classList.add('is-hidden');
      document.querySelector('.loading-indicator-tretmani').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaTretmani').serializeJSON()
      })
      .then(document.querySelector('.loading-indicator-tretmani').classList.add('is-hidden'))
      .then(document.querySelector('.response-msg-tretmani').classList.remove('is-hidden'));
      
    } else {
      document.querySelector('.error-msg-tretmani').classList.remove('is-hidden');
  }

});

// Anketa shopping desktop
document.querySelector('#submit-form-shopping-desktop').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-shopping-desktop').checked && document.getElementById('email-shopping').value !== '') {

      document.querySelector('#submit-form-shopping-desktop').classList.add('is-hidden');
      document.querySelector('.error-msg-shopping').classList.add('is-hidden');
      document.querySelector('.loading-indicator-shopping').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaShopping').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-shopping').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-shopping').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-shopping').classList.remove('is-hidden');
  }

});

// Anketa shopping mobile
document.querySelector('#submit-form-shopping-mobile').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';
  

  e.preventDefault();

  if(document.getElementById('pravila-shopping-mobile').checked && document.getElementById('email-shopping').value !== '') {

      document.querySelector('#submit-form-shopping-mobile').classList.add('is-hidden');
      document.querySelector('.error-msg-shopping').classList.add('is-hidden');
      document.querySelector('.loading-indicator-shopping').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaShopping').serializeJSON()
      })
      .then(document.querySelector('.loading-indicator-shopping').classList.add('is-hidden'))
      .then(document.querySelector('.response-msg-shopping').classList.remove('is-hidden'));
      
    } else {
      document.querySelector('.error-msg-shopping').classList.remove('is-hidden');
  }

});

// Anketa zdravlje desktop
document.querySelector('#submit-form-zdravlje-desktop').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-zdravlje-desktop').checked && document.getElementById('email-zdravlje').value !== '') {

      document.querySelector('#submit-form-zdravlje-desktop').classList.add('is-hidden');
      document.querySelector('.error-msg-zdravlje').classList.add('is-hidden');
      document.querySelector('.loading-indicator-zdravlje').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaZdravlje').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-zdravlje').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-zdravlje').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-zdravlje').classList.remove('is-hidden');
  }

});

// Anketa zdravlje mobile
document.querySelector('#submit-form-zdravlje-mobile').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';
  

  e.preventDefault();

  if(document.getElementById('pravila-zdravlje-mobile').checked && document.getElementById('email-zdravlje').value !== '') {

      document.querySelector('#submit-form-zdravlje-mobile').classList.add('is-hidden');
      document.querySelector('.error-msg-zdravlje').classList.add('is-hidden');
      document.querySelector('.loading-indicator-zdravlje').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaZdravlje').serializeJSON()
      })
      .then(document.querySelector('.loading-indicator-zdravlje').classList.add('is-hidden'))
      .then(document.querySelector('.response-msg-zdravlje').classList.remove('is-hidden'));
      
    } else {
      document.querySelector('.error-msg-zdravlje').classList.remove('is-hidden');
  }

});