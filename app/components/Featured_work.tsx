import "../style/style.css";
import Image from "next/image";

function Featured() {
  return (
    <div className="featured-works">
      <div className="featured-text">
        <p>Featured works</p>
      </div>

      <div className="image1">
        <div className="featured-image1">
          <Image
            src="/images/box1.png"
            alt="featured image"
            width={246}
            height={180}
          />
        </div>
        <div className="featured-image1-display">
          <Image
            src="/images/text-box.png"
            alt="display property"
            width={623}
            height={272}
          />
        </div>
      </div>

      <div className="image2">
        <div className="featured-image2">
          <img
            src="/images/box2.png"
            alt="featured image"
            width={246}
            height={180}
          />
        </div>
        <div className="featured-image2-display">
          <img
            src="/images/text-box.png"
            alt="display property"
            width={623}
            height={272}
          />
        </div>
      </div>

      <div className="image3">
        <div className="featured-image3">
          <img
            src="/images/box3.png"
            alt="featured image"
            width={246}
            height={184}
          />
        </div>
        <div className="featured-image3-display">
          <img
            src="/images/text-box.png"
            alt="display property"
            width={623}
            height={272}
          />
        </div>
      </div>
    </div>
  );
}
export default Featured;
