import React, {Component, lazy, Suspense} from 'react';

const Demo = lazy(() => import('./demo'))

class Index extends Component {

  state= {
    flag: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        flag: true
      })
    }, 2000)
  }

  render() {

    const {flag} = this.state

    return (
      <div>
        {
          flag ?
            <Suspense fallback={<div>loading...</div>}>
              <Demo />
            </Suspense> : null
        }

      </div>
    );
  }
}

export default Index;
