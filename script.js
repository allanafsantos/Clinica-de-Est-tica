
//headeer quando o usuario rolar
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem' , window.scrollY > 0)
})




//quando o usuario clicar no card aparece uma informaçao
const buttons = document.querySelectorAll(".toggleButton");
const infos = document.querySelectorAll(".moreInfo");

// Adiciona o evento de clique para cada botão
buttons.forEach((button, index) => {
    button.addEventListener("click", function() {
        let info = infos[index];
        if (info.classList.contains("hidden")) {
            info.classList.remove("hidden");
        
        } else {
            info.classList.add("hidden");
        }
    });
});


//depoimentos passando dinamicos
const slider = document.getElementById('testimonials-slider');
const testimonials = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

// Começar com o primeiro depoimento ativo
showTestimonial(currentIndex);

// Mudar o depoimento automaticamente a cada 5 segundos
setInterval(nextTestimonial, 3000);

  

//menu mobile
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
AOS.init();
