import MotionHoc from "./MotionHoc";
import "./About.css";
const AuthComponent = () => {
  return (
    <div>
      <center>
        <h1>ABOUT AUTHOR</h1>
      </center>
      <p className="demoFont">
        Im just a human that love to make any relation with other human :v
      </p>
    </div>
  );
};

const Author = MotionHoc(AuthComponent);

export default Author;
