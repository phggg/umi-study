import React, {Component, lazy, Suspense} from 'react';

interface ITsProps {
  component: any,
  delay?: number
}

export default class Index extends Component<ITsProps, any> {

  _renderLazy = () => {
    let Lazy
    const {component, delay, ...other} = this.props

    if(!component || component.constructor.name !== 'Promise'){
      Lazy = import('./error')
    }

    Lazy = lazy(() => new Promise<any>(resolve => {
      setTimeout(() => {
        resolve(component)
      }, delay || 300)
    }))

    return <Lazy {...other}/>
  }

  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          {this._renderLazy()}
        </Suspense>
      </div>
    );
  }
}
