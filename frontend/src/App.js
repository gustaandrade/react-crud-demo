import React, { Component } from 'react';
import { connect } from "react-redux";

import './styles/App.css';

import Sidebar from './components/sidebar';
import Page from './components/page';

class App extends Component {
  // componentDidMount() {
  //   fetch('https://desolate-brushlands-20405.herokuapp.com/api/v1/products')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.props.addProductsToStore(data);
  //   })
  //   .catch(console.log)
  // }

  render() {
    return (
      <div className="main">
        <Sidebar></Sidebar>
        <Page></Page>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // products: state.products,
  // cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  // addProductsToStore: products => dispatch(addProductsToStore(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
