import "../styles/StickyButtons.css";

export function StickyButtons() {
  return (
    <>
    <div className="sticky-buttons">
      <button
        className="BackToTop_button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
        </svg>
        <p className="text">Back to Top</p>
      </button>

      <button className="faq-button" onClick={()=>{
        const faq_section = document.getElementById("faq-section");
        if (faq_section) {
          faq_section.scrollIntoView({ behavior: "smooth" });
        }
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
        </svg>
        <span className="tooltip">FAQ</span>
      </button>
      </div>
    </> 
  );
}