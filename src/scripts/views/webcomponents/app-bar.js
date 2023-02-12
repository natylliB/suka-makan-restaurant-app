class AppBar extends HTMLElement {
  connectedCallback() {
    this.setAttribute('aria-label', 'App Bar');
    this.setAttribute('class', 'app-bar');
    this.innerHTML = `
      <a href="#main-content" class="app-bar__to-main-navigator">Ke Konten Utama</a>
      <a href="#"><img src="./images/logo/Suka-Makan-Logo.png" width="150px" alt="Suka Makan"></a>
      <button class="app-bar__menu-button" id="hamburgerButton" aria-label="buka/tutup drawer">☰</button>
      <nav id="drawer" class="app-bar__navigations">
        <a href="#/home" aria-label="home">Home</a>
        <a href="#/favorit" aria-label="favorit">Favorit</a>
        <a href="#/tentang-kami" aria-label="Tentang kami">Tentang Kami</a>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
