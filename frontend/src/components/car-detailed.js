import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/car-detailed.css';

import { registerCar, editCar, deleteCar } from '../stores/actions/action';

const CarDetailed = props => {
  const titleRef = useRef("");
  const modelRef = useRef("");
  const yearRef = useRef("");
  const brandsRef = useRef("");
  const colorRef = useRef("");
  const priceRef = useRef("");
  const kmRef = useRef("");

  const createNewCar = () => {
    fetch('http://dev.tradersclub.com.br:12000/api/cars', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "car": {
          title: titleRef.current.value,
          model: modelRef.current.value,
          brand: brandsRef.current.options[brandsRef.current.options.selectedIndex].text,
          year: yearRef.current.value,
          color: colorRef.current.value,
          km: kmRef.current.value,
          price: priceRef.current.value
        }
      })
    })
    .then(res => {
      let cl = res.clone().json();
      console.log(cl);
    })
    .then((data) => {
      this.props.registerCar(data);
    })
    .catch(console.log);
  }
  
  const deleteExistingCar = car => {
    fetch(`http://dev.tradersclub.com.br:12000/api/cars/${car.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "car": {
          title: titleRef.current.value,
          model: modelRef.current.value,
          brand: brandsRef.current.options[brandsRef.current.options.selectedIndex].text,
          year: yearRef.current.value,
          color: colorRef.current.value,
          km: kmRef.current.value,
          price: priceRef.current.value
        }
      })
    })
    .then(res => {
      let cl = res.clone().json();
      console.log(cl);
    })
    .then((data) => {
      this.props.deleteCar(data);
    })
    .catch(console.log);
  }
  
  const editExistingCar = car => {
    fetch(`http://dev.tradersclub.com.br:12000/api/cars/${car.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      let cl = res.clone().json();
      console.log(cl);
    })
    .then((data) => {
      this.props.editCar(data);
    })
    .catch(console.log);
  }

  return (
    <div className="data">
      <div className="data-form">
        <input id="form-car-title" placeholder="Título" ref={titleRef}
          value={props.filteredCar.title}
        />

        <div className="data-block">
          <input placeholder="Modelo" ref={modelRef} 
            value={props.filteredCar.model}
          />
          <input placeholder="Ano" ref={yearRef} 
            value={props.filteredCar.year}
          />
        </div>

        <select className="data-select" ref={brandsRef}>
          {props.brands.brands.map(b => {
            return(<option key={b.id}>{b.name}</option>
          )})}
        </select>

        <div className="data-block">
          <input placeholder="Cor" ref={colorRef}
            value={props.filteredCar.color}
          />
          <input placeholder="Preço" ref={priceRef} 
            value={props.filteredCar.price}
          />
        </div>

        <input placeholder="KM" ref={kmRef} 
          value={props.filteredCar.km}
        />

        <div className="data-button-block">
          <button className="transparent-button" onClick={() => deleteExistingCar()}>
            Remover
          </button>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className="transparent-button">Cancelar</button>
          </Link> 
          <button className="main-button" 
            onClick={() => typeof props.filteredCar.id === "undefined" 
              ? createNewCar() : editExistingCar()}>
            {typeof props.filteredCar.id === "undefined" ? "Cadastrar" : "Editar"}
          </button>
        </div>
        
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  filteredCar: state.filteredCar,
  brands: state.brands
});

const mapDispatchToProps = dispatch => ({
  registerCar: car => dispatch(registerCar(car)),
  editCar: car => dispatch(editCar(car)),
  deleteCar: car => dispatch(deleteCar(car)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarDetailed);
