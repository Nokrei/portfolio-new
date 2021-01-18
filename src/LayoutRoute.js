import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import Box from '@material-ui/core/Box';
import NavBar from "./NavBar";
import BottomNavBar from './BottomNavBar'
import ToTop from './ToTop';
import useWindowDimensions from './useWindowDimensions'
const LayoutRoute = (props) => {
  const { width } = useWindowDimensions();

  const [browser, setBrowser] = useState(true);

  useEffect(() => {
    if (width >=770){
      setBrowser(true)
    }else if (width < 770){
      setBrowser(false)
    }
  }, [width]);
  return (
    <Box bgcolor='primary.main' style={{height:'100%'}}>
      <div id="top"></div>
      {browser && <NavBar 
        links={[
          { label: "Portfolio", path: "portfolio" },
          { label: "About", path: "about" },
          { label: "Contact", path: "contact" },
        ]}
      /> }
      {!browser && <BottomNavBar
      links={[
        { label: "Portfolio", path: "portfolio" },
        { label: "About", path: "about" },
        { label: "Contact", path: "contact" },
      ]}
      />}

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
