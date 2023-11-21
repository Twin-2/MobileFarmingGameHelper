import { useState } from "react";
import { StyleSheet, TextInput, View, Pressable} from "react-native"
import {  Card, Checkbox, Divider, IconButton, List, Text } from "react-native-paper"
import RNPickerSelect from 'react-native-picker-select';
import operatingExpense, { crops } from "../lib/operatingExpense";
import harvestTable from "../lib/harvestTable";

type PlayerCardProps = {
    name: string;
    id: string;
    removePlayerFunction: (id:string)=> void
}

export type Crops = {
    hay: number;
    grain: number;
    fruit: number;
    cows: number;
};

export type Player = {
    name: string;
    id?: string;
    crops: Crops;
    equipment: {
        tractor: boolean;
        harvester: boolean
    };
    debt:number;
}

export const PlayerCard = ({name, id, removePlayerFunction}:PlayerCardProps) => {
    const basePlayer = {
        name: name,
        id: id,
        debt: 10000,
        crops: {
            hay: 10,
            grain: 10,
            fruit: 0,
            cows: 0,
        },
        equipment: {
            tractor: false,
            harvester: false
        }
    }

    const [selectedCrop, setSelectedCrop] = useState('' as crops);
    const [harvestValue, setHarvestValue] = useState(undefined as number | undefined);
    const [modifier, setModifier] = useState(1 as .5 | 1 | 2)
    const [player, setPlayer] = useState(basePlayer as Player);

    function rollDie() {
        return Math.floor(Math.random() * (6 - 1 + 1) + 1);
      };

    function calculateHarvest(crop: crops, acres: number, roll: number) {
        let harvestValue = harvestTable[crop][roll] * acres;
        return harvestValue * modifier;
    };

    function income() {
        const roll = rollDie();
        let op = operatingExpense(player, selectedCrop);
        const harvestCalcaulation = calculateHarvest(selectedCrop, player.crops[selectedCrop], roll);
        let result = harvestCalcaulation - op;
        setHarvestValue(result);
      };

      const updateAcres = (type: crops, value: number) => {
        setPlayer({...player, crops: {...player.crops, [type]: value }})
      }

    return(
        <Card style={styles.card}>
            <View style={styles.headerBox}>
                <Card.Title title={name}/>
                <IconButton icon={"close"} onPress={()=> removePlayerFunction(player.id)}/>
            </View>
            <Card.Content>
                {/* player crops */}
                <List.Section>
                    <List.Subheader style={styles.subtitle}><Text>Crops:</Text></List.Subheader>
                    <View style={styles.container}>
                        <View style={styles.cropInputBox}>
                            <List.Item title={'Hay'} key='hay'/>
                            <TextInput style={styles.input} keyboardType="numeric" onChangeText={(value)=> updateAcres(crops.hay, Number(value))} value={player.crops.hay.toString()}/>
                        </View>
                        <View style={styles.cropInputBox}>
                            <List.Item title={'Grain'} key='grain'/>
                            <TextInput style={styles.input} keyboardType="numeric"onChangeText={(value)=> updateAcres(crops.grain, Number(value))} value={player.crops.grain.toString()}/>
                        </View>
                        <View style={styles.cropInputBox}>
                            <List.Item title={'Fruit'} key='fruit'/>
                            <TextInput style={styles.input} keyboardType="numeric" onChangeText={(value)=> updateAcres(crops.fruit, Number(value))} value={player.crops.fruit.toString()}/>
                        </View>
                        <View style={styles.cropInputBox}>
                            <List.Item title={'Cows'} key='cows'/>
                            <TextInput style={styles.input} keyboardType="numeric" onChangeText={(value)=> updateAcres(crops.cows, Number(value))} value={player.crops.cows.toString()}/>
                        </View>
                    </View>
                </List.Section>
                {/* harvest modifiers */}
                <List.Section>
                    <List.Subheader style={styles.subtitle}><Text>Modifiers:</Text></List.Subheader>
                    <View style={styles.container}>
                        <View style={styles.modifiersInputBox}>
                            <Checkbox status={modifier === .5 ? "checked" : 'unchecked'} onPress={()=>setModifier(.5)}/>
                            <Text>Cut in half</Text>
                        </View>
                        <View style={styles.modifiersInputBox}>
                            <Checkbox status={modifier === 2 ? "checked" : 'unchecked'} onPress={()=>setModifier(2)} />
                            <Text>Double harvest</Text>
                        </View>
                        <View style={styles.modifiersInputBox}>
                            <Checkbox status={modifier === 1 ? "checked" : 'unchecked'} onPress={()=>setModifier(1)} />
                            <Text>Normal harvest</Text>
                        </View>
                    </View>
                </List.Section>
                {/* Operating expense modifiers */}
                <List.Section>
                    <List.Subheader style={styles.subtitle}><Text>Operating expense modifiers:</Text></List.Subheader>
                    <View style={styles.container}>
                        <View style={styles.modifiersInputBox}>
                            <Checkbox status={player?.equipment.tractor ?"checked" :'unchecked'} onPress={()=> setPlayer({...player, equipment: {...player.equipment, tractor: true}})}/>
                            <Text>Tractor</Text>
                        </View>
                        <View style={styles.modifiersInputBox}>
                            <Checkbox status={player?.equipment.harvester ?"checked" :'unchecked'} />
                            <Text>Harvester</Text>
                        </View>
                        <View style={styles.modifiersInputBox}>
                            <Text style={{padding: 10}}>Debt</Text>
                            <TextInput  style={styles.input} keyboardType="numeric" value={player.debt.toString()} onChangeText={(value)=> setPlayer({...player, debt: Number(value)})}/>
                        </View>
                    </View>
                </List.Section>
                {/* Select crop to harvest */}
                <List.Section>
                    <Text>Select crop to harvest for:</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setSelectedCrop(value)}
                        items={[
                            { label: 'Hay', value: 'hay' },
                            { label: 'Grain', value: 'grain' },
                            { label: 'Fruit', value: 'fruit' },
                            { label: 'Cows', value: 'cows' },
                        ]}
                    />
                </List.Section>
                <View style={styles.cropInputBox}>
                    <Pressable style={styles.harvestButton} onPress={()=> income()}>
                        <Text>{selectedCrop ? `Harvest ${selectedCrop}`: 'Select a crop'}!</Text>
                    </Pressable>
                    <Text>{harvestValue || 0}</Text>
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
    harvestButton: {
        backgroundColor: '#ffc107',
        alignItems:"center",
        justifyContent:'center',
        borderRadius: 10,
        width:110,
        height: 30
    },
    headerBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})