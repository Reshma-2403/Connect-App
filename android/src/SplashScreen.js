import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
const SplashScreen = ({ navigation }) => {
    const [timePassed, setTimePassed] = useState(false);

    setTimeout(function () {
        setTimePassed(true);
    }, 2000);

    if (!timePassed) {
        return (
            <View style={styles.main}>
                <View style={styles.splash}>
                    <View style={styles.logo}>
                        <Image
                            style={styles.img}
                            source={require('/home/divum/Projects/React-Native/API/assets/splashscreen.gif')}></Image>
                    </View>
                </View>
            </View>
        );
    }
    navigation.navigate('Landing');
    return null;
};

const styles = StyleSheet.create({
    main: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
      },
      splash: {
        
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
        backgroundColor:'white',
        padding:200
        
      },
      img:{
        width: 200,
        height: 200,
        justifyContent:'center',
      },
      
      logo: {
        alignItems: 'center',
        marginTop:1,
        marginBottom:400,
        marginRight:30
      },
    });

export default SplashScreen;