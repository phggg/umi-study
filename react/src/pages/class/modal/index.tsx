import React, { Component } from 'react';
import CreatePortal from '@/components/CreatePortal'
import Modal from '@/components/Modal'
import {Button} from 'antd-mobile'

interface ITsState {
  isShow: boolean
}

class Index extends Component<any, ITsState> {

  constructor(props: any) {
    super(props);
    this.state={
      isShow: false
    }
  }

  handleClose = () => {
    this.setState({
      isShow: false
    })
  }

  handleShow = () => {
    this.setState({
      isShow: true
    })
  }

  render() {

    const {isShow} = this.state
    return (
      <div>
        {/*<CreatePortal>*/}
        {/*  <div>12222</div>*/}
        {/*</CreatePortal>*/}

        <Button type={'primary'} onClick={this.handleShow}>modal</Button>

        <Modal
          isShow={isShow}
          onClose={this.handleClose}
        >
          modal
        </Modal>
      </div>
    );
  }
}

export default Index;
