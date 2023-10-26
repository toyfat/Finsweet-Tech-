'use strict'

const header = document.querySelector('.header');
const expert = document.querySelector('.expertise')
// const btnCookie = document.querySelector('.btn-cookie')

// expert.style.backgroundColor = '#ECF8F9'



const message = document.createElement('div');

message.innerHTML =  `We use cookies for improved functionality <button class='btn-cookie'>Got it</button> `;

 

header.prepend(message)
console.log(message)

message.style.backgroundColor = 'white'
message.style.padding = '20px 80px'
// message.style.width = '90%'
message.style.margin = 'auto'
message.style.display = 'flex'
// message.style.justifyContent = 'space-between'
message.style.justifyContent = 'space-between'
message.style.alignItems = 'center'


/// to delete the cookie when you click got it 

document.querySelector('.btn-cookie').addEventListener('click', function(){
    message.remove();
})





const navs = document.querySelector('.nav--links')
navs.addEventListener('click', function(e){
  e.preventDefault()
  console.log(e.target)

  // matching strategy  or conditions 
  if (e.target.classList.contains('nav-menu')){
    const id = e.target.getAttribute('href'); // Get the 'href' and remove the leading '#' can also use this to specify it 
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
 
})


/// slider 

const slider = document.querySelector('.slider')
const shape= document.querySelectorAll('.circle')
const testimonialContent = document.querySelectorAll('.testimonial__content')


slider.addEventListener('click', function(e){
  const click = e.target.closest('.circle')

  if (!click) return

  console.log(click)

  shape.forEach(function(el){
    el.classList.remove('active')
  })

  testimonialContent.forEach(function(cont){
    cont.classList.remove('testimonial-active');
  })
 

  click.classList.add('active')

  // document.querySelector(`.testimonial__content--${click.dataset.btn}`).classList.add('testimonial-active')
  document.querySelector(`.testimonial__content--${click.dataset.btn}`).classList.add('testimonial-active')

})








