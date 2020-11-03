import React, { Component, ReactNode } from 'react';
import ReactDom from 'react-dom'

interface ITsProps {
  children?: ReactNode
}

class Index extends Component<ITsProps, any> {

  public body: Element | null;
  public el: Element;

  constructor(props: any) {
    super(props);
    this.body = document.querySelector('body');
    this.el = document.createElement('div')
  }

  componentDidMount() {
    this.el.setAttribute('id', 'portal-root')
    this.body && this.body.appendChild(this.el)
  }

  componentWillUnmount() {
    this.body && this.body.removeChild(this.el)
  }

  render() {
    return ReactDom.createPortal(this.props.children, this.el)
  }
}

export default Index;
