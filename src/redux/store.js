import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
/* eslint-enable */
sagaMiddleware.run(rootSaga);

export default store;

// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducers/index.js';
// import rootSaga from './sagas/index';

// const sagaMiddleware = createSagaMiddleware();
// const store = compose(
//   applyMiddleware(sagaMiddleware),
//   window.devToolsExtension && window.devToolsExtension(),
// )(createStore)(rootReducer);

// sagaMiddleware.run(rootSaga);

// export default store;
