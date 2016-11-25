import * as React from "react";
import * as NumberInputActions from "./NumberInputActions";
import * as NumberInputStore from "./NumberInputStore";
import RaisedButton from "material-ui/RaisedButton";

export interface NumberButton {
    buttonNumber: number;
}

export default class NumberButtonComponent extends React.Component<NumberButton, {}> {
constructor(props: NumberButton) {
    super(props);
    }
    Test(buttonNumber: number) {
        NumberInputStore.instance.dispatch({ type: NumberInputActions.ActionType.Push, payload: String(buttonNumber) });
    }
    render() {
        const style = {
            height: 50
        };
        return (
            <RaisedButton label={this.props.buttonNumber} fullWidth={true} onClick={() => this.Test(this.props.buttonNumber)} style={style}/>
        );
    }
}
