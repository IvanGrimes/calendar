import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

const middleware = applyMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(middleware),
);

window.store = store;

export default store;
