import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

import colors from '../styles/colors';

const Stack = createStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        }
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default StackRouter;