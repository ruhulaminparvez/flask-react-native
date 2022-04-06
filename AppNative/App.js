import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/Home";
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E497A',
    marginTop:Constants.statusBarHeight

  },
});
