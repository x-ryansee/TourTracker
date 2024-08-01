import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen';
import LoginScreen from './Components/LoginScreen';
import SignUpScreen from './Components/SignUpScreen';
import { UserProvider } from './UserContext';
import ConcertResultsScreen from './Components/ConcertResultsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login" 
            component={LoginScreen}
            options={{
              title: 'Login',
              headerStyle: { backgroundColor: '#1DB954' },
              headerTintColor: '#FFFFFF',
            }} 
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen}
            options={{
              title: 'Sign Up',
              headerStyle: { backgroundColor: '#1DB954' },
              headerTintColor: '#FFFFFF',
            }} 
          />
            <Stack.Screen 
              name="ConcertResults" 
              component={ConcertResultsScreen}
              options={{
                title: 'Concert Results',
                headerStyle: { backgroundColor: '#1DB954' },
                headerTintColor: '#FFFFFF',
              }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
