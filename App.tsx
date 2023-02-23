/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/components/Sign-in';
import Signup from './src/components/Sign-up';
import LandingPage from './src/components/LandingPage';
import TabsNavigator from './src/components/Tabs-Navigator';
import Home from './src/components/Home';
import Team from './src/components/Our-Team';
import InventoryManagement from './src/components/InventoryManagment';
import RecipeManagement from './src/components/RecipeManagement';
import Query from './src/components/Query';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing Page"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FA7D50',
          },
          headerShown: false,
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Landing Page" component={LandingPage} />
        <Stack.Screen name="Sign In" component={SignIn} options={{ headerShown: true }} />
        <Stack.Screen name="Sign Up" component={Signup} options={{ headerShown: true }} />
        <Stack.Screen name="Tabs" component={TabsNavigator} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Team" options={{ headerShown: true }} component={Team} />
        <Stack.Screen name="Recipe Management" options={{ headerShown: true }} component={RecipeManagement} />
        <Stack.Screen name="Inventory Management" options={{ headerShown: true }} component={InventoryManagement} />
        <Stack.Screen name="Query" options={{ headerShown: true }} component={Query} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
