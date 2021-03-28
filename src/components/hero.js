/* eslint-disable jsx-a11y/anchor-is-valid */
import hero1 from "../assets/images/backgrounds/hero-01.webp";
import hero2 from "../assets/images/backgrounds/hero-02.webp";
import hero3 from "../assets/images/backgrounds/hero-03.webp";
export const Hero = (props) => {
  return (
    <section
      id="myCarousel"
      className="carousel slide m-0 shadow"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img width="100%" height="100%" src={hero1} alt="" />
          <div className="container">
            <div className="carousel-caption text-start text-dark">
              <h1>
                Wh<span>&bull;</span>te
              </h1>
              <p>Elegance in minimalism.</p>
              <p>
                <a className="btn btn-lg btn-dark" href="#">
                  Start
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img width="100%" height="100%" src={hero2} alt="" />
          <div className="container">
            <div className="carousel-caption text-end text-dark mb-5">
              <h1>
                Achive more w<span>&bull;</span>th less
              </h1>
              <p>The importance of minimalism to UX.</p>
              <p className="mb-5">
                <a className="btn btn-lg btn-dark" href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img width="100%" height="100%" src={hero3} alt="" />
          <div className="container">
            <div className="carousel-caption text-dark">
              <h1>
                Make an <span>&bull;</span>mpact
              </h1>
              <p>
                Some representative placeholder content for the third slide.
              </p>
              <p>
                <a className="btn btn-lg btn-dark" href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
};
