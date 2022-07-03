class AppAboutTeam extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
          <style>
            .bg-footer {
              background-color: #39cc14;
            }
            h3.about {
              font-size: 1.2rem;
              color: #042B41;
              padding: auto;
              width: 100%;
              display: flex;
              background-color: rgb(200, 228, 195);
              border-radius: 10px;
              text-align: center;
              justify-content: center;
            }
            .cards{
              display: flex;
              justify-content: center;
              align-items: center;
              margin:10px;
              text-align: center;
              flex-wrap: wrap;
            }
            .card-body{
              background-color: rgb(200, 228, 195);
            }
            .card-img{
              border-radius: 5px;
            }
            .cards .card{
              width: 16rem;
              margin: 20px;
            }
            .card p{
              font-size: 14px;
            }
            .card-img1{
              width: 100%;
              height: 12rem;
              background-image: url('public/profil/Alifyuan.png');
              background-size: cover;
              background-position: center center;
              
            }
            .card-img2{
              width: 100%;
              height: 12rem;
              background-image: url('public/profil/jonathan.png');
              background-size: cover;
              background-position: center center;
              
            }
            .card-img3{
              width: 100%;
              height: 12rem;
              background-image: url('public/profil/Ikhsan.png');
              background-size: cover;
              background-position: center center;
              
            }
            .card-img4{
              width: 100%;
              height: 12rem;
              background-image: url('public/profil/syukri.jpeg');
              background-size: cover;
              background-position: center center;
              
            }
          </style>

          <section>
            <h3 class="about">------->About Us<-------</h2>

            <div class="cards">
            <div class="card">
              <div class="card-img card-img1"></div>
              <div class="card-body">
                <h3> Alifyan Zulfa</h3>
                <span>Web developer</span>
                <p>Sekolah Tinggi Teknik Pati</p>
              </div>
              </div>
          
          
          <div class="card">
              <div class="card-img card-img2"></div>
              <card class="card-body">
                <h3>Johannes Aritonang</h3>
                <span>Web developer</span>
                <p>Universitas Mikroskil</p>
              </card>
            </div>
          
          <div class="card">
              <div class="card-img card-img3"></div>
              <card class="card-body">
                <h3> Muhamad Iksan</h3>
                <span>Web developer</span>
                <p>Universitas Muhammadiyah Cirebon</p>
              </card>
            </div>
          
          <div class="card">
              <div class="card-img card-img4"></div>
              <card class="card-body">
                <h3>Syukri R</h3>
                <span>Web developer</span>
                <p>Mahasiswa Kehutanan semester 6 di Universitas Riau
                </p>
              </card>
            </div>      
          </section>
        `;
  }
}

customElements.define('app-about-team', AppAboutTeam);
