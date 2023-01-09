import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from "react";
import { StyleSheet, LogBox } from 'react-native';
import { loadAsync } from 'expo-font';

import { initializeFirebaseInstance } from "./config/firebase_config";
import SplashPage from "./pages/splash";
import SignInPage from "./pages/signin";
import HomePage from "./pages/homepage";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

initializeFirebaseInstance();

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await loadAsync({
        'LexendDeca': require('./assets/fonts/LexendDeca.ttf')
      });
    }
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Splash" component={SplashPage} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
