import { StyleSheet, Text, View } from "react-native"
import { ResponsiveHeight } from "../helpers/responsiveHeithFunction";

export const Header = () => {
    return (
        <View style={styles.container}><Text style={styles.text}>Farming Game Helper</Text></View>
    )
}

const styles = StyleSheet.create({
    container: {
        top:0,
        backgroundColor: 'tan',
        width: '100%',
        height: ResponsiveHeight(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: 'rgb(138, 105, 68)',
        fontWeight: '800',

    }
  });