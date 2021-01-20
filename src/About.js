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
    }  else if (width < 1025) {
      setAboutClass("aboutMobile");
    }
  }, [width]);

  return (
    <Box bgcolor="primary.main">
      <div style={{ paddingBottom: "4rem" }}>
        <div style={{ margin: "8rem 0 4rem 0", textAlign: "center" }}>
          <Typography
            variant="h2"
            style={{ marginBottom: "1rem", fontWeight: "bold" }}
          >
            About
          </Typography>
        </div>

        <div className={aboutClass}>
        <div
          // style={{
          //   backgroundImage: `url(${Personal})`,
          //   backgroundPosition: "center center",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   width:'20vh',
          //   height:'10vw'
          // }}
          >
            <img
              src={Personal}
              style={{ width: "10rem", height: "10rem", borderRadius: "100%" }}
            />
          </div>
          <Typography variant="h6" style={{ textAlign: "justify" }}>
            I am a web developer focusing mainly on the front-end, however I
            have the ability to deliver full stack applications as well. A large
            part of my professional career revolved around IT, but it is in web
            development where I found my true passion and calling.<br/><br/> My tech
            stack is HTML5, CSS3, JavaScript ES6+, ReactJS, NodeJS (Express),
            MongoDB(Mongoose). I have experience using Version Control Systems
            (GIT) and Package Managers (NPM). In my projects I practice the
            principles of Responsive Web Design, Mobile First Design and I
            follow the BEM methodology.<br/><br/> I am open to both full time positions and
            freelance opportunities. <br/><br/>If Interested - contact me on &nbsp;
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
              href="https://github.com/Nokrei"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
            , or{" "}
            <a
              className="animateUnderline"
              href="mailto:pmrozowski87@gmail.com"
            >
              email me
            </a>
            .{" "}
          </Typography>
          
        </div>
      </div>
    </Box>
  );
};

export default About;
