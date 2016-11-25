import * as React from "react";
import * as range from "lodash/range";
import NumberButtonComponent from "./NumberButtonComponent";
import {GridList, GridTile} from "material-ui/GridList";

export interface NumberButtonArea {
  row: number;
  col: number;
}

export default class NumberButtonAreaComponent extends React.Component<NumberButtonArea, {}> {
constructor(props: NumberButtonArea) {
  super(props);
  }

  countButton() {
    return this.props.row * this.props.col + 1;
  }

  get numberButtons() {
    const button: number = this.countButton();
    return range(1, button, 1);
  }

  render() {
    const buttons = this.numberButtons.map(function(buttonNumber){
      return(
        <GridTile cols={1} key={buttonNumber.toString()} ><NumberButtonComponent buttonNumber={buttonNumber} /></GridTile>
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
