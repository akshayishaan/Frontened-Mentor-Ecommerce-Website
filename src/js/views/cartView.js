import icons from '../../../images/sprite.svg';

class CartView {
  #counter = document.querySelector('.counter');
  #counterValue = document.querySelector('.product__counter');
  #addToCart = document.querySelector('.product__add-to-cart');
  #cartItems = document.querySelector('.cart-popup__items');
  #checkout = document.querySelector('.cart-popup__checkout');
  constructor() {}

  addCounterHandler() {
    this.#counter.addEventListener('click', function (e) {
      const btnEl = e.target.closest('.product__icon');
      if (!btnEl) return;

      const cntr = btnEl.closest('.counter').querySelector('.product__counter');
      if (btnEl.classList.contains('product__icon-minus')) {
        const currQty = +cntr.innerHTML;
        if (currQty == 0) return;
        cntr.innerHTML = currQty - 1;
      } else if (btnEl.classList.contains('product__icon-plus')) {
        const currQty = +cntr.innerHTML;
        cntr.innerHTML = currQty + 1;
      }
    });
  }

  addAddToCartHandler(handler) {
    this.#addToCart.addEventListener('click', handler);
  }

  addItemsToCart(itemsAlreadyInCart) {
    const qtySelected = +this.#counterValue.innerHTML;
    if (qtySelected == 0) return;

    const html = this.generateMarkup(itemsAlreadyInCart, qtySelected);
    this.#cartItems.innerHTML = '';
    this.#cartItems.insertAdjacentHTML('afterbegin', html);

    this.#checkout.dataset.qty = itemsAlreadyInCart + qtySelected;
    this.#counterValue.innerHTML = 0;
    return qtySelected;
  }

  generateMarkup(itemsAlreadyInCart, qtySelected) {
    return `
      <div class="cart-popup__item">

              <div class="cart-popup__item-photo">
                <img src="${require('../../../images/image-product-1-thumbnail.jpg')}" alt="Product Photo">
              </div>

              <div class="cart-popup__item-description">
                <h1 class="cart-popup__item-title">Fall Limited Edition Sneakers</h1>
                <span class="cart-popup__item-price">
                  $125.00 &times; <span class="cart-popup__item-quantity">${
                    itemsAlreadyInCart + qtySelected
                  }</span> <span
                    class="cart-popup__item-total-price">$${
                      125 * (itemsAlreadyInCart + qtySelected)
                    }.00</span>
                </span>
              </div>

              <svg class="cart-popup__delete">
                <use xlink:href="${icons}#icon-delete"></use>
              </svg>

            </div>
    `;
  }
}

export default new CartView();
