import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/search.css';

import { addQueryToStore, filterCar } from '../stores/actions/action';

const Search = props => {
  let inputRef = {};

  return (
    <div className="search">
      <div className="form">
        <input placeholder="Pesquise por um veículo" ref={ref => inputRef = ref} 
          onChange={() => { props.addQueryToStore(inputRef.value);}} />
        <Link to="/car" onClick={props.filterCar({})}>
          <button className="main-button">Cadastrar</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  cars: state.cars
});

const mapDispatchToProps = dispatch => ({
  addQueryToStore: query => dispatch(addQueryToStore(query)),
  filterCar: car => dispatch(filterCar(car))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
