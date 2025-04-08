import { Play } from "lucide-react";
import localFont from "next/font/local";
import Image from "next/image";

const mrDeHaviland = localFont({
  src: "../../public/fonts/MrDeHaviland-Regular.woff2", // Local file path
  display: "swap",
  weight: "400",
  style: "normal",
});

const About = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <h2 className={`${mrDeHaviland.className} text-[64px]`}>Woodex Store</h2>

        <p className="section-text">
          When you start with a portrait and search for a pure form, a clear
          volume, through successive eliminations, you arrive inevitably at the
          egg. Likewise, starting with the egg and following the same process in
          reverse, one finishes with the portrait.
        </p>

        <div className="about-card">
          <figure
            className="card-banner img-holder"
            style={{ "--width": "1170px", "--height": "450px" } as React.CSSProperties}
          >
            <Image
              src="/about-banner.jpg"
              width="1170"
              height="450"
              loading="lazy"
              alt="Woodex promo"
              className="img-cover"
            />
          </figure>

          <button className="play-btn" aria-label="play video">
            <div className="bg-gray-400/70 p-5 rounded-full flex items-center justify-center hover:opacity-55">
              <Play strokeWidth={1} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
