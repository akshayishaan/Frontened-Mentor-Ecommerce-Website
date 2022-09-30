class VisualsView {
  #thumbnails = document.querySelector('.product__visuals');
  constructor() {}

  renderSelectedItem(selected) {
    const img = this.#thumbnails.querySelector('.product__photo');
    img.src = `./images/image-product-${selected}.jpg`;
  }
}

export default new VisualsView();
