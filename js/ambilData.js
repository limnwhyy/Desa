const Data = "./json/Data.json";
const dataPerangkat = document.querySelector("#perangkat");
const dataGaleri = document.querySelector("#galeri");
const dataDusun = document.querySelector("#dusun");
const dataPeternakan = document.querySelector("#peternakan");
const dataPendidikan = document.querySelector("#pendidikan");
const dataUsaha = document.querySelector("#usaha");
const dataContact = document.querySelector("#contact");
const dataPoster = document.querySelector("#kkn");
const dataPenduduk = document.querySelector("#penduduk");

const getPenduduk = () => {
  fetch(Data)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      console.log(responseJson.penduduk);
      dataPenduduk.innerHTML = "";
      let pend = responseJson.penduduk;
      pend.forEach((item) => {
        dataPenduduk.innerHTML += `
        <div class="row row-50 justify-content-center border-classic">
                <div class="col-sm-6 col-md-5 col-lg-3">
                  <div class="counter-classic">
                    <div class="counter-classic-number">
                      <span class="counter">${item.dusun} </span>
                    </div>
                    <h5 class="counter-classic-title">Dusun</h5>
                  </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-3">
                  <div class="counter-classic">
                    <div class="counter-classic-number">
                      <span class="counter">${item.total}</span>
                    </div>
                    <h5 class="counter-classic-title">Penduduk</h5>
                  </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-3">
                  <div class="counter-classic">
                    <div class="counter-classic-number">
                      <span class="counter">${item.laki}</span>
                    </div>
                    <h5 class="counter-classic-title">Laki-laki</h5>
                  </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-3">
                  <div class="counter-classic">
                    <div class="counter-classic-number">
                      <span class="counter">${item.perempuan}</span>
                    </div>
                    <h5 class="counter-classic-title">Perempuan</h5>
                  </div>
                </div>
              </div>
        `;
      });
    });
};

document.addEventListener("DOMContentLoaded", getPenduduk);


const getPoster = () => {
  fetch(Data)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      dataPoster.innerHTML = "";
      let pos = responseJson.kkn;
      pos.forEach((item) => {
        dataPoster.innerHTML += `
      <div class="col-md-4 wow fadeInDown col-9" data-wow-delay=".2s">
                  <ul class="list-marked-2 box-categories-list">
                    <li>
                      <a href="#"
                        ><img
                          src="${item.gambar}"
                          alt=""
                          width="368"
                          height="420"
                      /></a>
                      <h5 class="box-categories-title text-black-50">${item.judul}</h5>
                    </li>
                  </ul>
                </div>`;
      });
    });
};
document.addEventListener("DOMContentLoaded", getPoster);

