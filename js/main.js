document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.navigation__link');

    function closeNavbar() {
        navToggle.checked = false; // Close the navigation when a link is clicked
        document.body.classList.remove('disable-scroll'); // Remove the class to enable scroll
    }

    navToggle.addEventListener('change', function () {
        if (navToggle.checked) {
            document.body.classList.add('disable-scroll'); // Add the class to disable scroll
        } else {
            document.body.classList.remove('disable-scroll'); // Remove the class to enable scroll
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', closeNavbar);
    });
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: "true",
    slidesPerView: 5,
    centerSlide: true,
    spaceBetween: 60,
    fade: "true",

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3
        },
        1000: {
            slidesPerView: 4
        },
        1200:{
            slidesPerView: 5
        }
    }

});

var m = document.createElement('meta');
m.name = 'theme-color';
m.content = '#2d3748';
document.head.appendChild(m);
 // Add this script to scroll to the top on page refresh
//  window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });