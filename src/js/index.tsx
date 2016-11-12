import * as React from 'react';
import * as ReactDom from 'react-dom';
import HelloComponent from './calculator/Hello';
import PushButtonComponent from './calculator/PushButtonComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDom.render(
  <MuiThemeProvider>
    <HelloComponent content={'Hello World!'}/>
  </MuiThemeProvider>
  , document.getElementById('calculator')
);