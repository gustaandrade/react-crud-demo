import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Sidebar from './components/sidebar';
import Page from './components/page';

import { addCarsToStore } from './stores/actions/action';

class App extends Component {
  componentDidMount() {
    fetch('http://private-anon-fa55b3081f-tradersclubapi.apiary-mock.com/api/cars')
    .then(res => res.json())
    .then((data) => {
      this.props.addCarsToStore(data);
    })
    .catch(console.log)
  }

  // componentDidUpdate() {
  //   console.log(this.props.cars);
  //   console.log(this.props.query);
  // }

  render() {
    return (
      <div className="main">
        <Sidebar />
        <Page />
      </div>    
    );
  }
}

const mapStateToProps = state => ({
  cars: state.cars,
  query: state.query
});

const mapDispatchToProps = dispatch => ({
  addCarsToStore: cars => dispatch(addCarsToStore(cars))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
