import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, StyleSheet, Text, FlatList, ImageBackground } from "react-native";
const Details = ({ route }) => {
    const [list, setList] = useState([]);

    const object = route.params.ID;
    //console.log(object.id);
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts/';


    useEffect(() => {
        axios.get(`${baseUrl}${object.id}/comments`)
            .then((response) => setList(response.data))
    }, [])
    const renderItem = ({ item }) => {
        return (
            <View>
                <Text style={styles.initial}>{item.name[0]}</Text>
                <Text>{item.body}</Text>
            </View>
        )
    }

    return (
        <View style={styles.flex}>
            <ImageBackground style={styles.flex} source={require('/home/divum/Projects/React-Native/API/assets/post_details.jpg')}>
                <View style={styles.containerFlate}>
                    <View style={styles.innerContainer}>
                        <Text style={{ color: 'red' }}>Title:{object.title}</Text>
                        <Text style={{ color: 'black' }}>Description:{object.body}</Text>
                        <Text style={styles.letter}>Comments</Text>
                        <FlatList data={list} renderItem={renderItem} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    containerFlate: {
        margin: 15,
        marginTop: 10,
        marginBottom: 10,
        height: 150,
        borderRadius: 8,
        elevation: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        height: 600
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        justifyContent: 'center',
        padding: 25,
    },
    letter: {
        color: 'brown',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    initial: {
        color: 'black',
        backgroundColor: 'orange',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        width: 50,
        height: 50,
        textAlign: 'center',
        alignSelf: 'flex-start',
        paddingTop: 10,
        borderRadius: 30
    }


});

export default Details;