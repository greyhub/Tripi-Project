import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import Constants from 'expo-constants';
import { Roboto_400Regular_Italic, useFonts } from "@expo-google-fonts/roboto";
import { AppLoading } from "expo";
const marginTop = Constants.statusBarHeight;
function HotelSearchBar() {
    return (
        <View style={styles.container}>
           <Text> Noti</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: marginTop,
    },

})

export default HotelSearchBar;