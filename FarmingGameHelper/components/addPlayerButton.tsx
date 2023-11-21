import { useState } from "react"
import {  Pressable, StyleSheet, Text, TextInput, View } from "react-native"

interface AddPlayerButtonProps {
    addPlayerFunction: (name:string)=> void;
}

export const AddPlayerButton = ({addPlayerFunction}: AddPlayerButtonProps) => {
    const [name, setName] = useState('');
    
    return(
        <View style={styles.container}>
            <TextInput value={name} onChangeText={setName} style={styles.input}/>
            <Pressable style={styles.button} onPress={()=> addPlayerFunction(name)}>
                <Text>Add Player</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    padding: 10,
      display:"flex",
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
      fontFamily: 'sans-serif'
    },
    input : {
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#ffc107',
    }
  });
  