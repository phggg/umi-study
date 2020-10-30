import React, {Component} from 'react';
import SearchContext from './searchContext'
import Search from "./search";
import Lists from './lists'
import {getLists} from '@/service/search'
import Consumer from "@/pages/class/context/consumer";

interface ITsProps {
  [propName: string] : any
}


interface ITsState {
  text: string,
  lists: string[]
}

export default class Index extends Component<ITsProps,ITsState> {

  constructor(props: ITsProps | Readonly<ITsProps>) {
    super(props);
    this.state = {
      text: '',
      lists: []
    }
  }

  handleDispatch = async ({type, payload}: {type: string, payload: string}) => {
    switch (type) {
      case 'TEXT':
        return this.setState({
          text: payload
        })
      case 'LISTS':
        const res = await getLists(payload)
        return this.setState({
          lists: res.lists
        })
    }
  }

  render() {
    return (
      <div>
        <SearchContext.Provider
          value={{
            state: this.state,
            dispatch: this.handleDispatch
          }}
        >
          <Search />
          <Lists />
          <Consumer />
        </SearchContext.Provider>
      </div>
    );
  }
}

