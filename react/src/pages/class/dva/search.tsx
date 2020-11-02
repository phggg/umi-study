import React, {Component} from 'react';
import { SearchBar } from 'antd-mobile'

interface ITsProps {
  [propName: string]: any
}

interface ITsState {
  value: string
}

class Search extends Component<ITsProps,ITsState> {

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
    alert()
  }

  render() {

    const {value} = this.state

    return (
      <div>
        <SearchBar
          autoFocus
          value={value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Search;
