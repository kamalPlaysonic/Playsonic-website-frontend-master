import "../styles/Prices.css";

export function Prices() {
  return (
    <>
      <section className="prices-section">
        {[
          {
            name: "Club Hub Starter",
            price: "99 JOD / month",
            period: "/mo",
            description:
              "Essential tools to digitize your club and boost revenue from day one.",
            features: [
              "Marketplace Listing",
              "Court Bookings",
              "Smart Matchmaking",
              "Coaching Session",
              "Advanced Scheduling Tools",
              "Online Payments",
              "Automated Email Workflows & Confirmations",
              "Accounting Module",
              "Performance Reports",
              "Customer Support: within 48 hours",
            ],
            cta: "Get Started",
            highlight: false,
          },
          {
            name: "Advanced Club Pro",
            price: "149 JOD / month",
            period: "/mo",
            description:
              " Full-featured club management, operations, and growth suite",
            features: [
              "Marketplace Listing",
              "Court Bookings",
              "Smart Matchmaking",
              "Coaching Session",
              "Advanced Scheduling Tools",
              "Online Payments",
              "Automated Email Workflows & Confirmations",
              "Accounting Module",
              "Performance Reports",
              "Club Admin Mobile App",
              "Leagues & Tournaments",
              "CRM Software",
              "Staff Management",
              "Inventory Control & Tracking",
              "Data & Analytics Dashboards",
              "Dedicated Account Manager",
              "Custom Integrations & Open APIs",
              "Customer Support: within 24 hours",
            ],
            cta: "Start Pro",
            highlight: true,
          },
          {
            name: "Enterprise / Custom",
            price: "200 JOD / month",
            period: "/mo",
            description:
              "Large or multi-location clubs needing complete customization.",
            features: [
              "Marketplace Listing",
              "Court Bookings",
              "Smart Matchmaking",
              "Coaching Session",
              "Advanced Scheduling Tools",
              "Online Payments",
              "Automated Email Workflows & Confirmations",
              "Accounting Module",
              "Performance Reports",
              "Club Admin Mobile App",
              "Leagues & Tournaments",
              "CRM Software",
              "Staff Management",
              "Inventory Control & Tracking",
              "Data & Analytics Dashboards",
              "Dedicated Account Manager",
              "Custom Integrations & Open APIs",
              "Rules & Roles Engine",
              "In-App Chats with Players",
              "Courses (LMS)",
              "Customer Memberships",
              "Whitelabel Mobile Application",
              "Whitelabel Website",
              "Customer Support: 24/7",
            ],
            cta: "Contact Sales",
            highlight: false,
          },
        ].map((plan) => (
          <div
            key={plan.name}
            className={`prices ${plan.highlight ? "highlight" : ""}`}
          >
            <div className="card-header">
              <h3 className="plan-title">{plan.name}</h3>
              {plan.highlight && <span className="badge">Most Popular</span>}
            </div>
            <div className="price">
              {plan.price}
              <span className="price-period">{plan.period}</span>
            </div>
            <p className="plan-subtitle">{plan.description}</p>
            <ul className="lists">
              {plan.features.map((feature) => (
                <li className="list" key={feature}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="action"
              aria-label={`Choose the ${plan.name} plan`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </section>
    </>
  );
}

/*  
  <section className="prices-section">
        {[
          {
            name: "Club Hub Starter",
            price: "80 JOD / month
960 / year (save 20%)",
            period: "/year",
            description: "Essential tools to digitize your club and boost revenue from day one.",
            features: [
              "Marketplace Listing",
              "Court Bookings",
              "Smart Matchmaking",
              "Coaching Session",
              "Advanced Scheduling Tools",
              "Online Payments",
              "Automated Email Workflows & Confirmations",
              "Accounting Module",
              "Performance Reports"
            ],
            cta: "Get Started",
            highlight: false,
          },
          {
            name: "Advanced Club Pro",
            price: "119.2 JOD / month
1,430.4 / year (save 20%)",
            period: "/year",
            description: " Full-featured club management, operations, and growth suite",
            features: [
               "Marketplace Listing",
              "Court Bookings",
              "Smart Matchmaking",
              "Coaching Session",
              "Advanced Scheduling Tools",
              "Online Payments",
              "Automated Email Workflows & Confirmations",
              "Accounting Module",
              "Performance Reports",
              "Club Admin Mobile App",
              "Leagues & Tournaments",
              "CRM Software",
              "Staff Management",
              "Inventory Control & Tracking",
              "Data & Analytics Dashboards",
              "Dedicated Account Manager",
              "Custom Integrations & Open APIs"
            ],
            cta: "Start Pro",
            highlight: true,
          },
          {
            name: "Enterprise / Custom",
            price: "160 JOD / month
1,920 / year (save 20%)",
            period: "/year",
            description: "Large or multi-location clubs needing complete customization.",
            features: [
              "Marketplace Listing",
              "Court Bookings",
              "Smart Matchmaking",
              "Coaching Session",
              "Advanced Scheduling Tools",
              "Online Payments",
              "Automated Email Workflows & Confirmations",
              "Accounting Module",
              "Performance Reports",
              "Club Admin Mobile App",
              "Leagues & Tournaments",
              "CRM Software",
              "Staff Management",
              "Inventory Control & Tracking",
              "Data & Analytics Dashboards",
              "Dedicated Account Manager",
              "Custom Integrations & Open APIs",
              "Rules & Roles Engine",
              "In-App Chats with Players",
              "Courses (LMS)",
              "Customer Memberships",
              "Whitelabel Mobile Application",
              "Whitelabel Website"
            ],
            cta: "Contact Sales",
            highlight: false,
          },
        ].map((plan) => (
          <div
            key={plan.name}
            className={`prices ${plan.highlight ? "highlight" : ""}`}
          >
            <div className="card-header">
              <h3 className="plan-title">{plan.name}</h3>
              {plan.highlight && <span className="badge">Most Popular</span>}
            </div>
            <div className="price">
              {plan.price}
              <span className="price-period">{plan.period}</span>
            </div>
            <p className="plan-subtitle">{plan.description}</p>
            <ul className="lists">
              {plan.features.map((feature) => (
                <li className="list" key={feature}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="action"
              aria-label={`Choose the ${plan.name} plan`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </section>

*/
