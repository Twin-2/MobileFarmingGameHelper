import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/header';
import { AddPlayerButton } from './components/addPlayerButton';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { PlayerCard } from './components/playerCard';

export default function App() {
const [players, setPlayers] = useState([])

function addPlayer(name) {
  setPlayers([...players, {name: name, id: uuidv4()}]);
  console.log(players)
}

  return (
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
