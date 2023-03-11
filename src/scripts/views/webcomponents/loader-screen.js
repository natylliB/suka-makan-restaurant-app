class LoaderScreen extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="loader-screen">
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('loader-screen', LoaderScreen);
