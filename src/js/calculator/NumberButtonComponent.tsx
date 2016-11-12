import * as React from 'react';
import RaisedButton from "material-ui/RaisedButton";

export interface NumberButton {
    buttonNumber: number
}

export default class NumberButtonComponent extends React.Component<NumberButton, {}> {
constructor(props: NumberButton) {
    super(props);
    }
    Test(){
        alert("test");
    }
    render() {
        const style = {
            height: 50
        };
        return (
            <RaisedButton label={this.props.buttonNumber} fullWidth={true} onClick={this.Test} style={style}/>
        );
    }
}