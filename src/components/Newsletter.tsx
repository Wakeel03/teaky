import { MoveRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="section newsletter" aria-label="newsletter">
      <div className="container">
        <div className="newsletter-card">
          <div className="card-content">
            <h2 className="h2 section-title">Our Newsletter</h2>

            <p className="section-text">
              Subscribe our newsletter and get discount 50% off
            </p>
          </div>

          <form action="" className="card-form">
            <input
              type="email"
              name="email_address"
              placeholder="Your email address"
              required
              className="email-field"
            />

            <button
              type="submit"
              className="newsletter-btn"
              aria-label="subscribe"
            >
              <MoveRight strokeWidth={1} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
