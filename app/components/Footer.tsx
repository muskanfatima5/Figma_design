import "../style/style.css";
import Image from "next/image";

function End() {
  return (
    <div className="foot">
      <div className="foot-icons">
        <div className="fb-icon">
          <Image src="/images/fb.png" alt="fb icon" width={300} height={300} />
        </div>

        <div className="insta-icon">
          <Image
            src="/images/insta.png"
            alt="insta icon"
            width={300}
            height={300}
          />
        </div>

        <div className="vector-icon">
          <Image
            src="/images/Vector.png"
            alt="vector icon"
            width={300}
            height={300}
          />
        </div>

        <div className="linkedin-icon">
          <Image
            src="/images/Linkedin.png"
            alt="likedin icon"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="copyright">
        <p>Copyright©2020Allrightsreserved</p>
      </div>
    </div>
  );
}
export default End;