const getContact = () => {
  fetch(Data)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      // k);
      dataContact.innerHTML = "";
      let knt = responseJson.kontak;
      knt.forEach((item) => {
        dataContact.innerHTML += `
        <div class="footer-corporate-inset">
          <div class="container">
            <div class="row row-40 justify-content-lg-between">
              <div class="col-sm-6 col-md-12 col-lg-3 col-xl-4">
                <div class="oh-desktop">
                  <div class="wow slideInRight" data-wow-delay="0s">
                    <h6 class="text-spacing-100 text-uppercase">Contact us</h6>
                    <ul class="footer-contacts d-inline-block d-sm-block">
                      <li>
                        <div class="unit">
                          <div class="unit-left">
                            <span class="icon fa fa-phone"></span>
                          </div>
                          <div class="unit-body">
                            <a class="link-phone" href="https://wa.me/6285384200907"
                              >${item.telepon}</a
                            >
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="unit">
                          <div class="unit-left">
                            <span class="icon fa fa-envelope"></span>
                          </div>
                          <div class="unit-body">
                            <a class="link-aemail" href="mailto:${item.email}"
                              >${item.email}</a
                            >
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="unit">
                          <div class="unit-left">
                            <span class="icon fa fa-location-arrow"></span>
                          </div>
                          <div class="unit-body">
                          <a class="link-location" href="${item.alamat}">Desa Karya Tunggal, Kec. Katibung, Lampung Selatan.</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-corporate-bottom-panel">
          <div class="container">
            <div
              class="row justfy-content-xl-space-berween row-10 align-items-md-center2"
            >
              <div class="col-sm-6 col-md-4 text-sm-right text-md-center">
                <div>
                  <ul class="list-inline list-inline-sm footer-social-list-2">
                    <li><a class="icon fa fa-instagram" href="${item.instagram}">Create by KKN ITERA 212 | 2022/2023</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
      });
    });
};

document.addEventListener("DOMContentLoaded", getContact);

const getUsaha = () => {
  fetch(Data)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      // ;
      dataUsaha.innerHTML = "";
      let ush = responseJson.umkm;
      ush.forEach((item) => {
        dataUsaha.innerHTML += `
        <div class="col-sm-6 col-md-12 wow fadeInRight">
              <!-- Product Big-->
              <article class="product-big">
                <div
                  class="unit flex-column flex-md-row align-items-md-stretch"
                >
                  <div class="unit-left">
                    <a class="product-big-figure" href="#"
                      ><img
                        src="${item.gambar}"
                        alt=""
                        width="960"
                        height="1280"
                    /></a>
                  </div>
                  <div class="unit-body">
                    <div class="product-big-body">
                      <h5 class="product-big-title">
                        <a href="#">${item.nProduk} </a>
                      </h5>
                      <p class="product-big-text">
                        ${item.dProduk}
                      </p>
                      <a
                        class="button button-black-outline button-ujarak"
                        href="${item.pesan}"
                        >Chat WhatsApp</a
                      >
                      <div class="product-big-price-wrap">
                        <span class="product-big-price">${item.harga}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
      `;
      });
    });
};
document.addEventListener("DOMContentLoaded", getUsaha);

const getPendidikan = () => {
  fetch(Data)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      // dikan);
      dataPeternakan.innerHTML = "";
      let pdd = responseJson.pendidikan;
      pdd.forEach((item) => {
        dataPendidikan.innerHTML += `
        <div class="col-sm-6 col-md-12 wow fadeInRight">
              <!-- Product Big-->
              <article class="product-big">
                <div
                  class="unit flex-column flex-md-row align-items-md-stretch"
                >
                  <div class="unit-left">
                    <a class="product-big-figure" href="#"
                      ><img
                        src="${item.gambar} "
                        alt=""
                        width="960"
                        height="1280"
                    /></a>
                  </div>
                  <div class="unit-body">
                    <div class="product-big-body">
                      <h5 class="product-big-title">
                        <a href="#">${item.nSekolah} </a>
                      </h5>
                      <p class="product-big-text">
                        ${item.Dsekolah}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
      `;
      });
    });
};

document.addEventListener("DOMContentLoaded", getPendidikan);

const getPeternakan = () => {
  fetch(Data)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      // nakan);
      dataPeternakan.innerHTML = "";
      let ptrn = responseJson.peternakan;
      ptrn.forEach((item) => {
        dataPeternakan.innerHTML += `
      <div class="col-sm-6 col-md-12 wow fadeInRight">
              <!-- Product Big-->
              <article class="product-big">
                <div
                  class="unit flex-column flex-md-row align-items-md-stretch"
                >
                  <div class="unit-left">
                    <a class="product-big-figure" href="#"
                      ><img
                        src="${item.gambar}"
                        alt=""
                        width="960"
                        height="1280"
                    /></a>
                  </div>
                  <div class="unit-body">
                    <div class="product-big-body">
                      <h5 class="product-big-title">
                        <a href="#">${item.nHewan}</a>
                      </h5>
                      <!-- <div class="group-sm group-middle justify-content-start">
                        
                        
                      </div> -->
                      <p class="product-big-text">
                        ${item.deskripsi}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>`;
      });
    });
};

document.addEventListener("DOMContentLoaded", getPeternakan);

const getDusun = () => {
  fetch(Data)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      // );
      dataDusun.innerHTML = "";
      let dsn = responseJson.dusun;
      dsn.forEach((item) => {
        dataDusun.innerHTML += `
        <div class="col-md-4 wow fadeInDown col-9" data-wow-delay=".2s">
                  <ul class="list-marked-2 box-categories-list">
                    <li>
                      <a href="#"
                        ><img
                          src="${item.gambar}"
                          alt=""
                          width="368"
                          height="420"
                      /></a>
                      <h5 class="box-categories-title">${item.nDesa}</h5>
                    </li>
                  </ul>
                </div>`;
      });
    });
};

document.addEventListener("DOMContentLoaded", getDusun);

const getGaleri = () => {
  fetch(Data)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      // i);
      dataGaleri.innerHTML = "";
      let glr = responseJson.galeri;
      glr.forEach((item) => {
        dataGaleri.innerHTML += `
        <div class="thumbnail-mary-figure">
            <img
              src="${item.gambar}"
              alt=""
              width="270"
              height="195"
            />
          </div>
          <div class="thumbnail-mary-caption">
            <a
              class="icon fl-bigmug-line-zoom60"
              href="${item.gambar}"
              data-lightgallery="item"
              ><img
                src="${item.gambar}"
                alt=""
                width="270"
                height="195"
            /></a>
          </div>
        
            `;
      });
    });
};
document.addEventListener("DOMContentLoaded", getGaleri);

const getPerangkat = () => {
  fetch(Data)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      //   gkat);
      dataPerangkat.innerHTML = "";
      let prgkt = responseJson.perangkat;
      prgkt.forEach((item) => {
        dataPerangkat.innerHTML += `
        <div class="col-sm-6 col-md-5 col-lg-3">
              <!-- Team Modern-->
              <article class="team-modern">
                <div class="team-modern-header">
                  <a class="team-modern-figure" href="#"
                    ><img
                      class="img-circles"
                      src="${item.image}"
                      alt=""
                      width="118"
                      height="118"
                  /></a>
                  <svg
                    x="0px"
                    y="0px"
                    width="270px"
                    height="70px"
                    viewbox="0 0 270 70"
                    enable-background="new 0 0 270 70"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        fill="#161616"d="M202.085,0C193.477,28.912,166.708,50,135,50S76.523,28.912,67.915,0H0v70h270V0H202.085z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div class="team-modern-caption">
                  <h6 class="team-modern-name">${item.nama}
                  </h6>
                  <p class="team-modern-status">${item.jabatan}</p>
                  <h6 class="team-modern-phone">${item.kontak}
                  </h6>
                </div>
              </article>
            </div>`;
      });
    });
};

document.addEventListener("DOMContentLoaded", getPerangkat);
