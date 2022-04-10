import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/Home";
import Create from "./components/Create";
import Details from './components/Details';
import Edit from './components/Edit';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {
  return (
    <View style={styles.container}>
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
      

    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#56BBF1',
    marginTop:Constants.statusBarHeight

  },
});
