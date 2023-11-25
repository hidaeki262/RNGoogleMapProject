import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import SearchMapScreen from './screens/SearchMapScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerBackTitle: "Back" }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SearchMap" component={SearchMapScreen} options={{ headerTitle: 'Map Search' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
