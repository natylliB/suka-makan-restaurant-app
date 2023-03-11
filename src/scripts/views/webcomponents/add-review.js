import RestaurantAPI from '../../data/restaurant-api';
import UrlParser from '../../routes/url-parser';

class AddReview extends HTMLElement {
  #btnPostCallback = null;

  initialize(btnPostCallback = (JSONObject) => {
    console.log('default handler activated. priting the JSON Object: ');
    console.log(JSONObject);
  }) {
    this.#btnPostCallback = btnPostCallback;
    this.#render();
  }

  #render() {
    this.innerHTML = `
      <p class="add-review__title">
        Tambahkan Review:
      </p>
      <form class="add-review__form">
        <div class="add-review__form-customer-name">
          <label class="add-review__form-label" for="inputName">Nama:</label>
          <input type="text" id="inputName" placeholder="isikan nama anda" class="add-review__form-input">
        </div>
        <div class="add-review__form-customer-review">
          <label class="add-review__form-label" for="reviewTextArea">Review untuk restoran: </label>
          <textarea id="reviewTextArea" placeholder="isikan review anda" class="add-review__form-input"></textarea>
        </div>
        <button id="btnPostReview" class="add-review__form-btn-post">Kirim</button>
      </form>
    `;

    const btnPostReview = this.querySelector('#btnPostReview');
    btnPostReview.addEventListener('click', async () => {
      const inputName = this.querySelector('#inputName');
      const reviewTextArea = this.querySelector('#reviewTextArea');
      const { id } = UrlParser.parseActiveUrlWithoutCombiner();

      const response = await RestaurantAPI.addReview(id, inputName.value, reviewTextArea.value);
      this.#btnPostCallback(response);
    });
  }
}

customElements.define('add-review', AddReview);
