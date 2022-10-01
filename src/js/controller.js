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

const loadImage = function (item) {
  visualsView.renderSpinner();
  setTimeout(function () {
    const imgEl = model.findImage(item);
    const imgBox = document.querySelector('.product__image-box');
    imgBox.innerHTML = '';
    imgBox.insertAdjacentElement('afterbegin', imgEl);
  }, 500);
};

// Adds Required Event Listeners
const init = function () {
  loadImage(1);
  visualsView.addThumbnailHandler(loadImage);
  navigationView.addHandler(toggleNav, toggleCart);
};

init();
