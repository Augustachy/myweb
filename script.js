var typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "UI/UX Designer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
})

//menu-icon

let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick = () => {  
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//goto style.css in media query of 768 breakpoint navbar






//scroll sections
let sections = document.querySelectorAll('section');   //stickybar
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        //active link
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header a[href*=' + id + ']').classList.add('active')
            })
        }
    });
    
    
    //stickybar

    let header = document.querySelector('header');  //sticky bar

    header.classList.toggle('sticky', window.scrollY > 100); //stickybar
    
    //remove toggle of icon and navbar when click navbarlinks (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


function message(){ 
    var  Name = document.getElementById('name');
    var  email = document.getElementById('email');
    var  msg = document.getElementById('msg');
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');


  if(Name.value === '' || email.value === '' || msg.value === ''){
    danger.style.display = 'block';
  }
  else{
    setTimeout(() => {
        Name.value ='';
        email.value ='';
        msg.value = '';
    }, 2000);

    success.style.display = "block";
  }

  setTimeout(( )=> {
    danger.style.display ='none';
    success.style.display = 'none';
  }, 4000); 
}