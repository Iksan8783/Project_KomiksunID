const createItemTemplate = (komik) => `
    <div class="col">
      <div class="card shadow m-2 bg-light border-5 border-light">
        <div class="item-header">
          <img src="${komik.pictureId}" class="card-img-top img-fluid item-image" alt="Gambar ${komik.nama}" loading="lazy">
          <div class="item-header-rating rounded-start">
              <p class="mb-0">⭐️<span class="rating-score">${komik.rating}</span></p>
          </div>
        </div>
        <div class="card-body">
          <h4><a class="card-title" href="${`/#/detail/${komik.id}`}">${komik.nama}</a></h4>
          <p class="card-text">${komik.sinopsis}</p>
        </div>
      </div>
    </div>
  `;

const createDetailTemplate = (komik) => `
  <div class="row">
    <h2 class="text-center">${komik.nama}</h2>
    <div class="col-md-4 mt-3">
      <img src="${komik.pictureId}" alt="logo" class="img-fluid rounded">
    </div>
    <div class="col-md-8 mt-3">
          <p class="lead text-muted">Sinopsis</p>
          <p class="lead">${komik.sinopsis}</p>
          <p class="lead text-muted">Pengarang</p>
          <p class="lead">${komik.pengarang}</p>
          <p class="lead text-muted">Rating</p>
          <p class="lead">${komik.rating}</p>
          <p class="lead text-muted">Genre</p>
          <p class="lead">${komik.genre}</p>
    </div>
    <button class="show">Baca Komik</button>
    <img src="https://cdn.statically.io/img/bacakomik/n6n5wq30f3ggfpam.ttgambar.xyz/data/772241/1052/8e03e471a81edc77c66d942f1969b7e1/BAJXlPWqS8lPrDBtkc9KCeNhKcDMjhvBnYFTAL2N.jpg" class="komik">
  </div>
`;

const createFavoritButton = () => `
  <button aria-label="tambahkan ke favorit" id="favbutton" class="fav">
  Tambahkan Ke Favorite
  </button>
`;

const createUnFavoritButton = () => `
  <button aria-label="hapus dari favorit" id="favbutton" class="fav">
    Hapus dari Favorite
  </button>  
`;

export {
  createItemTemplate, createDetailTemplate, createFavoritButton, createUnFavoritButton,
};
