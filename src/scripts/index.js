import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import data from '../DATA.json';

const main = () => {
  // open and close the drawer
  let hamburgerMenu = document.getElementById('hamburger');
  let drawer = document.getElementById('drawer');
  hamburgerMenu.addEventListener('click', (evt) => {
    drawer.classList.toggle('open');
    evt.stopPropagation();
  });

  document.body.addEventListener('click', (evt) => {
    drawer.classList.remove('open');
    evt.stopPropagation();
  })


  // generate the restaurant collection in Jelajah Restoran section
  restaurantCollection(document.getElementById('explore-restaurant'));
};

const restaurantCollection = (collectionHost) => {
  
  /* 
   * this code is used to create the collection of restaurants
   * simply by running this code will create the correct coresponding elements for the collection
   * the argument is supplied with the DOM object where the collection want to be added to.  
   */

  let container = document.createElement('div');
  container.classList.add('collection');
  container.setAttribute('tabindex', 0);
  container.setAttribute('aria-label', 'Koleksi Restoran');
  
  // get restaurants data from DATA JSON
  let restaurants = Array.from(data.restaurants);
  
  // Looping to create the restaurant items
  restaurants.forEach( data => {
    container.appendChild(generateRestaurant(data));
  });

  //get the explore restaurant section
  collectionHost.appendChild(container);
}

const generateRestaurant = (restaurant) => {
  /* 
   * this code is used to generate restaurant item 
   * The restaurant argument is supplied by restaurant object from DATA JSON
   */

  let container = document.createElement('div');
  container.classList.add('restaurantContainer');
  container.setAttribute('tabindex', 0);
  container.setAttribute('aria-label', `${restaurant.name}`);
  container.innerHTML = `
    <div class='restaurantImages'>
      <img src='${restaurant.pictureId}' alt=''/>
      <span class='city'>${restaurant.city}</span>
    </div>
    <div class='restaurantContent'>
      <p class='restaurantName'>${restaurant.name}</p>
      <p class='restaurantRating'>Skor: ${Number(restaurant.rating).toFixed(1)}</p>
      <p class='restaurantDescription'>${restaurant.description}</p>
    </div>
  `;

  return container;
}

// run the main function after the DOM is loaded
document.addEventListener('DOMContentLoaded', main());
