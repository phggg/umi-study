import React, { Component } from 'react';

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

  static getDerivedStateFromError(error: Error) {
    console.log(error)
    return {
      flag: true
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  }

  render() {

    const { flag } = this.state;

    return (
      <div>
        {flag ? <h1>发生错误，请稍后再试</h1> : this.props.children}
      </div>
    );
  }
}
