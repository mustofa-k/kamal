import imgprojek from "../../assets/projek.jpg";
import { Link } from "react-router-dom";
import "./projek.css";
function Project() {
  return (
    <>
      <div className="container-fluid event py-5 projek">
        <div className="container py-5">
          <h1 className="display-6 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <span className="text-span">Project</span>
          </h1>
          <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.1s">
            <div className="col-3 col-lg-2 pe-0">
              <div className="text-center border-bottom border-dark py-3 px-2">
                <h6>Tugas Kuliah</h6>
              </div>
            </div>
            <div className="col-9 col-lg-6 border-start border-dark pb-5">
              <div className="ms-3">
                <h4 className="mb-3">Membuat website CRUD</h4>
                <p className="mb-4">Pada waktu semester, saya mengerjakan tugas membuat website dengan fitur CRUD menggunakan HTML, CSS, dan PHP, serta menggunakan Bootstrap untuk database.</p>
                <Link to={"/"} className="btn btn-danger px-3">
                  Github
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="overflow-hidden mb-5">
                <img src={imgprojek} alt="event-1" className="img-fluid w-100 imgprojek" />
              </div>
            </div>
          </div>
          <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.3s">
            <div className="col-3 col-lg-2 pe-0">
              <div className="text-center border-bottom border-dark py-3 px-2">
                <h6>Tugas akhir Bootcamp</h6>
              </div>
            </div>
            <div className="col-9 col-lg-6 border-start border-dark pb-5">
              <div className="ms-3">
                <h4 className="mb-3">Membuat Website course online</h4>
                <p className="mb-4">
                  Membuat UI untuk website kursus online menggunakan React.js dan Bootstrap, serta mengintegrasikan API dari tim backend. Fitur-fitur yang tersedia meliputi login, registrasi, kursus, pembelian kursus, filter kursus,
                  pencarian kursus, riwayat pembelian kursus, dan dashboard admin untuk mengelola kursus.
                </p>
                <Link to={"/"} className="btn btn-danger px-3">
                  Github
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="overflow-hidden mb-5">
                <img src={imgprojek} className="img-fluid w-100 imgprojek" alt="event-2" />
              </div>
            </div>
          </div>
          <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.5s">
            <div className="col-3 col-lg-2 pe-0">
              <div className="text-center border-bottom border-dark py-3 px-2">
                <h6>Latihan Membuat API</h6>
              </div>
            </div>
            <div className="col-9 col-lg-6 border-start border-dark pb-5">
              <div className="ms-3">
                <h4 className="mb-3">Membuat API dengan express js</h4>
                <p className="mb-4">Latihan membuat API menggunakan Express.js dan phpMyAdmin sebagai database, dengan fitur CRUD.</p>
                <Link to={"/"} className="btn btn-danger px-3">
                  Github
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="overflow-hidden mb-5">
                <img src={imgprojek} className="img-fluid w-100 imgprojek" alt="event-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
