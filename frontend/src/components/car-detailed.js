import React from 'react';
import { connect } from 'react-redux';

import '../styles/car-detailed.css';

// import { addQueryToStore } from '../stores/actions/action';

const CarDetailed = props => {
  let inputRef = {};

  return (
    <div className="data">
      <div className="data-form">
        <input id="form-car-title" placeholder="Título" ref={ref => inputRef = ref} 
        onChange={() => {
          props.addQueryToStore(inputRef.value);
        }
        } />

        <div className="data-block">
          <input placeholder="Modelo" ref={ref => inputRef = ref} 
            onChange={() => {
              props.addQueryToStore(inputRef.value);
            }
          } />
          <input placeholder="Ano" ref={ref => inputRef = ref} 
            onChange={() => {
              props.addQueryToStore(inputRef.value);
            }
          } />
        </div>

        <select className="data-select">
          <option>1</option>
          <option>1</option>
        </select>

        <div className="data-block">
          <input placeholder="Cor" ref={ref => inputRef = ref} 
            onChange={() => {
              props.addQueryToStore(inputRef.value);
            }
          } />
          <input placeholder="Preço" ref={ref => inputRef = ref} 
            onChange={() => {
              props.addQueryToStore(inputRef.value);
            }
          } />
        </div>

        <input placeholder="KM" ref={ref => inputRef = ref} 
        onChange={() => {
          props.addQueryToStore(inputRef.value);
        }
        } />

        <div className="data-button-block">
          <button className="transparent-button">Remover</button>
          <button className="transparent-button">Cancelar</button>
          <button className="main-button">Cadastrar</button>
        </div>
        
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  // cars: state.cars
});

const mapDispatchToProps = dispatch => ({
  // addQueryToStore: query => dispatch(addQueryToStore(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarDetailed);
