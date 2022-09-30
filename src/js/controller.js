'use strict';
import navigationView from './views/navigationView';
import visualsView from './views/visualsView';
import * as model from './model';

// Displays Hamburger Menu
const toggleNav = function (menu) {
  menu.classList.toggle('nav--active');
  const overlay = document.querySelector('.nav__overlay');
  overlay.classList.toggle('display--overlay');
};

// Displays Cart Popup
const toggleCart = function (cart) {
  cart.classList.toggle('hidden');
};

// Adds Required Event Listeners
const init = function () {
  navigationView.addHandler(toggleNav, toggleCart);
};

init();
