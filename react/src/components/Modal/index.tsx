import React, { Component, ReactNode } from 'react';
import CreatePortal from '@/components/CreatePortal'
import styles from './index.less'
import {Icon} from 'antd-mobile'

interface ITsProps {
  isShow: boolean,
  onClose: () => any,
  children?: ReactNode
}

class Index extends Component<ITsProps, any> {

  handleClose = () => {
    const {onClose} = this.props
    onClose && onClose()
  }

  render() {
    const {isShow} = this.props
    return (
      <>
        {
          isShow ?
            <CreatePortal>
              <div className={styles.body}>{this.props.children}</div>
              <Icon
                type={'cross'}
                size={'lg'}
                className={styles.close}
                onClick={this.handleClose}
              />
            </CreatePortal> : null
        }
      </>
    );
  }
}

export default Index;
