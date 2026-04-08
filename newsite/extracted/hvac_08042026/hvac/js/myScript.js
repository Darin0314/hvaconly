$(document).ready(function () {
  // pre loader
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(function () {
        $('#preloader').addClass('hideloader')
      }, 1000);
    });
  } else {
    setTimeout(function () {
      $('#preloader').addClass('hideloader')
    }, 1000);
  }

  setTimeout(function () {
    $('#preloader').addClass('hideloader')
  }, 1000);

  // pre loader end

  $(".nav-tabs a").click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
});


// Hamburger Selection
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');
const closeBtn = document.getElementById('mobileMenuClose');

const closeMenu = () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
};

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
});

overlay.addEventListener('click', closeMenu);
closeBtn.addEventListener('click', closeMenu);


// Header Scroll Effect
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("header").classList.add("headerAfterScroll");
  } else {
    document.getElementById("header").classList.remove("headerAfterScroll");
  }
}

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});
// Back to top button end

wow = new WOW(
  {
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();
// document.getElementById('moar').onclick = function() {
//   var section = document.createElement('section');
//   section.className = 'section--purple wow fadeInDown';
//   this.parentNode.insertBefore(section, this);
// };


document.getElementById("footerYear").innerHTML = new Date().getFullYear();