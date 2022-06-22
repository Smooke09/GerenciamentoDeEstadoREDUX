// configurando todos redux e gerando store
import { combineReducers, legacy_createStore as createStore } from "redux";

const reducers = combineReducers({
  numeros: function (state, action) {
    //console.log(state, "", action);
    return {
      min: 7,
      max: 31,
    };
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
