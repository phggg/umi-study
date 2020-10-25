import React, {PureComponent} from 'react'

interface ITsState {
  text: object,
}

export default class ComponentOld extends PureComponent<any, ITsState>{

  // shouldComponentUpdate与PureComponent二选一即可
  // shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<ITsState>, nextContext: any): boolean {
  //   console.log(nextState)
  //   return false
  // }

  state = {
    text: {
      id: 1
    }
  }

  changeText: () => void = () => {
    this.setState({
      text: {id: 2}
    })
  }

  render() {
    const {text} = this.state
    console.log(this.props)
    return (
      <div onClick={() => this.changeText()}>
        component-old!!--{text.id}
      </div>
    )
  }
}
