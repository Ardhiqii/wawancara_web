const fakultas = {
  jeremy: "FTSL",
  zaky: "STEI",
  nabiel: "STEI",
  akbar: "STEI"
};

const hobby = {
  jeremy: "Main gitar, nonton youtube, ngelamun",
  zaky: "Main dota",
  nabiel: "Hobi ilang sejak di semester 2",
  akbar: "Futsal"
};

const sekolah = {
  jeremy: "SMAN 91 jakarta",
  zaky: "SMAN 8 Palembang"
};

const namaAsli = {
  jeremy: "Jeremy Evan",
  zaky: "M Zaky",
  nabiel: "M Nabiel",
  akbar: "Malik Akbar"
};

const nama = ["jeremy", "zaky", "nabiel", "akbar"];

class Cakru extends React.Component {
  state = {
    title: "Christoper Ivan G",
    src: "./assests/imgWawan/wawan-kak-ivan2.png",
    orang: "",
    fakultas: "",
    hobby: "",
    sekolah: ""
  };
  handleWawanKru = () => {
    this.setState({
      title: "Christoper Ivan G",
      src: "./assests/imgWawan/wawan-kak-ivan2.png"
    });
  };

  handleWawanCakru = () => {
    this.setState({
      title: "Jeremy Evan",
      src: "./assests/imgWawan/wawan-ca-kru2.png",
      orang: "jeremy"
    });
  };

  render() {
    let isNameTrue = this.state.title == "Jeremy Evan";
    return (
      <React.Fragment>
        <div class="display1">
          {/* button change wawancara start */}
          <div class="button">
            <button class="button1" onClick={this.handleWawanKru}>
              Wawancara Kru
            </button>
            <button class="button2" onClick={this.handleWawanCakru}>
              Wawancara Cakru
            </button>
          </div>
          {/* button change wawancara end */}

          <div class="container">
            {/* <!-- Header Start --> */}
            <div class="header">
              <div class="judul">
                <h1>WAWANCARA</h1>
                <span></span>
                <p>
                  Amature <br />
                  Radio Club
                </p>
              </div>
              <div class="nav">
                <ul>
                  <a href="#">HOME</a>
                  <a href="#">ABOUT</a>
                  <a href="#">CONTACT</a>
                </ul>
                <div class="profile">
                  <img src="./assests/user.png" alt="profile" />
                </div>
              </div>
            </div>
            {/* <!-- Header End -->
        <!-- Main Start--> */}
            <div class="main">
              <span class="hiasan1"></span>
              <div class="rangkuman">
                <h1 id="namaOrang">
                  {isNameTrue && namaAsli[this.state.orang]}
                  {!isNameTrue && this.state.title}
                </h1>
                {isNameTrue && (
                  <p>
                    Angkatan : 2020
                    <br />
                    Fakultas : {fakultas[this.state.orang]}
                    <br />
                    Hobby : {hobby[this.state.orang]}
                    <br />
                    Asal Sekolah : {sekolah[this.state.orang]}
                    <br />
                  </p>
                )}
                {!isNameTrue && (
                  <p class="hasilwawan">
                    <b>1. Alesan masuk ARC</b>
                    <span>
                      Pas SMA sedikit belajar ngoding, ketika di kuliahan
                      bertemu pengkom menjadi semain tertarik. Kemudian nanya2,
                      terus ada yg nyaranin cobain ke ARC
                    </span>
                    <b>2. Front end atau Backend</b>
                    <span>Lebih memilih Front end karena ada tampilannya</span>
                    <b>3. Kenapa masuk jurusan sekarang?</b>
                    <span>
                      Pas itu ada pilihan antara biomedis dan Teknik
                      Telekomunikasi, karena gk suka bio, jadi milihnya
                      telekomunikasih, eh ternyata ini pilihan untuk peminatan
                    </span>
                    <b>4. Projek apa aja yang udah dilakuin</b>
                    <span>Projek bareng temen yg bukan kru ARC</span>
                    <b>
                      5. Beratan mana di Semester 2 TPB di STEI atau Semester 3
                    </b>
                    <span>
                      Teknik Telekomunikasi Umumnya beratan semester 2 TPB di
                      STEI
                    </span>
                  </p>
                )}
                {/* button change name start */}
                {isNameTrue && (
                  <div class="buttonCakru">
                    {nama.map((i) => {
                      return (
                        <button
                          onClick={() => {
                            let newState = {
                              ...this.state,
                              orang: i
                            };
                            this.setState(newState);
                          }}
                        >
                          {namaAsli[i]}
                        </button>
                      );
                    })}
                  </div>
                )}
                {/* button change name end */}
              </div>
              <div class="foto">
                <span id="hiasan2"></span>
                <img src={this.state.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
