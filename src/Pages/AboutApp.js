import MotionHoc from "./MotionHoc";
import "./About.css";
const ProjectsComponent = () => {
  return (
    <div>
      <center>
        <h1>ABOUT APP</h1>
      </center>
      <p className="demoFont">actually idk what is this for, but, have fun!</p>
    </div>
  );
};

const About = MotionHoc(ProjectsComponent);

export default About;
