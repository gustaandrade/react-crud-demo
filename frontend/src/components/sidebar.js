import React from 'react';
import { connect } from 'react-redux';

import '../styles/sidebar.css';

import Logo from '../assets/img/logo-tc.png';

const Sidebar = props => {
  return (
    <div className="background">
      <img src={Logo} alt="logo"></img>
    </div>
  );
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Sidebar);
