import * as React from "react";
import * as ReactDom from "react-dom";
import PushButtonComponent from "./calculator/PushButtonComponent";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDom.render(
  <MuiThemeProvider>
    <PushButtonComponent/>
  </MuiThemeProvider>
  , document.getElementById("calculator")
);
