import React, { useState } from "react";
import "../styles/FAQ.css";

export function FAQ() {
  const [activeToggle, setActiveToggle] = useState("players");
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  // FAQ data for Players
  const playersFAQs = [
    {
      question: "Is PlaySonic free?",
      answer: "Yes. You only pay court rental fees."
    },
    {
      question: "How do I find a match?",
      answer: "Browse games or create your own. You can create a game by booking a court and inviting your friends, or make it public for Padel players to join with our balanced matchups!"
    },
    {
      question: "How do I join a game?",
      answer: "Simply browse available games in your area, select one that fits your schedule, and click 'Join Game'. The organizer will receive a notification."
    },
    {
      question: "What skill levels are supported?",
      answer: "We support all skill levels from beginner to professional. You can filter games by skill level to find matches that suit your ability."
    }
  ];

  // FAQ data for Clubs
  const clubsFAQs = [
    {
      question: "How do I list my club on PlaySonic?",
      answer: "Club owners can register through our partner portal. Once verified, you can list your courts, set availability, and start receiving bookings."
    },
    {
      question: "What are the fees for clubs?",
      answer: "We charge a small commission on each booking made through our platform. There are no upfront costs or monthly fees."
    },
    {
      question: "How do I manage court availability?",
      answer: "Our partner portal provides an intuitive calendar interface where you can set regular hours, block off times for maintenance, or make special arrangements."
    },
    {
      question: "What support do you offer to clubs?",
      answer: "We provide marketing support, booking management tools, and customer service to handle player inquiries about your facility."
    }
  ];

  const currentFAQs = activeToggle === "players" ? playersFAQs : clubsFAQs;

  return (
    <><section id="faq-section">
      <h1 id="faq">FAQs</h1>
      <div className="toggle-container">
        <input
          type="radio"
          id="players"
          name="toggle"
          checked={activeToggle === "players"}
          onChange={() => setActiveToggle("players")}
        />
        <label htmlFor="players" className="toggle-option">
          For Players
        </label>

        <input
          type="radio"
          id="clubs"
          name="toggle"
          checked={activeToggle === "clubs"}
          onChange={() => setActiveToggle("clubs")}
        />
        <label htmlFor="clubs" className="toggle-option">
          For Clubs
        </label>

        <div className="toggle-slider"></div>
      </div>

      <div className="qa-section">
        {currentFAQs.map((faq, index) => (
          <div
            key={index}
            className={`qa ${activeQuestion === index ? 'active' : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            <p className="question">
              {faq.question}
              <span className="indicator">{activeQuestion === index ? '−' : '+'}</span>
            </p>
            <p className="answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}