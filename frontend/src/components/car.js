import React from 'react';
import { connect } from 'react-redux';

// import '../styles/car.css';

// import { addQueryToStore } from '../stores/actions/action';

const Car = props => {
  const { car } = props;

  return (
    <h1>{car.model}</h1>
  );
}

const mapStateToProps = state => ({
  // cars: state.cars
});

const mapDispatchToProps = dispatch => ({
  // addQueryToStore: query => dispatch(addQueryToStore(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Car);
