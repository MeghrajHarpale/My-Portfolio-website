burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
left = document.querySelector('.nav-left')
right= document.querySelector('.nav-right')


burger.addEventListener('click', ()=>{
    right.classList.toggle('nav-right');
    left.classList.toggle('nav-left');
    navbar.classList.toggle('navbar');
})