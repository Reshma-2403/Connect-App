import React,{useEffect} from "react";
import { View, StyleSheet, Pressable, Text, ImageBackground,BackHandler,Alert } from "react-native";
const Landing = ({ navigation }) => {
    return (
        <View style={Styles.flex} >
            <ImageBackground style={Styles.flex} source={require('/home/divum/Projects/React-Native/API/assets/bg.jpg')}>
                <View>
                    <Pressable
                        style={Styles.buttonStyle} onPress={() => navigation.navigate("Post")}>
                        <Text>POST</Text>
                    </Pressable>
                    <View>
                        <Pressable
                            style={Styles.button} onPress={() => navigation.navigate("Album")}>
                            <Text>ALBUM</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
const Styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE7F9C',
        padding: 10,
        width: 100,
        marginTop: 250,
        marginLeft: 130,
        borderRadius: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE7F9C',
        padding: 10,
        width: 100,
        marginTop: 50,
        marginLeft: 130,
        borderRadius: 10
    },
});
export default Landing;