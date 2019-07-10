import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './components/reducers';

class App extends Component{
    render() {
        return (
            <Provider 
                store={createStore(
                reducers,
                {},
                applyMiddleware(ReduxThunk))
                }>
       <Router />
       </Provider>
        );
    }
}

export default App;