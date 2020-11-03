import React, {Component} from 'react';
import Search from './search'
import Lists from './lists'
import {connect} from 'dva'
import {ITsSearch} from '@/types/index'

interface ITsProps {
  search: ITsSearch
}

interface ITsDvaState {
  search: ITsSearch
}

@connect((state: ITsDvaState) => (
  {search: state.search}
))
class Dva extends Component<ITsProps, any> {

  render() {
    return (
      <div>
        <Search
          {...this.props}
        />
        <Lists
          {...this.props}
        />
      </div>
    );
  }
}

export default Dva
