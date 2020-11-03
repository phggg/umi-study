import React, { Component } from 'react';
import { router } from 'umi'

interface ITsState {
  flag: boolean
}

interface ITsProps {
  [propName: string]: any
}

export default class ErrorBoundary extends Component<ITsProps, ITsState> {

  constructor(props: ITsProps) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  goBack = () => {
    router.push('/')
    this.setState({
      flag: false
    })
  }

  // static getDerivedStateFromError(error: Error) {
  //   console.log(error)
  //   return {
  //     flag: true
  //   }
  // }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      flag: true
    })
    console.log(error)
    console.log(errorInfo)
  }

  render() {

    const { flag } = this.state;

    return (
      <div>
        {flag ? <><h1>发生错误，请稍后再试</h1><span onClick={this.goBack}>回到首页</span></> : this.props.children}
      </div>
    );
  }
}
