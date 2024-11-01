import "../style/style.css";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-section">
        <div className="hero-part-one">
          <h1>
            Hi, I am John,
            <br />
            Creative Technologist
          </h1>
          <br />

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            <br />
            sint. Velit officia consequat duis enim velit mollit.Exercitation veniam
            <br />
            consequat sunt nostrud amet.
          </p>
          <br />
          <img src="/images/resume-download-button.png" alt="button" />
        </div>
        <div className="hero-image">
          <Image src="/images/hero.png" alt="hero" width={292} height={299} />
        </div>
        <br />
      </div>
    </div>
  );
}
export default Hero;
