import React, {Component} from 'react';
import {List} from 'antd-mobile'
import {ITsSearch} from '@/types'
import SearchContext from "./searchContext";


interface ItsProps {
  search: ITsSearch
}

export default class Lists extends Component<any, any> {

  static contextType = SearchContext

  componentDidMount() {
    console.log(this.props)
  }

  render() {

    const {text, lists} : {text: string, lists: string[]} = this.context.state

    return (
      <div>
        <h1>text: {text}</h1>
        <List>
          {
            lists.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))
          }
        </List>
      </div>
    );
  }
}
