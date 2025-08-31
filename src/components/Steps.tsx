import "../styles/steps.css";

export function Steps() {
  return (
    <>
      <section id="playsonic-section" className="playsonic-section">
        <h1 className="title">Playsonic for players</h1>

        <div className="steps-container">
          <div className="steps">
            <div className="steps-header">
              <span className="number">1</span>
              <h2>Find</h2>
            </div>
            <p>
              With Playsonic, you have the possibility to create private matches
              with friends, make them public to find new partners, or search for
              active matches nearby to join and have fun.
            </p>
          </div>

          <div className="steps">
            <div className="steps-header">
              <span className="number">2</span>
              <h2>Book</h2>
            </div>
            <p>
              With our player level estimation system, you always play knowing
              your level and that of your opponents, enjoying competitive
              matches that will make you improve faster.
            </p>
          </div>

          <div className="steps">
            <div className="steps-header">
              <span className="number">3</span>
              <h2>Be part of the community</h2>
            </div>
            <p>
              With friends or new people, play whenever you like and become part
              of Playtomic, the world's largest and ever-growing community of
              passionate racket sports players.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
