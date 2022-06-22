import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from "./actionsTypes";

// Action Creater
export function alterarNumeroMinimo(novoNumero) {
  return {
    type: NUM_MIN_ALTERADO,
    payload: novoNumero,
  };
}

export function alterarNumeroMaximo(novoNumero) {
  return {
    type: NUM_MAX_ALTERADO,
    payload: novoNumero,
  };
}
