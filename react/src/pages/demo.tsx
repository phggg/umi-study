import React, {Component, ReactElement, ReactNode, ComponentType} from 'react';
import {withRouter} from 'umi'

interface ITsState {
  [propName: string]: any
}

interface ITsProps {
  [propName: string]: any
}

const foo: any = (Cmp: ComponentType) => (props: any) => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  );
};

function Component1<T extends { new(...args: any[]): any }>(component: T) { // 泛型限定
  return class extends component {
    handleClick() { // 劫持onClick
      super.handleClick()
      console.log('child clicked');
    }
    render() {
      const parent = super.render()
      // 劫持onClick
      return React.cloneElement(parent, { onClick: this.handleClick })
    }
  }
}

function foo1<T extends { new(...args: any[]): any }>(Cmp: T) {
  return class extends Cmp {
    render() {
      const parent = super.render()
      return (
        <div className={'init'}>
          {parent}
        </div>
      )
    }
  }
}

@foo
class Demo extends Component<ITsState,ITsProps> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        demo
      </div>
    );
  }
}

export default Demo;
