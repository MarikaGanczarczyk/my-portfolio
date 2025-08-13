import "./About.css";

import MyPic from "../../assets/MyPic.svg";

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
              I’ve completed an intensive software development bootcamp, gaining
              hands-on experience in JavaScript, React, Node.js, PostgreSQL, and
              agile teamwork.
            </p>
            <p>
              {" "}
              I enjoy solving problems, creating clean and responsive web
              applications, and combining analytical thinking with creativity to
              deliver user-friendly solutions. Known for my adaptability,
              initiative, and collaborative spirit, I’m excited to keep learning
              and contribute to meaningful projects in the tech world.
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
