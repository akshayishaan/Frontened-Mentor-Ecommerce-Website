'use strict';
import navigationView from './views/navigationView';
import visualsView from './views/visualsView';
import visualOverlayView from './views/visualOverlayView';
import * as model from './model';

//? Variables
const thumbnails = document.querySelectorAll('.product__thumbnail-box');
const imgBox = document.querySelectorAll('.product__image-box');

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
  // ! Updating the state
  model.state.currSelected = item;

  // !Updating thumbnail active class on right box on both places visuals and visualoverlay
  thumbnails.forEach(thumbnail => {
    thumbnail.classList.remove('product__thumbnail--active');

    const [img] = thumbnail.children;
    if (+img.dataset.imgSource === item)
      thumbnail.classList.add('product__thumbnail--active');
  });

  // !Render the spinner
  visualsView.renderSpinner();

  // !After .5s display the image both in the visual and visualoverlay;
  setTimeout(function () {
    imgBox.forEach(box => (box.innerHTML = ''));
    imgBox.forEach(box => {
      const imgEl = model.findImage(item);
      if (box.classList.contains('visual-overlay__image-box'))
        imgEl.classList.add('visual-overlay__photo');
      box.insertAdjacentElement('afterbegin', imgEl);
    });
  }, 500);
};

const controlVisualButtons = function (prevBtn) {
  if (prevBtn && model.state.currSelected - 1 >= 1) {
    model.state.currSelected -= 1;
    loadImage(model.state.currSelected);
  }
  if (!prevBtn && model.state.currSelected + 1 <= 4) {
    model.state.currSelected += 1;
    loadImage(model.state.currSelected);
  }
};

// Adds Required Event Listeners
const init = function () {
  loadImage(1);
  visualsView.addThumbnailHandler(loadImage);
  navigationView.addHandler(toggleNav, toggleCart);
  visualOverlayView.addOverlayHandler();
  visualOverlayView.addVisualButtonHandler(controlVisualButtons);
  visualOverlayView.addVisualCloseButtonHandler();
};

init();
