import React, { useState } from "react";
import AppContext from "./AppContext";
import { HashRouter, Switch } from "react-router-dom";
import LayoutRoute from "./LayoutRoute";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import "./App.css";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [globalState, setGlobalState] = useState({
    mode: "light",
    on: "off",
    fontSize: 18,
    active: "",
  });
  const theTheme = createMuiTheme({
    typography: {
      htmlFontSize: globalState.fontSize,
    },
    palette: {
      type: globalState.mode,
      primary: {
        main: grey[100],
      },
      secondary: {
        main: grey[100],
      },
    },
  });
  return (
    <ThemeProvider theme={theTheme}>
      <AppContext.Provider value={[globalState, setGlobalState]}>
        <HashRouter>
          <Switch>
            <LayoutRoute path="/" exact={true} component={Portfolio} />
            <LayoutRoute path="/portfolio" exact={true} component={Portfolio} />
            <LayoutRoute path="/about" exact={true} component={About} />
            <LayoutRoute path="/contact" exact={true} component={Contact} />
          </Switch>
        </HashRouter>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
