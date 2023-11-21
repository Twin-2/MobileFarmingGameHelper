import { StyleSheet, TextInput, View, Pressable} from "react-native"
import {  Card, Checkbox, Divider, List, Text } from "react-native-paper"
import RNPickerSelect from 'react-native-picker-select';

type PlayerCardProps = {
    name: string
}

export const PlayerCard = ({name}:PlayerCardProps) => {


    return(
        <Card style={styles.card}>
            <Card.Title title={name}/>
            <Card.Content>
                <List.Section>
                    <List.Subheader style={styles.subtitle}><Text>Crops:</Text></List.Subheader>
                    <View style={styles.container}>
                        <View style={styles.cropInputBox}>
                            <List.Item title={'Hay'} key='hay'/>
                            <TextInput style={styles.input} keyboardType="numeric"/>
                        </View>
                        <View style={styles.cropInputBox}>
                            <List.Item title={'Grain'} key='grain'/>
                            <TextInput style={styles.input} keyboardType="numeric"/>
                        </View>
                        <View style={styles.cropInputBox}>
                            <List.Item title={'Fruit'} key='fruit'/>
                            <TextInput style={styles.input} keyboardType="numeric"/>
                        </View>
                        <View style={styles.cropInputBox}>
                            <List.Item title={'Cows'} key='cows'/>
                            <TextInput style={styles.input} keyboardType="numeric"/>
                        </View>
                    </View>
                </List.Section>
                <List.Section>
                    <List.Subheader style={styles.subtitle}><Text>Modifiers:</Text></List.Subheader>
                    <View style={styles.container}>
                        <View style={styles.modifiersInputBox}>
                            <Checkbox status={"checked"} />
                            <Text>Cut in half</Text>
                        </View>
                        <View style={styles.modifiersInputBox}>
                            <Checkbox status={"unchecked"} />
                            <Text>Double harvest</Text>
                        </View>
                        <View style={styles.modifiersInputBox}>
                            <Checkbox status={"indeterminate"} />
                            <Text>Normal harvest</Text>
                        </View>
                    </View>
                </List.Section>
                <List.Section>
                    <List.Subheader style={styles.subtitle}><Text>Operating expense modifiers:</Text></List.Subheader>
                    <View style={styles.container}>
                        <View style={styles.modifiersInputBox}>
                            <Checkbox status={"checked"} />
                            <Text>Tractor</Text>
                        </View>
                        <View style={styles.modifiersInputBox}>
                            <Checkbox status={"unchecked"} />
                            <Text>Harvester</Text>
                        </View>
                        <View style={styles.modifiersInputBox}>
                            <Text style={{padding: 10}}>Debt</Text>
                            <TextInput  style={styles.input} keyboardType="numeric" />
                        </View>
                    </View>
                </List.Section>
                <List.Section>
                    <Text>Select crop to harvest for:</Text>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Hay', value: 'hay' },
                            { label: 'Grain', value: 'grain' },
                            { label: 'Fruit', value: 'fruit' },
                            { label: 'Cows', value: 'cows' },
                        ]}
                    />
                </List.Section>
                <Divider/>
                <View style={styles.cropInputBox}>

                <Pressable style={styles.button} onPress={()=> console.log('harvest')}>
                <Text>Harvest for crop</Text>
            </Pressable>
                <Text>value</Text>
                </View>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    subtitle:{
        paddingBottom: 0, 
        paddingTop:0
    },
    card: {
        backgroundColor: 'tan',
        width: '100%'
    },
    container: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 3
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 30,
        textAlign:'center',
        width: 100
    },
    cropInputBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modifiersInputBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#ffc107',
        alignItems:"center",
        justifyContent:'center',
        borderRadius: 10,
        width:150,
        height: 30
    }
})