import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/page.css';

import Car from './car';

import { filterCar } from '../stores/actions/action';

const CarResults = props => {
  console.log(props.cars);
  return (
    <>
      {
        props.query === "" 
          ? <h1>Pesquisa de veículos do TradersClub</h1>
          : props.cars.cars.map(c => {
            if (typeof c.model === "undefined") return null;
            if (c.model.toLowerCase().includes(props.query.toLowerCase())) {
              return (
                <Link to="/car" key={c.id} style={{ textDecoration: 'none' }} 
                  onClick={() => props.filterCar(c)}>
                  <Car car={c} key={c.id}></Car>
                </Link>
              )
            }
            return null;
        })
      }
    </>
  );
}

const mapStateToProps = state => ({
  cars: state.cars,
  query: state.query
});

const mapDispatchToProps = dispatch => ({
  filterCar: car => dispatch(filterCar(car))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarResults);
