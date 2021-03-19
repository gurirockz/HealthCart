import * as React from 'react';
//import NavigationService from './navigation/NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import AuthStack from './AuthStack';

const Stack = createStackNavigator();

export default function Routes() {
  const userData = useSelector(state => state.auth.userData);
  return (
    <NavigationContainer>
      <Stack.Navigator>{AuthStack(Stack)}</Stack.Navigator>
    </NavigationContainer>
  );
}
