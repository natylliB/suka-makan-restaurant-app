import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LIST: new URL('list', CONFIG.BASE_URL),
  DETAIL: (id) => new URL(`detail/${id}`, CONFIG.BASE_URL),
  SEARCH: (searchString) => {
    const url = new URL('/search', CONFIG.BASE_URL);
    url.searchParams.append('q', searchString);
    return url;
  },
  REVIEW: new URL('review', CONFIG.BASE_URL),
  PICTURE: (pictureId, imgSize) => {
    const url = new URL(`${imgSize}/${pictureId}`, CONFIG.PICTURE_URL);
    return url.toString();
  },
};

export default API_ENDPOINT;
