import "../style/style.css";
import Image from "next/image";

function Posts() {
  return (
    <div className="recent-work ">
      <div className="recent-posts ">
        <div className="text">
          <div className="recent">
            <p>Recent Posts </p>
          </div>
          <div className="view-all">
            <p> View All </p>
          </div>
        </div>

        <div className="recent-images">
          <br />
          <div className="recent-image1">
            <Image
              src="/images/recent-pic.png"
              alt="posts"
              width={395}
              height={286}
            />
          </div>

          <div className="recent-image2">
            <Image
              src="/images/recent-post.png"
              alt="post"
              width={395}
              height={286}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Posts;
