import React, { useEffect, useContext } from "react";
import AppContext from "./AppContext";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProjectCard from "./ProjectCard";
import bookSearch from "./images/bookSearch-min.png";
import Asylum from "./images/Asylum-min.png";
import Fitness from "./images/fitness.png";
import Unsplash from "./images/unsplash.png";
import Diving from "./images/diving-project-min.png";
import Weather from "./images/weather.png";
import WebDev from "./images/web-dev.png";
import GymScraping from "./images/gym-scraping.png";
import htmlLogo from "./images/html-logo.png";
import cssLogo from "./images/css-logo.png";
import jsLogo from "./images/js-logo.png";
import reactLogo from "./images/react-logo.png";
import expressLogo from "./images/express-logo.png";
import mongoLogo from "./images/mongo-logo.png";
import nodeLogo from "./images/node-logo.png";
import npmLogo from "./images/npm-logo.png";

const stackArr = [
  htmlLogo,
  cssLogo,
  jsLogo,
  reactLogo,
  npmLogo,
  expressLogo,
  mongoLogo,
  nodeLogo,
];

const Portfolio = () => {
  const [globalState, setGlobalState] = useContext(AppContext);
  useEffect(() => {
    setGlobalState({ ...globalState, active: "portfolio" });
  }, []);

  return (
    <Box bgcolor="primary.main" style={{ paddingBottom: "4rem" }}>
      <div className="top__distance">
        <Typography
          variant="h2"
          style={{ marginBottom: "1rem", fontWeight: "bold" }}
        >
          Portfolio
        </Typography>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          For more details about the projects, please view the ReadMe file in a
          corresponding GitHub repository.
        </Typography>
      </div>
      <div className="portfolio__grid">
        <ProjectCard
          image={Asylum}
          title="Gaming Community Website"
          siteLink="https://www.asylum669.com"
          gitLink="https://github.com/Nokrei/asylum-community"
          description="This is my first commission project – a website for a Gaming Community. Both the design and development were done fully by me. The requirements for the app were that it was supposed to be attention grabbing, have a decent number of animations and perform best on PC screens. Most of the animations are done with the use of CSS (SASS) keyframes. I am importing React Spring, but after playing around with it I decided to use it only for simple fade-in and out transitions. The 3d animation of the eye in approve screen is done with the help of react-use-rect to get the position and dimensions of the element, then Rotate X and rotate Y are being set accordingly to cursor movement, with a fixed perspective of 100px. The eye grows and shrinks depending on mouse wheel movement, and after the element reaches a desired size (scale) - circle animations are triggered. The opacity of on the main screen is controlled with scroll, the sliders are made with infinite-react-carousel (it took a while to customize it), the ‘movement’ of staff cards in and out of the viewport is achieved with the help of react-intersection-observer – value of translate X is being set to 0 when component enters the viewport, with a transition duration of 1s. The mobile version was not a primary focus but has all the functionality – except the eye animation in approve screen. The mobile hamburger menu is made with the use of react-burger-menu."
          stack1={stackArr[0]}
          stack2={stackArr[1]}
          stack3={stackArr[2]}
          stack4={stackArr[3]}
          stack5={stackArr[4]}
        />
        <ProjectCard
          image={Unsplash}
          title="Image Search App"
          siteLink="https://react-unsplash-app.netlify.app/"
          gitLink="https://github.com/Nokrei/react-unsplash-app"
          description="An image search web application. It uses the Unsplash API to display images searched by the user. Infinite scrolling is achieved via the implementation of a custom React hook, the layout and loading-in animation by the use of the StackGrid library. Number of searches limited due to using the free variant of the Unsplash API."
          stack1={stackArr[0]}
          stack2={stackArr[1]}
          stack3={stackArr[2]}
          stack4={stackArr[3]}
          stack5={stackArr[4]}
        />

        <ProjectCard
          image={Diving}
          title="Diving Center Site"
          siteLink="https://diving-project-front.herokuapp.com/"
          gitLink="https://github.com/Nokrei/dive-center-front"
          description="The final team project for my full-stack coding bootcamp. It is a diving center website, connected to multiple databases - courses, users, blog posts. For the front-end it uses ReactJS, some bootstrap, material UI, and plain CSS. Back-end is done via NodeJS(Express). It uses Mongoose to connect to the MongoDB database. Users can register, log in and update their profiles. We had little time to complete the project - hence many features are missing, and the styling is not complete. Some features like the blog and ability to add new posts (by admin user) have been added by me after the project had been handed in. Note the site takes a while to initially load as Heroku(hosting) 'puts it to sleep' when not being frequently accessed."
          stack1={stackArr[0]}
          stack2={stackArr[1]}
          stack3={stackArr[2]}
          stack4={stackArr[3]}
          stack5={stackArr[4]}
          stack6={stackArr[5]}
          stack7={stackArr[6]}
          stack8={stackArr[7]}
        />
        <ProjectCard
          image={Fitness}
          title="Fitness App"
          siteLink="https://nok-fitness.netlify.app/"
          gitLink="https://github.com/Nokrei/fitness"
          description="A Fitness Application. It is composed of a variety of fitness calculators such as BMI, BMR, Body Fat Percentage. The user can also calculate calories spent during exercise and meal macronutrients.
          I made the App using ReactJS, majority of the styling is done with the use of Material UI. The responsiveness is executed via a custom hook."
          stack1={stackArr[0]}
          stack2={stackArr[1]}
          stack3={stackArr[2]}
          stack4={stackArr[3]}
          stack5={stackArr[4]}
        />
        <ProjectCard
          image={GymScraping}
          title="Gym Price Comparison"
          siteLink="https://gym-scraping-front.herokuapp.com/"
          gitLink="https://github.com/Nokrei/gym-scrapig-back"
          description="The app doesn't look too impressive - just showing a few gyms sorted by price, but it's more of a proof of concept. I made it in three days. The backend first connects to the database, 
          then all existing product entries are deleted (I don't want previous data stored, as the app is supposed to display the recent prices) then Axios and Cheerio are used to scrape through a list of gym websites for prices and store them in the database. 
          As for the front-end - Using fetch API to get data from backend, storing it in a state variable (array), then sorting by price. 
          Some regex is used to shorten the sites' names and conditional rendering to display progress loader or data. 
          A bit of styling with Material UI and inline CSS and one line in an external CSS file for hover effect. Note that the app may take a while to load - using free versions of Heroku and MongoDB"
          stack1={stackArr[0]}
          stack2={stackArr[1]}
          stack3={stackArr[2]}
          stack4={stackArr[3]}
          stack5={stackArr[4]}
          stack6={stackArr[5]}
          stack7={stackArr[6]}
          stack8={stackArr[7]}
        />
        <ProjectCard
          image={WebDev}
          title="Personal Site"
          siteLink="https://nokhouse.netlify.app/"
          gitLink="https://github.com/Nokrei/portfolio"
          description="My former personal – portfolio application. What started as a site where I could showcase my work somewhat developed into my playground for new ideas. The hiding of the navbar on scroll is executed via a custom hook, the animation in the top section is an effect of using react-particles-js (custom configured). I have incorporated react-lazyload for the stats page (section below about) and a custom use-interval hook so that the numbers grow on the user’s screen when they arrive at that section. The ‘contact’ part of the page makes use of emailJS, which allows the user to send email messages to me from the level of the app. Validation (utils.js) is in place to ensure a massage is sent only when valid data is entered, and the user is notified of the result upon clicking the Submit button. Vast majority of the styling is done via CSS in an external file. Admittedly the fact that I kept adding new ideas and testing concepts led to the code of this application to being rather inelegant – especially the CSS portion. A notable improvement can be observed in my more recent work. "
          stack1={stackArr[0]}
          stack2={stackArr[1]}
          stack3={stackArr[2]}
          stack4={stackArr[3]}
          stack5={stackArr[4]}
        />
        <ProjectCard
          image={Weather}
          title="Weather App"
          siteLink="https://pm-react-weather-app.netlify.app/"
          gitLink="https://github.com/Nokrei/react-weather-app"
          description="A weather web application. Initially it uses the locationiq API to detect user's position and display the weather for that location. It also uses the openweather API to display the weather forecast for any location searched by the user. Number of searches limited due to using free variants of the APIs."
          stack1={stackArr[0]}
          stack2={stackArr[1]}
          stack3={stackArr[2]}
          stack4={stackArr[3]}
          stack5={stackArr[4]}
        />
      </div>
    </Box>
  );
};

export default Portfolio;
