import React, { useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import LayoutRoute from "./LayoutRoute";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, red, orange, green, grey } from "@material-ui/core/colors";
import "./App.css";
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact'
function App() {
  const [globalState, setGlobalState] = useState({
    mode: "light",
    on: "off",
    fontSize: 18,
  });
  const theTheme = createMuiTheme({
    typography: {
      htmlFontSize: globalState.fontSize,
    },
    palette: {
      type: globalState.mode,
      primary: {
        main: grey[200],
      },
    },
  });
  return (
    <ThemeProvider theme={theTheme}>
      <AppContext.Provider value={[globalState, setGlobalState]}>
        <BrowserRouter>
          <Switch>
            <LayoutRoute path="/" exact={true} component={Portfolio} />
            <LayoutRoute path="/portfolio" exact={true} component={Portfolio} />
            <LayoutRoute path="/about" exact={true} component={About} />
            <LayoutRoute path="/contact" exact={true} component={Contact} />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
