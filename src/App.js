import React from 'react'
import { connect } from 'react-redux'
import './app.css'

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

const App = props => (
  <h1>Your Rollup-React-Redux app goes here!</h1>
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
