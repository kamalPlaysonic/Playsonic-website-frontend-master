import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Prices } from "../components/Prices";
import "../styles/Pricing.css";

export function Pricing() {
  return (
    <div className="page-container">
      <Navbar />

      <h1 id="pricing">Pricing Plans</h1>
      <div className="toggle-container">
        <input type="radio" id="players" name="toggle" checked />
        <label htmlFor="players" className="toggle-option">
          Monthly
        </label>

        <input type="radio" id="clubs" name="toggle" />
        <label htmlFor="clubs" className="toggle-option">
          Yearly
        </label>
      </div>

      <main className="content-wrap">
        <div className="prices-section">
          <Prices />
        </div>
        <h3 id="flexible-plans">Flexible plans that adapt to your needs.</h3>
        <h4 id="remark">
          Remark*:Response times may vary depending on the subscription plan.For
          any inquiries, please <a style={{color: "blue"}}  href="#contact-section">contact</a> our
          support team.
        </h4>
      </main>

      <Footer />
    </div>
  );
}
