class AppBar extends HTMLElement {
  #shadowRoot = null;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
  }

  #render() {
    this.#shadowRoot.innerHTML = `
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        .app-bar {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 8px 16px;
          background-color: white;
          box-shadow: 0 4px 8px rgba( 0, 0, 0, .4 );
        }
        
        .app-bar__menu-button {
          margin-left: auto;
        }
        
        .app-bar__to-main-navigator{
          position: absolute;
          top: -100%;
          left: 0;
          z-index: 1;
        }
        
        .app-bar__to-main-navigator:focus {
          position: static;
          top:0;
        }
        
        .app-bar__menu-button {
          background-color: #FEA82F;
          border-radius: 5px;
          color: white;
          border: none;
          min-width: 44px;
          min-height: 44px;
          font-size: 1.2em;
          font-weight: bold;
        }
        
        .app-bar__navigations {
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0;
          right: -100%;
          z-index: 1;
          background-color: #FF6701;
          width: 80%;
          height: 100%;
          transition: transform .4s ease-in-out; 
        }

        .app-bar__navigations > a {
          color: white;
          display: block;
          padding: 16px 24px;
          min-height: 44px;
          text-decoration: none;
        }

        .app-bar__navigations > a:focus, .app-bar__navigations > a:hover {
          text-decoration: underline;
          background-color: #FCECDD;
          color: black;
          outline:none;
        }
        
        .app-bar__navigations.open {
          transform: translate( -100%, 0 );
        }

        /* Normal Desktop Screen */
        @media only screen and ( min-width: 1000px ) {
          .app-bar__menu-button {
            display: none;
          }
          .app-bar__navigations {
            display: flex;
            flex-direction: row;
            position: sticky;
            top:0;
            z-index: 0;
            justify-content: flex-end;
            background-color: white;
            width: auto;
            height: auto;
            margin-left: auto;
          }
          .app-bar__navigations > a {
            border-right: 1px solid #FFC288;
            color: #FF6701;
          }
          .app-bar__navigations > a:last-child {
            border-right: none;
          }
        }
      </style>
    `;

    this.#shadowRoot.innerHTML += `
      <div class="app-bar" aria-label="App Bar">
        <a href="#appContent" class="app-bar__to-main-navigator">Ke Konten Utama</a>
        <a href="#/home"><img src="./images/logo/Suka-Makan-Logo.png" width="124px" alt="Suka Makan"></a>
        <button class="app-bar__menu-button" id="hamburgerButton" aria-label="buka/tutup menu navigasi">☰</button>
        <nav id="drawer" class="app-bar__navigations">
          <a href="#/home" aria-label="Menu Utama">Menu Utama</a>
          <a href="#/favorite" aria-label="favorit">Favorit</a>
          <a href="#/about-us" aria-label="Tentang kami">Tentang Kami</a>
        </nav>
      </div>
    `;

    const hamburgerButton = this.#shadowRoot.querySelector('#hamburgerButton');
    const drawer = this.#shadowRoot.querySelector('#drawer');
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
