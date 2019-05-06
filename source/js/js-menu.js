var navMain = document.querySelector('.page-header__container');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('page-header__container--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__container--closed')) {
    navMain.classList.remove('page-header__container--closed');
    navMain.classList.add('page-header__container--opened');
  } else {
    navMain.classList.add('page-header__container--closed');
    navMain.classList.remove('page-header__container--opened');
  }
});
