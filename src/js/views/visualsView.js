import icons from '../../../images/sprite.svg';

class VisualsView {
  #thumbnails = document.querySelectorAll('.product__thumbnails');
  #imgBox = document.querySelector('.product__image-box');
  constructor() {}

  addThumbnailHandler(loadImage) {
    this.#thumbnails.forEach(el => {
      el.addEventListener('click', function (e) {
        const box = e.target.closest('.product__thumbnail-box');
        if (!box) return;

        const item = e.target.dataset.imgSource;
        if (!item) return;
        loadImage(+item);
      });
    });
  }

  renderSpinner() {
    this.#imgBox.style.height = window.getComputedStyle(this.#imgBox).height;
    const html = this.generateHTML();
    this.#imgBox.innerHTML = '';
    this.#imgBox.insertAdjacentHTML('afterbegin', html);
  }

  generateHTML() {
    return `
    <svg class="product__spinner-img">
       <use xlink:href="${icons}#spinner-svgrepo-com"></use>
    </svg>
     `;
  }
}

export default new VisualsView();
