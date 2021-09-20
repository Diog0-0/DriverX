import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './rootNavigation';
/*Pages*/
import Login from '../pages/Login';
import Type from '../pages/Steps/type';
import Car from '../pages/Steps/car';
import Payment from '../pages/Steps/payment';
import Ride from '../pages/Ride';
import Home from '../pages/Home';

const stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer ref={navigationRef}>
    <stack.Navigator initialRouteName="Login">
      <stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <stack.Screen
        options={{headerShown: false}}
        name="Type"
        component={Type}
      />
      <stack.Screen options={{headerShown: false}} name="Car" component={Car} />
      <stack.Screen
        options={{headerShown: false}}
        name="Payment"
        component={Payment}
      />
      <stack.Screen
        options={{headerShown: false}}
        name="Ride"
        component={Ride}
      />
      <stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </stack.Navigator>
  </NavigationContainer>
);

export default Routes;
