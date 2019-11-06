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
          : props.cars.cars.map(c => {
            if (c.model.toLowerCase().includes(props.query.toLowerCase())) {
              return <Car car={c} key={c.id}></Car>;
            }
            return null;
          })
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
