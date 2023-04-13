
import { StyleSheet, Text, View } from 'react-native';

 import React from 'react';
 import{ Provider} from 'react-redux'
 import { createStore,combineReducers} from 'redux'

 import productsReducer from './store/reducers/products';
 const rootReducer = combineReducers({
  products:productsReducer
 });
 const store = createStore(rootReducer)
export default function App() {
  return (
    <Provider store={store }>
      <Text>Open up App.js to start working on your app!</Text>
    
    </Provider>
  );
}

