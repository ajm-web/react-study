import * as React from "react";
import * as NumberInputStore from "./NumberInputStore";
import NumberButtonArea from "./NumberButtonAreaComponent";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";

export interface PushButton {
}

export interface PushButtonState {
  outputString: string;
}

export default class PushButtonComponent extends React.Component<PushButton, PushButtonState> {
constructor(props: PushButton) {
    super(props);

    this.state = { outputString: "0" };

    NumberInputStore.instance.subscribe(() => {
      const state = NumberInputStore.instance.getState();
      this.setState({ outputString: state.numberInputList.join(" ") });
    });
  }

  render() {
    return (
      <div>
        <AppBar title={"PushButton"} showMenuIconButton={false} />
        <TextField id={"result-area"} fullWidth={true} disabled={true} value={this.state.outputString} />
        <NumberButtonArea row={3} col={3}/>
      </div>
    );
  }
}
