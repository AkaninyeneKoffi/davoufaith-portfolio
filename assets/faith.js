window.onload=function(){
    document.getElementById("year").textContent=new Date().getFullYear();
    ScrollReveal().reveal('.hero-text, .hero-img, .card, .gallery img, .results-grid div',{distance:'50px',duration:1000,origin:'bottom',interval:200});
    const counters=document.querySelectorAll('.counter');
    counters.forEach(counter=>{const update=()=>{const target=+counter.getAttribute('data-target');const count=+counter.innerText;const increment=target/100;if(count<target){counter.innerText=Math.ceil(count+increment);setTimeout(update,20)}else{counter.innerText=target}};update();});
}
function toggleMenu(){
  document.getElementById("nav").classList.toggle("active");
}
function closeMenu(){
  document.getElementById("nav").classList.remove("active");
}
// Select all counter elements
const counters = document.querySelectorAll('.counter');

// Intersection Observer to detect when each card enters viewport
const options = {
  threshold: 0.5
};

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const increment = target / 100; // speed of counting
  const update = () => {
    count += increment;
    if(count < target){
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  update();
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const counter = entry.target.querySelector('.counter');
      animateCounter(counter);
      obs.unobserve(entry.target); // run only once
    }
  });
}, options);

// Observe each result card
document.querySelectorAll('.result-card').forEach(card => observer.observe(card));


const carousel = document.querySelector('.testimonials-carousel');
const cards = document.querySelectorAll('.testimonial-card');
let index = 0;

// Auto-slide function
function slideTestimonials() {
  index++;
  if(index >= cards.length) index = 0;
  const offset = index * (cards[0].offsetWidth + 20); // card width + gap
  carousel.scrollTo({
    left: offset,
    behavior: 'smooth'
  });
}

// Slide every 4 seconds
let autoSlide = setInterval(slideTestimonials, 4000);

// Pause auto-slide while user is touching/swiping
carousel.addEventListener('touchstart', () => clearInterval(autoSlide));
carousel.addEventListener('touchend', () => autoSlide = setInterval(slideTestimonials, 4000));

function openEmail(e) {
  e.preventDefault();

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const mailtoLink = "mailto:davoufai@gmail.com?subject=Content%20Creation%20Inquiry&body=Hello%20Davou%20Faith,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you.%0D%0A%0D%0ABest%20regards,";

  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=davoufai@gmail.com&su=Content%20Creation%20Inquiry&body=Hello%20Davou%20Faith,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you.%0D%0A%0D%0ABest%20regards,";

  if (isMobile) {
    window.location.href = mailtoLink;
  } else {
    window.open(gmailLink, "_blank");
  }
}