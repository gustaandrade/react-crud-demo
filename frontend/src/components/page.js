import React from 'react';
import { connect } from 'react-redux';

import '../styles/page.css';

import Search from './search';

const Page = props => {
  // console.log(props.cars);

  return (
    <div className="page">
      <Search></Search>
      <h1>Pesquisa de veículos do TradersClub</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  cars: state.cars
});

// const mapDispatchToProps = dispatch =>

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Page);
