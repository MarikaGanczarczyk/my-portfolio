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
             
            </p>
            <p>
              {" "}
                    My coding journey started some time ago, when I began experimenting with self-learning through various online platforms. I enjoyed exploring the basics, but it wasn’t until I joined a bootcamp and built my first project that I truly fell in love with programming.

I loved that every day brought something new to learn, that I was never bored with what I was doing, and the pride I felt when I solved a problem I’d been stuck on for hours or saw my code run successfully. For me, coding isn’t just a job – it’s a way of life. It’s about constant self-development, discovering new technologies, meeting new people, and expanding my skills.

I’m grateful to have found something I genuinely enjoy and want to dedicate my career to. Now, I’m ready to begin the adventure of a lifetime as a Software Developer.
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
