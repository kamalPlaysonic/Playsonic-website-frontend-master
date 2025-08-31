import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import Navbar from "../components/Navbar";
import { Introduction } from "../components/Introduction";
import { Footer } from "../components/Footer";
import { Reviews } from "../components/Reviews";
import { Download } from "../components/Download";
import { Contact } from "../components/Contact";
import { StickyButtons } from "../components/StickyButtons";
import { Steps } from "../components/Steps";
import { FAQ } from "../components/FAQ";
import "../styles/Home.css";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <Introduction />
      <div style={{ paddingBottom: "100px" }}>
        <Steps />
      </div>
     {/* <div className="reviews_section">
        <Reviews />
        <Reviews />
        <Reviews />
      </div> */}
      <Download />
      <FAQ />
      <Contact />
      <Footer />
      <StickyButtons />
    </>
  );
}