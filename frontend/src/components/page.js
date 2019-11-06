import React from 'react';
import { connect } from 'react-redux';

import '../styles/page.css';

import Search from './search';

const Page = props => {
  return (
    <div className="page">
      <Search></Search>
      <h1>Pesquisa de veículos do TradersClub</h1>
    </div>
  );
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Page);
