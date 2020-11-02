import React, {Component} from 'react';
import {List} from 'antd-mobile'
import {ITsSearch} from '@/types'

interface ItsProps {
  search: ITsSearch
}

class Lists extends Component<ItsProps, any> {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const {text,lists} = this.props.search
    return (
      <div>
        <h1>text: {text}</h1>
        <List>
          {
            lists.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))
          }
          <List.Item></List.Item>
        </List>
      </div>
    );
  }
}

export default Lists;
