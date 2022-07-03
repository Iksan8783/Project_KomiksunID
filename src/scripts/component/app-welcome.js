class AppWelcome extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
             <style>
              h2.title {
                font-size: 2rem;
                color: black;
                text-align: center;
                justify-content: center;
              p.subtitle {
                font-size: 1.2rem;
                color: black;
                text-align: center;
                justify-content: center;
              </style>
  
            <section id="welcome">
                <div class="row justify-content-evenly mb-5 pb-5">
                  <div class="col-lg-6 pe-3 d-flex flex-column justify-content-center text-center">
                    <h2 class='title'>Nikmati pengalaman membaca komik dan mempublisnya</h2>
                    <p class='subtitle'>Dengan adanya web ini pengguna dapat mempublis karya komik yang anda buat, serta anda juga bisa menikamati komik favorit anda.</p>
                    <i class="fas fa-arrow-alt-circle-down" style="font-size:100px;color:white"></i>
                  </div>
            </section>
            `;
  }
}

customElements.define('app-welcome', AppWelcome);
