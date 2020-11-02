import React, {Component} from 'react';
import Search from './search'
interface ITsProps {
  [propName: string]: any
}
class Dva extends Component<ITsProps,any> {
  render() {
    return (
      <div>
        <Search
          {...this.props}
        />
      </div>
    );
  }
}

export default Dva;
