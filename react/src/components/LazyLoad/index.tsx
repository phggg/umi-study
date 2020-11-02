import React, {Component, lazy, Suspense} from 'react';

interface ITsProps {
  component: React.Component,
  delay: number
}

export default class Index extends Component<ITsProps, any> {

  _renderLazy = () => {
    let Lazy
    const {component, delay} = this.props
  }

  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}></Suspense>
      </div>
    );
  }
}
