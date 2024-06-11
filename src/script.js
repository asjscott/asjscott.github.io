
// Animated navbar

// We store the navbar element in a variable using the getElementById method and the id of the navbar
const animatedNavbar = document.getElementById('animated-navbar');

// We store the navbar-icons 'div' in a variable using the getElementById method and the id of the 'div' containing icons
const navbarIcons = document.getElementById('navbar-icons');

// We store the 'a' elements in a variable using the querySelectorAll method and the 'a' elements inside the navbar-icons 'div'
const navIconLinks = navbarIcons.querySelectorAll('a');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0 && window.innerWidth >= 992) {
      animatedNavbar.classList.add('bg-white');
      animatedNavbar.classList.remove('lg:py-4');
      animatedNavbar.classList.add('lg:py-5');
      navIconLinks.forEach((link) => {
        link.classList.remove('text-white');
        link.classList.add('text-neutral-500');
      });
    } else if (window.innerWidth >= 992) {
      animatedNavbar.classList.remove('bg-white');
      animatedNavbar.classList.remove('lg:py-5');
      animatedNavbar.classList.add('lg:py-4');
      navIconLinks.forEach((link) => {
        link.classList.add('text-white');
        link.classList.remove('text-neutral-500');
      });
    }
  });
