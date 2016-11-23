import * as React from 'react';
import NumberButtonArea from "./NumberButtonAreaComponent"
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";

export interface PushButton {
}

export default class PushButtonComponent extends React.Component<PushButton, {}> {
constructor(props: PushButton) {
    super(props);
  }
  render() {
    return (
      <div>
        <AppBar title={"PushButton"} showMenuIconButton={false} />
        <TextField id={"result-area"} fullWidth={true} disabled={true} />
        <NumberButtonArea row={3} col={3}/>
      </div>
    );
  }
}