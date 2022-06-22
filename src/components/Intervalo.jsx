import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import {
  alterarNumeroMinimo,
  alterarNumeroMaximo,
} from "./../store/actions/numeros";

const Intervalo = (props) => {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Numeros" red>
      <div className="Intervalo">
        <span>
          <strong>Minimo: </strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.alterarMinmo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Maximo: </strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarMaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    alterarMinmo(novoNumero) {
      //Action creator => action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      //Action creator => action
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
