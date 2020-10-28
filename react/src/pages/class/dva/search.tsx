import React, {Component} from 'react'
import {SearchBar} from 'antd-mobile'

interface ITsProps {
  [propName: string]: any
}

interface ItsState {
  value: string
}

export default class Search extends Component<ITsProps, ItsState>{

  constructor(props: ITsProps) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange: (value: string) => void = (value) => {
    this.setState({
      value
    })
  }

  handleSubmit: () => void = () => {
    const { value } = this.state
    this.props.dispatch({
      type: 'search/getListAsync',
      payload: this.state.value
    })
  }

  render() {
    console.log(this.props)

    const { value } = this.state

    return (
      <div>
        <SearchBar
          autoFocus
          value={value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
