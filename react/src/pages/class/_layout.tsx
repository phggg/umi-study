import React, {Component} from 'react'

export default class Layout extends Component<any, any>{
  render() {
    return (
      <div>
        <h1>class header!!!!!</h1>
        {this.props.children}
      </div>
    )
  }
}
