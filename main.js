

var mixer = mixitup('.projects');
AOS.init({
    duration: 400,
    delay: 400
}
);
let skill = document.querySelectorAll('section.skills .container .skill ');
let projects = document.querySelectorAll('section.portfolio .container ul li');
let menuB = document.querySelector('nav .container button');
let navLink = document.querySelectorAll('nav .container ul li a');
let nav = document.querySelector('nav .container ul');

skill.forEach(element =>{
    element.querySelector('.skill-head').addEventListener('click', ()=>{
        element.querySelector('.skill-body').classList.toggle('open');
    })
});

window.addEventListener('scroll',()=>{
    let nav = document.querySelector('nav');
    nav.classList.toggle('scroll',window.scrollY > 100);
});
  

projects.forEach(element=>{
    element.addEventListener('click',()=>{
        removClass();
        element.classList.add('active');
    })
})

function removClass(){
    projects.forEach(element=>{
        element.classList.remove('active');
    })
};

menuB.addEventListener('click',()=>{
    nav.classList.toggle('open');

    if(nav.classList.contains('open')){
        menuB.innerHTML='<i class="fa-solid fa-xmark"></i>'
    }else{
        menuB.innerHTML='<i class="fa-solid fa-bars"></i>'
    }
})

navLink.forEach(element=>{
    element.addEventListener('click',()=>{
        nav.classList.remove('open');

        if(nav.classList.contains('open')){
            menuB.innerHTML='<i class="fa-solid fa-xmark"></i>'
        }else{
            menuB.innerHTML='<i class="fa-solid fa-bars"></i>'
        }
    })
})






