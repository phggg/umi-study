
import React from 'react';
import { Link } from 'umi'
import { List } from 'antd-mobile'

import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index Class</h1>
      <List>
        <List.Item>
          <Link to={'/class/component-old'}>component-old</Link>
        </List.Item>
        <List.Item>
          <Link to={'/class/component-new'}>component-new</Link>
        </List.Item>
        <List.Item>
          <Link to={'/class/lists'}>lists</Link>
        </List.Item>
        <List.Item>
          <Link to={'/class/dva'}>dva</Link>
        </List.Item>
        <List.Item>
          <Link to={'/class/context'}>context</Link>
        </List.Item>
        <List.Item>
          <Link to={'/class/lazyLoad'}>lazyLoad</Link>
        </List.Item>
        <List.Item>
          <Link to={'/class/modal'}>modal</Link>
        </List.Item>
      </List>
    </div>
  );
}
