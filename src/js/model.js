export const state = {
  currSelected: 1,
};

export const findImage = function (item) {
  const imgEl = new Image();
  imgEl.classList.add('product__photo');
  if (item === 1) imgEl.src = require(`../../images/image-product-1.jpg`);
  else if (item === 2) imgEl.src = require(`../../images/image-product-2.jpg`);
  else if (item === 3) imgEl.src = require(`../../images/image-product-3.jpg`);
  else if (item === 4) imgEl.src = require(`../../images/image-product-4.jpg`);
  return imgEl;
};
