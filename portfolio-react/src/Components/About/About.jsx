import "./About.css";

import MyPic from "../../assets/MyPic.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={MyPic} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
             
            </p>
            <p>
              {" "}
                    I'm not a typical developer—and that's the point. My journey from finance to tech wasn't a straight line, but every detour taught me something valuable about solving real problems. I'm comfortable being uncomfortable, whether that's learning a new programming language or understanding a complex business domain. I bring curiosity, adaptability, and a knack for translating messy challenges into clean solutions.
            </p>
          </div>
          <div className="about-skills-2">
            <div className="about-skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>JavaScript </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>React Native </p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>Next JS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill"> <p>Node JS </p><hr style={{width: "60%"}}/></div>
            <div className="about-skill">
              <p>PostgreSQL </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill"> <p>Jest </p><hr style={{width: "60%"}}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
