import React from 'react';
import { connect } from 'react-redux';

import '../styles/search.css';

import { addQueryToStore } from '../stores/actions/action';

const Search = props => {
  let inputRef = {};

  return (
    <div className="search">
      <div className="form">
        <input placeholder="Pesquise por um veículo" ref={ref => inputRef = ref}></input>
        <button className="search-button" onClick={
          () => {
            props.addQueryToStore(inputRef.value);
          }
        }>Cadastrar</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  cars: state.cars
});

const mapDispatchToProps = dispatch => ({
  addQueryToStore: query => dispatch(addQueryToStore(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
