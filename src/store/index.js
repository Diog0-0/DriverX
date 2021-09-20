import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
//rootReducers
import rootReducer from './modules/rootReducer';
//rootSaga
import rootSaga from './modules/rootSaga';
//meu middleware Reactotron
import Reactotron from '../config/reactotron';
/*------------------------------------STORE-------------------------------------------------- */
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
);

sagaMiddleware.run(rootSaga);

export default store;
