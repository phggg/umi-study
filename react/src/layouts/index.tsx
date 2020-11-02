import React from 'react';
import styles from './index.css';
import ErrorBoundary from '@/components/ErrorBoundary';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Hi! Welcome to umi!</h1>
      <ErrorBoundary>
        {props.children}
      </ErrorBoundary>
    </div>
  );
};

export default BasicLayout;
