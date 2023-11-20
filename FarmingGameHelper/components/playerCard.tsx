import { StyleSheet } from "react-native"
import { Card, List, Text } from "react-native-paper"

type PlayerCardProps = {
    name: string
}

export const PlayerCard = ({name}:PlayerCardProps) => {
    return(
        <Card style={styles.container}>
            <Card.Title title={name}/>
            <Card.Content>
                <List.Section>
                    <List.Subheader><Text>Crops</Text></List.Subheader>
                    <List.Item title={'Hay'}/>
                </List.Section>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'tan'
    }
})