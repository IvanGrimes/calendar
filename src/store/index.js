import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(middleware),
);

window.store = store;

export default store;
