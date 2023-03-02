import RestaurantAPI from '../../data/restaurant-api';
import UrlParser from '../../routes/url-parser';

class AddReview extends HTMLElement {
  #shadowRoot = null;

  #btnPostCallback = null;

  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: 'open' });
  }

  initialize(btnPostCallback = (JSONObject) => {
    console.log('default handler activated. priting the JSON Object: ');
    console.log(JSONObject);
  }) {
    this.#btnPostCallback = btnPostCallback;
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
        .section-title {
          color: #FF6701;
          font-weight: bold;
          margin: 16px;
          border-bottom: 1px solid #FF6701;
        }
        .review-form {
          margin: 16px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;

          border: 1px solid #FF6701;
        }

        .customer-name {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .customer-name > .label-review {
          flex-basis: 20%;
        }

        .customer-name > .input-review {
          flex-basis: 80%;
        }

        .label-review {
          color: #FF6701;
        }

        .customer-review {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .input-review {
          padding: 8px 12px;
          color: #FEA82F;
          border: none;
          border-bottom: 4px solid #FF6701;
          background-color: #FCECDD;
          border-radius: 4px;
        }

        .input-review:focus {
          outline: none;
          color: white;
          font-family: Georgia, serif;
          background-color: #FFC288;
        }

        .btn-post-review {
          background-color: #FEA82F;
          color: white;
          font-weight: bold;
          min-height: 44px;
          border-radius: 4px;
          border: none;
        }

        .btn-post-review:focus {
          outline: none;
          border: 2px solid #FF6701;
          background-color: #FCECDD;
          color: #FF6701;
        }

      </style>
      <p class="section-title">
        Tambahkan Review:
      </p>
      <form class="review-form">
        <div class="customer-name">
          <label class="label-review" for="inputName">Nama:</label>
          <input type="text" id="inputName" placeholder="isikan nama anda" class="input-review">
        </div>
        <div class="customer-review">
          <label class="label-review" for="reviewTextArea">Review untuk restoran: </label>
          <textarea id="reviewTextArea" placeholder="isikan review anda" class="input-review"></textarea>
        </div>
        <button id="btnPostReview" class="btn-post-review">Kirim</button>
      </form>
    `;

    const btnPostReview = this.#shadowRoot.querySelector('#btnPostReview');
    btnPostReview.addEventListener('click', async () => {
      const inputName = this.#shadowRoot.querySelector('#inputName');
      const reviewTextArea = this.#shadowRoot.querySelector('#reviewTextArea');
      const { id } = UrlParser.parseActiveUrlWithoutCombiner();

      const response = await RestaurantAPI.addReview(id, inputName.value, reviewTextArea.value);
      this.#btnPostCallback(response);
    });
  }
}

customElements.define('add-review', AddReview);
