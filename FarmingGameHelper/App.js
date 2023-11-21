import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/header';
import { AddPlayerButton } from './components/addPlayerButton';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { PlayerCard } from './components/playerCard';
import { PaperProvider } from 'react-native-paper';

export default function App() {
const [players, setPlayers] = useState([{name: 'David', id:'123456789'}])

function addPlayer(name) {
  setPlayers([...players, {name: name, id: uuidv4()}]);
  console.log(players)
}

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Header />
        <AddPlayerButton addPlayerFunction={addPlayer}/>
        <View>
          {players.map((player)=>{
            return <PlayerCard name={player.name}/>
          })}
        </View>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
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

