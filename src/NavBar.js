import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navbar = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar style={{display:'flex', }}>
            <div style={{ display: "grid", justifyItems: "center",  }}>
              <Typography variant="h5" >Piotr Mrozowski</Typography>
              <Typography variant="h5">Web Developer</Typography>
            </div>
            <div>
              <Typography variant="h6">
                <ul
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr ",
                    justifyItems: "center",
                    marginLeft:'7.3rem'
                  }}
                >
                  {props.links.map((entry, index) => (
                    <li
                      style={{ display: "block" }}
                      key={index}
                      className="topNav__links"
                    >
                      <Link
                        className="nav-link"
                        to={entry.path}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          padding: "1em",
                        }}
                      >
                        {entry.label}
                      </Link>
                    </li>
                  ))}
                  
                </ul>
                
              </Typography>
              
            </div>
            
            <Typography variant='body1' style={{flex:'1', textAlign:'right'}} >
            Dark mode ON / OFF         
            </Typography>
            
            
            
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;
