import "../styles/Introduction.css";
import definitionImage from "../assets/images/introductionNew.jpg";
import athleteIntro from "../assets/images/Athlete-intro.png";

export function Introduction() {
  return (
    <>
      <div className="introduction">
        {/* Background image */}
        <img 
          src={athleteIntro} 
          alt="Athlete playing padel" 
          className="background-image"
        />

        {/* Gradient overlay */}
        <div className="gradient-overlay"></div>

        {/* Intro content */}
        <div className="intro-content">
          <h1 id="intro-sentence">
            Connecting Padel Players & Clubs <br />
            With Sonic Matchmaking
          </h1>

          <h2 id="slogan">
            <mark>
              Playsonic connects players and clubs with seamless booking
            </mark>
          </h2>

          <div className="intro-buttons">
            <a href="https://chat.whatsapp.com/DXlkLBvu5xK5toIvaQf2KH">
              <button className="join_btn">Join our community</button>
            </a>
            <a href="#download-section">
              <button className="demo_btn">Download Now!</button>
            </a>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="container">
        <img 
          src={definitionImage} 
          className="left-image" 
          alt="Playsonic app illustration" 
        />
        <div className="right-text">
          <strong className="title-intro">What is Playsonic?</strong>
          <p className="description">
            Playsonic makes padel simple: find the right partners at your skill 
            level, book courts instantly, and track your progress after every match.
          </p>
          <p className="sub-description">
            <em>
              No more WhatsApp chaos, mismatched games, or last-minute cancellations. 
              Just fair, competitive matches — every time you play. More than just an app, 
              Playsonic is a vibrant community built around the love of playing.
            </em>
          </p>
        </div>
      </div>
    </>
  );
}
