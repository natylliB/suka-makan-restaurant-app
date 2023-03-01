class LoaderScreen extends HTMLElement {
  #shadowRoot = null;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .loader-screen {
          position: fixed;
          top: 0;
          left: 0;
          min-width: 100vw;
          min-height: 100vh;
          z-index: 1;

          background-color: rgba(0, 0, 0, .2);
        }

        .loader-container {
          background-color: rgba(0, 0, 0, .7);
          border-radius: 3px;
          padding: 4px;
          position: absolute;
          top: 50%;
          right: 50%;
          display: inline-block;
          margin: -26px -26px 0 0;
        }

        .loader {
          width: 44px;
          height: 44px;
          border: 5px solid #f4f4f4;
          border-top: 5px solid #FF6701;
          border-right: 5px solid #ff6701;
          border-radius: 50%;

          -webkit-animation: spin 1s linear infinite;
          animation: spin 1s linear infinite;
        }

        @-webkit-keyframes spin {
          0% { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }

        @keyframe spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

      </style>
      <div class="loader-screen">
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('loader-screen', LoaderScreen);
