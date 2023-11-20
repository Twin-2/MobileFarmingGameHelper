import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/header';
import { AddPlayerButton } from './components/addPlayerButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AddPlayerButton />
      <View>this is some more text</View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(138, 105, 68)',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  },
});
