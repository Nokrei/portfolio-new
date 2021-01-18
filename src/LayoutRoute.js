import React from "react";
import { Route } from "react-router-dom";
import Box from '@material-ui/core/Box';
import NavBar from "./NavBar";
import ToTop from './ToTop';
import useWindowDimensions from './useWindowDimensions'
const LayoutRoute = (props) => {
  return (
    <Box bgcolor='primary.main' style={{height:'100%'}}>
      <div id="top"></div>
      <NavBar 
        links={[
          { label: "Portfolio", path: "portfolio" },
          { label: "About", path: "about" },
          { label: "Contact", path: "contact" },
        ]}
      />

      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
      <ToTop/>
    </Box>
  );
};

export default LayoutRoute;
