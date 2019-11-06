import React from 'react';
import { connect } from 'react-redux';

import '../styles/search.css';

const Search = props => {
  return (
    <div className="search">
      <div className="form">
        <input placeholder="Pesquise por um veículo"></input>
        <button className="search-button">Cadastrar</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Search);
