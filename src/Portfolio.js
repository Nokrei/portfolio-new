import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useWindowDimensions from "./useWindowDimensions";
import ProjectCard from "./ProjectCard";
import bookSearch from "./images/bookSearch.png";
import Fitness from "./images/fitness.png";
import Unsplash from "./images/unsplash.png";
import Diving from "./images/diving-project.png";
import Weather from "./images/weather.png";
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
  const { width } = useWindowDimensions();

  const [gridTemplate, setGridTemplate] = useState("gridWide");

  useEffect(() => {
    if (width >= 1120) {
      setGridTemplate("gridWide");
    } else if (width < 1120 && width >= 770) {
      setGridTemplate("gridNarrow");
    }
    else if (width < 770) {
      setGridTemplate("gridMobile");
    }
  }, [width]);
  return (
    <Box bgcolor="primary.main" style={{ paddingBottom: "4rem" }}>
      <div style={{ margin: "8rem 0 4rem 0", textAlign: "center" }}>
        <Typography variant="h2" style={{ marginBottom: "1rem" }}>
          Portfolio
        </Typography>
        <Typography variant="body1" style={{ textAlign: "center" }}>
          For more detailed descriptions of the projects, please view the ReadMe
          file in a corresponding GitHub repository.
        </Typography>
      </div>

      <div className={gridTemplate}>
        <ProjectCard
          image={bookSearch}
          title="Book Search App"
          siteLink="https://pm-goodreads-app.netlify.app/"
          gitLink="https://github.com/Nokrei/good-reads-app"
          description="A Book search application.The user can search by title, author or ISBN. 
          They can then click on the author's name and go to the writer's details page, where 
          they can also see all the author's books.
          The Goodreads API powering the search gave me some problems - 
          the response is in XML so I had to parse it to JSON, they do not include the CORS header 
          in ANY of their API calls, so I had to route the request through cors-anywhere.herokuapp, 
          and it has a rate limit of one request per second, that's why I didn't make the results 
          load with every key stroke, also I have spent about half a day in total resetting the 
          API key, and waiting for it to let me use it again - been getting the 429 error a lot 
          while testing calls."
          stack1={stackArr[0]}
          stack2={stackArr[1]}
          stack3={stackArr[2]}
          stack4={stackArr[3]}
          stack5={stackArr[4]}
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
          image={Diving}
          title="Diving Center Site"
          siteLink="https://diving-project-front.herokuapp.com/"
          gitLink="https://github.com/Nokrei/dive-center-front"
          description="The final team project for my full-stack coding bootcamp."
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
          image={Unsplash}
          title="Image Search App"
          siteLink="https://react-unsplash-app.netlify.app/"
          gitLink="https://github.com/Nokrei/react-unsplash-app"
          description="An image search web application. It uses the Unsplash API to display imagaes searched by the user. Infinite scrolling is acheved via the implementation of a custom React hook, the layout and loading-in animation by the use of the StackGrid library. Number of searches limited due to using the free variant of the Unsplash API."
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
