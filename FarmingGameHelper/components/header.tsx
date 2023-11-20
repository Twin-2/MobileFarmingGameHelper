import { StyleSheet, View } from "react-native"
import { ResponsiveHeight } from "../helpers/responsiveHeithFunction";

export const Header = () => {
    return (
        <View style={styles.container}>Farming Game Helper</View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        color: 'rgb(138, 105, 68)',
        top:0,
        fontWeight: '800',
        backgroundColor: 'tan',
        width: '100%',
        height: ResponsiveHeight(10),
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30
    },
  });