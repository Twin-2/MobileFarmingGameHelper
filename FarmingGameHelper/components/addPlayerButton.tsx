import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

export const AddPlayerButton = () => {
    const [name, setName] = useState('')
    return(
        <View style={styles.container}>
            <TextInput value={name} onChangeText={setName} style={styles.input}/>
            <Button title="Add Player" color={styles.button.backgroundColor}/>
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
  