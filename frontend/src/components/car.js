import React from 'react';
import { connect } from 'react-redux';

import '../styles/car.css';

// import { addQueryToStore } from '../stores/actions/action';

const Car = props => {
  const { car } = props;

  return (
    <>
      <div className="main-area">
        <div className="left-area">
          <p>{car.title}</p>
          <p>{car.model} - {car.brand} - {car.km.toLocaleString('pt-BR')} KM</p>
        </div>
        <div className="right-area">
          <p>R$ {car.price.toLocaleString('pt-BR')}</p>
          <p>{car.year}</p>
        </div>
      </div>
      <hr className="main-area-hr"/>
    </>
  );
}

const mapStateToProps = state => ({
  // cars: state.cars
});

const mapDispatchToProps = dispatch => ({
  // addQueryToStore: query => dispatch(addQueryToStore(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Car);
