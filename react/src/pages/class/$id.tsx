import React, {Component} from 'react'

interface ITsIdProps {
  match: {
    params: {
      id: string
    }
  }
}

export default class Id extends Component<ITsIdProps, any>{
  render() {
    return (
      <h1>id-{this.props.match.params.id}</h1>
    )
  }
}
