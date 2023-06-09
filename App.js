import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './screens/Dashboard';

const Stack = createNativeStackNavigator();


export default function App() {
 
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}