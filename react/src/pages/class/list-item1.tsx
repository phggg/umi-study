import React, {Component} from "react";
import PropTypes from 'prop-types'

interface ITsProps {
  name?: string,
}

export default class ListItem1 extends Component<ITsProps, any>{

  static defaultProps = {
    name: 'item1'
  }

  static propTypes = {
    name: PropTypes.string,
    handleItem: PropTypes.func
  }

  handleClick = () => {
    this.props.handleItem('item1')
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>item1 -- {this.props.name}</h1>
      </div>
    )
  }

}
