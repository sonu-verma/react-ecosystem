import React from 'react';
import ReactDom from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from '../src/App';

const store = configureStore();
const persistor = persistStore(store);
ReactDom.render(
    <Provider store={store}>
        <PersistGate 
            loading={<div>Loader...</div> } 
            persistor={persistor}
        >
            <App />
        </PersistGate>
    </Provider>,
     document.getElementById('root')
);