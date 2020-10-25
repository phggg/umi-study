import React, {PureComponent} from 'react'

interface ITsState {
  text: string,
}

export default class ComponentNew extends PureComponent<any, ITsState>{

  // shouldComponentUpdate与PureComponent二选一即可
  // shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<ITsState>, nextContext: any): boolean {
  //   console.log(nextState)
  //   return false
  // }

  // static getDerivedStateFromProps(props: any, state: any){
  //   console.log(props)
  //   console.log(state)
  //   return state
  // }

  // 返回一个值，将返回的值作为componentDidUpdate的第三个参数，一般与componentDidUpdate配合使用
  getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<ITsState>): any | null {
    console.log(prevProps)
    console.log(prevState)
    return 'getSnapshotBeforeUpdate'
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<ITsState>, snapshot?: any) {
    console.log(snapshot)
  }

  state = {
    text: 'demo'
  }

  changeText: () => void = () => {
    this.setState({
      text: this.state.text + '!'
    })
  }

  render() {
    const {text} = this.state
    return (
      <div onClick={() => this.changeText()}>
        component-old!!--{text}
      </div>
    )
  }
}
