import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Sidebar from './components/sidebar';
import Page from './components/page';

import { addCarsToStore, addBrandsToStore } from './stores/actions/action';

class App extends Component {
  componentDidMount() {
    fetch('http://dev.tradersclub.com.br:12000/api/', {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .catch(console.log);

    fetch('http://dev.tradersclub.com.br:12000/api/cars', {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then((data) => {
      this.props.addCarsToStore(data);
    })
    .catch(console.log);

    fetch('http://dev.tradersclub.com.br:12000/api/brands', {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
    })  
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.props.addBrandsToStore(data);
    })
    .catch(console.log);
  }

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
  addCarsToStore: cars => dispatch(addCarsToStore(cars)),
  addBrandsToStore: brands => dispatch(addBrandsToStore(brands))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
