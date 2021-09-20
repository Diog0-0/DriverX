import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
/*Redux*/
import {Provider} from 'react-redux';
import store from './src/store/index';
/*Routes */
import Routes from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => App);
