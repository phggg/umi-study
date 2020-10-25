import React, {Component} from "react";
import ListItem1 from "@/pages/class/list-item1";

export default class Lists extends Component<any, any>{

  handleChild = (item) => {
    console.log(item)
  }

  render() {
    return (
      <div>
        <ListItem1
          name={'123'}
          handleItem={this.handleChild}
        />
      </div>
    )
  }

}
