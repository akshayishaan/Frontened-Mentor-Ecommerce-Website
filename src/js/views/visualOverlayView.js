class VisualOverlayView {
  #overlay = document.querySelector('.visual-overlay');
  #box = document.querySelector('.product__image-box');
  #allBtn = document.querySelectorAll('.product__selected-btn');
  #closeBtn = document.querySelector('.visual-overlay__close-btn');
  constructor() {}

  toggleOverlay() {
    this.#overlay.classList.remove('close-overlay');
    this.#overlay.classList.add('animate-overlay');
  }

  addOverlayHandler() {
    this.#box.addEventListener('click', this.toggleOverlay.bind(this));
  }

  addVisualButtonHandler(controlVisualButtons) {
    this.#allBtn.forEach(btn =>
      btn.addEventListener('click', function (e) {
        const btnEl = e.target.closest('.product__selected-btn');

        if (btnEl.classList.contains('product__prev-btn'))
          controlVisualButtons(true);
        else controlVisualButtons(false);
      })
    );
  }

  addVisualCloseButtonHandler() {
    this.#overlay.addEventListener('click', function (e) {
      if (
        e.target.classList.contains('visual-overlay') ||
        e.target.closest('.visual-overlay__close-btn')
      ) {
        this.classList.add('close-overlay');
        this.classList.remove('animate-overlay');
      }
    });
  }
}

export default new VisualOverlayView();
