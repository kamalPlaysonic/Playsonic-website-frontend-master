import { useRef, useEffect, useState } from "react";
import "../styles/Contact.css";

export function Contact() {
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <div id="contact-section" className="contact-bg">
      <div className={`contact-container ${visible ? "show" : ""}`} ref={formRef}>
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>If you have any questions or feedback, feel free to reach out!</p>
        </div>
        <form className="contact_form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Phone Number" required />
          <textarea id="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
