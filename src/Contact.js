import React, {useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
import useWindowDimensions from "./useWindowDimensions";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const Contact = () => {
  const [globalState, setGlobalState] = useContext(AppContext);
  useEffect(() => {
    setGlobalState({ ...globalState, active: "contact" });
  }, []);
  const { width } = useWindowDimensions();
  const [topDistance, setTopDistance] = useState("topDistanceWide");
  useEffect(() => {
    if (width >= 1601) {
      setTopDistance("topDistanceWide");
    } else if (width < 1025) {
      setTopDistance("topDistanceMobile");
    }
  }, [width]);
  return (
    <Box bgcolor="primary.main">
      <div style={{ paddingBottom: "4rem", display: "grid" }}>
        <div className={topDistance} style={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            style={{ marginBottom: "1rem", fontWeight: "bold" }}
          >
            Contact
          </Typography>
          <Typography variant="h6">
            Interested? Contact me via the following:
          </Typography>
        </div>
        <div
          style={{
            maxWidth: "30rem",
            display: "grid",
            margin: "auto",
            rowGap: "1rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <EmailOutlinedIcon />
            <Typography style={{ marginLeft: "0.2rem" }} variant="body1">
              {" "}
              <a
                className="animateUnderline"
                href="mailto:pmrozowski87@gmail.com"
              >
                pmrozowski87@gmail.com{" "}
              </a>
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <LinkedInIcon />
            <Typography style={{ marginLeft: "0.2rem" }} variant="body1">
              <a
                className="animateUnderline"
                href="https://www.linkedin.com/in/piotr-mrozowski-26ab03198/"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://www.linkedin.com/in/piotr-mrozowski-26ab03198/{" "}
              </a>
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <GitHubIcon />
            <Typography style={{ marginLeft: "0.2rem" }} variant="body1">
              <a
                className="animateUnderline"
                href="https://github.com/Nokrei"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/Nokrei
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Contact;
