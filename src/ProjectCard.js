import React from "react";
import Typography from "@material-ui/core/Typography";
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
const ProjectCard = (props) => {
  return (
    <div
      className="projectCard__container"
      style={{
        padding: "2em",
        width: "30em",
        height: "46em",
      }}
    >
      <div style={{ height: "42em" }}>
        <div
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "auto",
            height: "10em",
          }}
        ></div>
        <Typography variant="h6" style={{ padding: "0.7rem 0" }}>
          {props.title}
        </Typography>
        <div
          style={{
            display: "grid",
            padding: "0 0 0.7rem 0",
          }}
        >
          <div style={{ display: "flex", padding: " 0 0 0.5rem 0" }}>
            <LinkOutlinedIcon style={{ margin: "-3px 0.3rem 0 0" }} />
            <a
              href={props.siteLink}
              target="blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="body2" className="animateUnderline">{props.siteLink}</Typography>
            </a>
          </div>
          <div style={{ display: "flex" }}>
            <GitHubIcon style={{ margin: "-3px 0.3rem 0 0" }} />
            <a
              href={props.gitLink}
              target="blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: "inherit" }}
            >
            <Typography variant="body2" className="animateUnderline">{props.gitLink}</Typography>
            </a>
          </div>
        </div>
        <div style={{height:'11rem', overflowY:'scroll', textAlign:'justify'}}>
        <Typography variant="body1" style={{ padding: "0 0 0.5rem 0" }}>
          {props.description}
        </Typography>
        </div>
        <div style={{margin:'auto'}}>
        <img src={props.stack1} className="stackImage" />
        <img src={props.stack2} className="stackImage" />
        <img src={props.stack3} className="stackImage" />
        <img src={props.stack4} className="stackImage" />
        <img src={props.stack5} className="stackImageBottom" />
        <img src={props.stack6} className="stackImageBottom" />
        <img src={props.stack7} className="stackImageBottom" />
        <img src={props.stack8} className="stackImageBottom" />
        </div> 
      </div>
    </div>
  );
};

export default ProjectCard;
