import React from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount } from './actions'
import { countSelector } from './selectors'

const mapStateToProps = state => ({
  count: countSelector(state)
})
const mapDispatchToProps = dispatch => ({
  inc: () => dispatch(incrementCount()),
  dec: () => dispatch(decrementCount())
})

const App = props => (
  <div style={{
      minWidth: 700,
      width: '90vw',
      fontFamily: 'sans-serif',
      fontSize: '90%'
    }}>
    <span>Your Rollup-React-Redux bootstrapped app goes here!</span>
    <div>
      Click count: {props.count}
    </div>
    <div>
      <button onClick={props.dec}>-</button>
      <button onClick={props.inc}>+</button>
    </div>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
