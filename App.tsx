import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import CountryScreen from './src/screens/CountryScreen';
import HomeScreen from './src/screens/HomeScreen';
import WeatherScreen from './src/screens/WeatherScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {backgroundColor: '#f3edf7'},
          animation: 'slide_from_right',
          statusBarColor: '#f3edf7',
          statusBarStyle: 'dark',
        }}>
        <Stack.Screen
          name="HOME_SCREEN"
          component={HomeScreen}
          options={{title: 'Weather App'}}
        />
        <Stack.Screen
          name="COUNTRY_SCREEN"
          component={CountryScreen}
          options={{title: 'Country'}}
        />
        <Stack.Screen
          name="WEATHER_SCREEN"
          component={WeatherScreen}
          options={{title: 'Weather'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
