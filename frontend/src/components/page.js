import React from 'react';
import { connect } from 'react-redux';

import '../styles/page.css';

import Search from './search';
import Car from './car';

const Page = props => {
  console.log(props.cars);
  return (
    <div className="page">
      <Search></Search>
      {
        props.query === "" 
          ? <h1>Pesquisa de veículos do TradersClub</h1>
          : props.cars.map(c => <Car car={c}></Car>)
      }
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
