import { createStore } from "redux";
import rootReducer from "./reducers";

let preloadedState;

preloadedState = {
  user: { email: "", phone: "", name: "", id: "", password: "", seed: "" },
};

const store = createStore(rootReducer, preloadedState);

export default store;
