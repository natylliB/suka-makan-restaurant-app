class AppBar extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #render() {
    this.setAttribute('aria-label', 'App Bar');
    this.setAttribute('class', 'app-bar');
    this.innerHTML = `
      <a href="#main" class="app-bar__to-main-navigator">Ke Konten Utama</a>
      <a href="#"><img src="./images/logo/Suka-Makan-Logo.png" width="124px" alt="Suka Makan"></a>
      <button class="app-bar__menu-button" id="hamburgerButton" aria-label="buka/tutup menu navigasi">☰</button>
      <nav id="drawer" class="app-bar__navigations">
        <a href="#/home" aria-label="Menu Utama">Menu Utama</a>
        <a href="#/favorite" aria-label="favorit">Favorit</a>
        <a href="#/about-us" aria-label="Tentang kami">Tentang Kami</a>
      </nav>
    `;

    const hamburgerButton = document.querySelector('#hamburgerButton');
    const drawer = document.querySelector('#drawer');
    const main = document.querySelector('main');

    hamburgerButton.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    drawer.addEventListener('click', (evt) => {
      if (window.innerWidth >= 1000) {
        return;
      }
      if (evt.target.tagName === 'A') {
        drawer.classList.toggle('open');
      }
    });

    main.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }
}

customElements.define('app-bar', AppBar);
