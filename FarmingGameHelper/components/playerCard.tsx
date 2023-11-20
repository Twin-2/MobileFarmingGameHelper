import { Text } from "react-native"

type PlayerCardProps = {
    name: string
}

export const PlayerCard = ({name}:PlayerCardProps) => {
    return(
        <Text>{name}</Text>
    )
}