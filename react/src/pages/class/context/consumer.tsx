import React, {Component} from 'react';
import searchContext from './searchContext'

class Consumer extends Component {
  render() {
    return (
      <div>
        <searchContext.Consumer >
          {({state, dispatch}) => (
            <h1 onClick={() => {
              dispatch({
                type: 'TEXT',
                payload: 'consumer test'
              })
            }}>consumer: {state.text}</h1>
          )}
        </searchContext.Consumer>
      </div>
    );
  }
}

export default Consumer;
