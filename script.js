const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.nav-icon');
const hamburger = document.querySelector('#hamburger');
const link = document.querySelectorAll('.linkNav');
const header = document.querySelector('header');

navToggle.addEventListener("click", () => {
  nav.classList.toggle('open');
  navIcon.forEach(icon => {
    icon.classList.toggle('hidden');
  });
});

window.addEventListener("resize", () => {
  if (document.body.clientWidth > 720) {
    nav.classList.remove("open");
    navIcon.forEach(icon => {
      icon.classList.add('hidden')
    });
    hamburger.classList.remove('hidden');
  }
});

$(link).on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      500
    );
  }
});

if (document.body.clientWidth < 720) {
  link.forEach(item => {
    item.addEventListener('click', event => {
      nav.classList.toggle('open');
      navIcon.forEach(icon => {
        icon.classList.toggle('hidden');
      });
    });
  });
}

var intFrameWidth = window.innerWidth;
if (intFrameWidth < 720) {
  header.classList.add("bng-color");
} else { 
  header.classList.remove("bng-color"); 
}

window.addEventListener("resize", () => {
  if (document.body.clientWidth < 720) {
    header.classList.add("bng-color");
  } else { 
    header.classList.remove("bng-color"); 
  }
});

window.onscroll = () => {
  if(intFrameWidth > 720) {
    if (window.scrollY > 100) {
        header.classList.add('bng-color');
    } else {
        header.classList.remove('bng-color');
    }
}
};