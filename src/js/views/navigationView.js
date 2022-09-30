class NavigationView {
  #parent = document.querySelector('.nav');
  constructor() {}

  addHandler(toggleNav, toggleCart) {
    this.#parent.addEventListener('click', function (e) {
      let hamburgerMenu = e.target.closest('.nav__hamburger-menu');
      let cartBtn = e.target.closest('.nav__cart');

      if (hamburgerMenu)
        toggleNav(hamburgerMenu.closest('.nav').querySelector('.nav__list'));
      else if (cartBtn) toggleCart(cartBtn.querySelector('.cart-popup'));
    });
  }
}

export default new NavigationView();
