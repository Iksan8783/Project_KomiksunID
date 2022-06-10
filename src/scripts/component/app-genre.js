class AppGenre extends HTMLElement {
    connectedCallback() {
      this._render();
    }
  
    _render() {
      this.innerHTML = `
      <style>
        .jumbotron-genre {;
          background-color: #39CC14;
          margin: 15px;
          padding: 20px 0;
          border-radius: 3px;
          color: #fff;
        }
  
        .jumbotron-genre h1 {
          font-size: la;
          font-weight: bold;
        }
  
        .jumbotron-genre p {
          font-size: medium;
          font-family: Arial, Helvetica, sans-serif;
        }
  
        .jumbotron-genre p#judul2 {
          display: inline;
        }
  
        .list-item {
          background-color: #c8e4c3;
          padding: 6px;
          display: grid;
          gap: 10px;
          margin: 15px;
          border-radius: 3px;
        }
  
        .list-item a {
          color: #fff;
          text-decoration: none;
          line-height: 35px;
          font-weight: bold;
        }
  
        .list-item a div {
          font-family: arial;
          padding: 5px;
          border-radius: 3px;
          background-color: #39CC14;
        }
  
        @media screen and (max-width: 380px) {
          body {
            width: 350px;
          }
        }
  
        @media screen and (min-width: 380px) {
          .jumbotron-genre {
            margin: 20px;
          }
          .list-item {
            padding: 10px;
            margin: 20px;
            grid-template-columns: repeat(2, 1fr);
          }
        }
  
        @media screen and (min-width: 550px) {
          .jumbotron-genre {
            margin: 30px;
          }
  
          .jumbotron-genre p {
            font-size: large;
          }
          .list-item {
            margin: 30px;
            grid-template-columns: repeat(3, 1fr);
          }
        }
  
        @media screen and (min-width: 800px) {
          .jumbotron-genre h1 {
            font-size: 64px;
          }
  
          .jumbotron-genre p {
            font-size: large;
            font-size: x-large;
          }
  
          .jumbotron-genre p .paragraf2 {
            display: block;
            font-size: large;
          }
          .list-item {
            margin: 30px 40px;
            grid-template-columns: repeat(5, 1fr);
          }
        }
      </style>
  
      <div class="jumbotron-genre">
      <div class="container text-center">
        <h1 class="display-4">Genre Komik</h1>
        <p id="judul" class="lead">Komiksun <span class="paragraf2 fw-normal">Situs Baca Komik, Self Publishing Komik</span></p>
      </div>
    </div>
  
    <div class="list-item text-center">
      <a href="http://localhost:8080/#/explore/genre/action"><div class="item">Action</div></a>
      <a href="http://localhost:8080/#/explore/genre/adventure"><div class="item">Adventure</div></a>
      <a href="http://localhost:8080/#/explore/genre/cars"><div class="item">Cars</div></a>
      <a href="http://localhost:8080/#/explore/genre/comedy"><div class="item">Comedy</div></a>
      <a href="http://localhost:8080/#/explore/genre/dementia"><div class="item">Dementia</div></a>
      <a href="http://localhost:8080/#/explore/genre/demons"><div class="item">Demons</div></a>
      <a href="http://localhost:8080/#/explore/genre/drama"><div class="item">Drama</div></a>
      <a href="http://localhost:8080/#/explore/genre/echi"><div class="item">Echi</div></a>
      <a href="http://localhost:8080/#/explore/genre/fantasy"><div class="item">Fantasy</div></a>
      <a href="http://localhost:8080/#/explore/genre/game"><div class="item">Game</div></a>
      <a href="http://localhost:8080/#/explore/genre/gourment"><div class="item">Gourmet</div></a>
      <a href="http://localhost:8080/#/explore/genre/harem"><div class="item">Harem</div></a>
      <a href="http://localhost:8080/#/explore/genre/historical"><div class="item">Historical</div></a>
      <a href="http://localhost:8080/#/explore/genre/horror"><div class="item">Horror</div></a>
      <a href="http://localhost:8080/#/explore/genre/isekai"><div class="item">Isekai</div></a>
      <a href="http://localhost:8080/#/explore/genre/josei"><div class="item">Josei</div></a>
      <a href="http://localhost:8080/#/explore/genre/kids"><div class="item">Kids</div></a>
      <a href="http://localhost:8080/#/explore/genre/liveAction"><div class="item">Live Action</div></a>
      <a href="http://localhost:8080/#/explore/genre/magic"><div class="item">Magic</div></a>
      <a href="http://localhost:8080/#/explore?genre/martialArts"><div class="item">Martial Arts</div></a>
    </div>
        `;
    }
  }
  
  customElements.define('app-genre', AppGenre);