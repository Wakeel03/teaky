import Image from "next/image";

const Hero = () => {
  return (
    <section className="section hero" id="home" aria-label="home">
      <div className="container">
        <ul className="hero-list">
          <li>
            <div className="hero-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "285px", "--height": "396px" } as React.CSSProperties}
              >
                <Image
                  src="/hero-product-1.jpg"
                  width="285"
                  height="396"
                  alt="Art Deco Home"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3>
                  <a href="#" className="card-title">
                    Art Deco Home
                  </a>
                </h3>

                <p className="card-text">Decoration</p>
              </div>
            </div>
          </li>

          <li className="colspan-2">
            <div className="hero-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "568px", "--height": "389px" } as React.CSSProperties}
              >
                <Image
                  src="/hero-product-2.jpg"
                  width="568"
                  height="389"
                  alt="Helen Chair"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3>
                  <a href="#" className="card-title">
                    Helen Chair
                  </a>
                </h3>

                <p className="card-text">Decoration</p>
              </div>
            </div>
          </li>

          <li>
            <div className="hero-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "285px", "--height": "396px" } as React.CSSProperties}
              >
                <Image
                  src="/hero-product-3.jpg"
                  width="285"
                  height="396"
                  alt="Vase Of Flowers"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3>
                  <a href="#" className="card-title">
                    Vase Of Flowers
                  </a>
                </h3>

                <p className="card-text">Decoration</p>
              </div>
            </div>
          </li>

          <li className="colspan-2">
            <div className="hero-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "580px", "--height": "213px" } as React.CSSProperties}
              >
                <Image
                  src="/hero-product-4.jpg"
                  width="580"
                  height="213"
                  alt="Wood Eggs"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3>
                  <a href="#" className="card-title">
                    Wood Eggs
                  </a>
                </h3>

                <p className="card-text">Decoration</p>
              </div>
            </div>
          </li>

          <li className="colspan-2">
            <div className="hero-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "580px", "--height": "213px" } as React.CSSProperties}
              >
                <Image
                  src="/hero-product-5.jpg"
                  width="580"
                  height="213"
                  alt="Table Wood Pine"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3>
                  <a href="#" className="card-title">
                    Table Wood Pine
                  </a>
                </h3>

                <p className="card-text">Furniture</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
