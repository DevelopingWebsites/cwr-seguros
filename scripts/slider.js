const imagesURL = [
  "https://picsum.photos/600/600",
  "https://picsum.photos/800/600",
  "https://picsum.photos/1000/600",
  "https://picsum.photos/1200/600"
];

const state = {
  current: 0,
  images: imagesURL,
  nextSlide() {
    this.current++;
    if (this.current >= this.images.length) {
      this.current = 0;
    }
  },
  prevSlide() {
    this.current--;
    if (this.current < 0) {
      this.current = this.images.length - 1;
    }
  },
  updateHtml() {
    const currentImage = this.images[this.current];
    document.querySelector(
      ".slider-image"
    ).src = currentImage;
    document.querySelector(".status").innerHTML = `${this.current + 1}/${
      this.images.length
    }`;
  },
  max: imagesURL.length - 1,
  min: 0,
};

const buttonsControllers = document.querySelectorAll(
  "#showServices .controllers button"
);

buttonsControllers.forEach((button) => {
  button.addEventListener("click", controller);
});

function controller(eventClick) {
  if (eventClick.target.id === "next") {
    state.nextSlide();
  } else if (eventClick.target.id === "prev") {
    state.prevSlide();
  }
  state.updateHtml();
}

window.addEventListener("load", () => {
  state.updateHtml();
});