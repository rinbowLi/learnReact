import React, { PureComponent } from 'react';

import store from '../store'

export function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return class extends PureComponent {
      state = {
        storeState: mapStateToProps(store.getState())
      }
      
      componentDidMount() {
        this.unsubcribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubcribe()
      }

      render() {
        return <WrappedComponent  {...this.props}
          {...mapStateToProps(store.getState())}
          {...mapDispatchToProps(store.dispatch)} />
      }
    }
  }
}