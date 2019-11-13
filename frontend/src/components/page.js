import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import '../styles/page.css';

import Search from './search';
import Routes from '../routes';

const Page = props => {
  console.log(props.cars);
  return (
    <div className="page">
      <BrowserRouter>
        <Search />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => ({
  cars: state.cars,
  query: state.query
});

// const mapDispatchToProps = dispatch =>

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Page);
