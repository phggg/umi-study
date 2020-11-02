import React, {Component} from 'react'
import {SearchBar} from 'antd-mobile'
import SearchContext from "./searchContext";

interface ITsProps {
  [propName: string]: any
}

interface ItsState {
  value: string
}

export default class Search extends Component<ITsProps, ItsState>{

  static contextType = SearchContext

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
    this.context.dispatch({
      type: 'TEXT',
      payload: this.state.value
    })

    this.context.dispatch({
      type: 'LISTS',
      payload: this.state.value
    })
  }

  render() {

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
