import React, { useEffect, useState, useContext } from "react";
import AppContext from "./AppContext";
import useWindowDimensions from "./useWindowDimensions";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Personal from "./images/personal.png";
const About = () => {
  const [globalState, setGlobalState] = useContext(AppContext);
  useEffect(() => {
    setGlobalState({ ...globalState, active: "about" });
  }, []);
  const { width } = useWindowDimensions();

  const [aboutClass, setAboutClass] = useState("aboutWide");

  useEffect(() => {
    if (width >= 1601) {
      setAboutClass("aboutWide");
    }else if (width < 1601 && width >= 900) {
      setAboutClass("aboutNarrow");
    } else if (width < 900) {
      setAboutClass("aboutMobile");
    }
  }, [width]);

  return (
    <Box bgcolor="primary.main">
      <div style={{ paddingBottom: "4rem" }}>
        <div style={{ margin: "8rem 0 4rem 0", textAlign: "center" }}>
          <Typography variant="h2" style={{ marginBottom: "1rem" }}>
            About
          </Typography>
        </div>
        <div className={aboutClass}>
          <Typography
            variant="body1"
            style={{ maxWidth: "29rem", textAlign: "justify" }}
          >
            I am a web developer focusing mainly on the front-end, however I
            have the ability to deliver full stack applications as well. A large
            part of my professional career revolved around IT, but it is in web
            development where I found my true passion and calling. Have a
            project you would like to discuss? Feel free to contact me on &nbsp;
            <a
              className="animateUnderline"
              href="https://www.linkedin.com/in/piotr-mrozowski-26ab03198/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              className="animateUnderline"
              href="mailto:pmrozowski87@gmail.com"
            >
              email me
            </a>{" "}
          </Typography>
          <div
            style={{
              backgroundImage: `url(${Personal})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxWidth:'auto',
              minWidth:'10rem',
              minHeight:'15rem',
              maxHeight:'auto'
            }}
          ></div>
        </div>
      </div>
    </Box>
  );
};

export default About;
