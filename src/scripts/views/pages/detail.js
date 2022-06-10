import UrlParser from '../../routes/url-parser';
import { createDetailTemplate } from '../templates/template-creator';
import data from '../../../../DATA.json';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  render() {
    return `
      <div id='detail' class='gx-0 mx-4'></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  afterRender() {
    function filterByID(item) {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      if (item.id === url.id) {
        return true;
      }
    }

    const arrByID = data.komiks.filter(filterByID);
    const komik = arrByID[0];

    const komikContainer = document.querySelector('#detail');
    komikContainer.innerHTML += createDetailTemplate(komik);

    console.log(document.querySelector('button.show'));
    document.querySelector('.show').addEventListener('click', () => {
      document.querySelector('.komik').style.display = 'block';
    });

    LikeButtonInitiator.init({
      FavoriteButtonContainer: document.querySelector('#likeButtonContainer'),
      komik,
    });
  },
};

export default Detail;
