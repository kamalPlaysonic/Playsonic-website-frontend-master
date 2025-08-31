import "../styles/Reviews.css";
import stars from "../assets/images/star-rating.png";

export function Reviews() {
  return (
    <div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">Mohammed Abdelkarim</span>
          <p className="card-content">
            Great experience with Playsonic! Highly recommend it to anyone
            looking for a fun and engaging game.
          </p>
        </div>
        <div className="date-box">
         
          <img src={stars}  style={{alignItems: "end", width: "100%", height: "100%" }} className="avatar" />
        </div>
      </div>
    </div>
  );
}
