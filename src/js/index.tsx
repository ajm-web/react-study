import * as React from 'react';
import * as ReactDom from 'react-dom';
import HelloComponent from './hello/Hello';

ReactDom.render(
  <HelloComponent content={'Hello World!'}/>
  , document.getElementById('hello')
);