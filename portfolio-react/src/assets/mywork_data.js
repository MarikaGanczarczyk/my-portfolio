import project1_img from "../assets/project_one.svg";
import project2_img from "../assets/project_two.svg";
import project3_img from "../assets/project_three.png";
import project4_img from "../assets/project_weather2.png";
import project5_img from "../assets/project_four.svg";
import project6_img from "../assets/project_four.svg";

const mywork_data = [
   {
    w_no: 1,
    w_name: "Weather Forecast",
    w_img: project4_img,
    description:
      "Weather Live Forecast is a simple and responsive weather application built with React and CSS. It uses a public Weather API to fetch live weather data for the selected city — showing both the current weather and a 7-day forecast.",
    liveLink: "https://weather-live-a.netlify.app/",
    githubLink: "https://github.com/MarikaGanczarczyk/weather-app",
  },

  {
    w_no: 2,
    title: "NC-News",
    w_img: project2_img,
    description:
      "This is the front-end application for a full-stack news platform, designed to display and interact with articles, topics, and user comments. Users can browse articles by topic, view full article content, upvote articles, and post/delete comments (if logged in).Built using React, this responsive single-page application consumes data from a RESTful API built in the back end.",
    liveLink: "https://marika-ganczarczyk-nc-news.netlify.app/home",
    githubLink: "https://github.com/MarikaGanczarczyk/NC-News-FE.git",
  },
    {
    w_no: 3,
    title: "Memory Game",
    w_img: project1_img,
    description:
      "An interactive memory matching game built with React : flip the cards, find matching pairs, and challenge your focus! Built with React (Hooks) and modern JavaScript, styled with CSS Modules, and powered by Vite / Create React App.",
    liveLink: "https://memory-game-magic.netlify.app/",
    githubLink: "https://github.com/MarikaGanczarczyk/memory-game.git",
  },
  {
    w_no: 4,
    title: "My Portfolio",
    w_img: project3_img,
    description:
      "This portfolio was built with React to showcase my projects and skills as a front-end developer. It features a clean and responsive design, smooth navigation, and reusable components that make it easy to expand with new projects. By using React (with hooks) and modern JavaScript, I focused on creating an interactive, fast, and user-friendly experience that reflects both my technical skills and design approach.",
    liveLink: "https://marika-ganczarczyk.netlify.app/",
    githubLink: "https://github.com/MarikaGanczarczyk/my-portfolio.git",
  },
 
  {
    w_no: 5,
    w_name: "Web design",
    w_img: project5_img,
  },
  {
    w_no: 6,
    w_name: "Web design",
    w_img: project6_img,
  },
];

export default mywork_data;
