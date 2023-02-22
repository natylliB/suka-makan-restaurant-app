class LoaderScreenControl {
  static #getLoaderElement() {
    return document.querySelector('loader-screen');
  }

  static showLoader() {
    const loaderElement = this.#getLoaderElement();
    loaderElement.style.display = 'initial';
  }

  static hideLoader() {
    const loaderElement = this.#getLoaderElement();
    loaderElement.style.display = 'none';
  }
}

export default LoaderScreenControl;
