import * as React from 'react';
import {range} from "lodash";
import NumberButtonComponent from "./NumberButtonComponent"
import {GridList, GridTile} from "material-ui/GridList";

export interface ButtonRow {
    row: number;
    col: number;
}

export default class ButtonRowComponent extends React.Component<ButtonRow, {}> {
constructor(props: ButtonRow) {
    super(props);
    }
    
    countButton(){
        return this.props.row * this.props.col + 1;
    }
    
    get numberButtons() {
        var button :number = this.countButton();
        return range(1, button, 1);
    }
    
    render() {
        var buttons = this.numberButtons.map(function(buttonNumber){
            return(
                <GridTile cols={1}><NumberButtonComponent buttonNumber={buttonNumber} key={buttonNumber} /></GridTile>
            );
        });
        return (
            <div>
                <GridList cols={this.props.col} cellHeight={60}>
                    {buttons}
                </GridList>
            </div>
        );
    }
}