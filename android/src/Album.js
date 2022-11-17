import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ImageBackground,
    Pressable
} from 'react-native';

const Album = ({ navigation }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((json) => setData(json.data))

    },);

    const renderItem = (itemData) => {
        return (
            <Pressable onPress={() => navigation.navigate("AlbumDetails", { dataID: itemData.item.id })} >
                <View style={styles.containerFlate}>
                    <Text style={styles.album}> Album {'\n'}{itemData.item.id}</Text>
                </View>
            </Pressable>
        );
    }

    return (
        <View style={styles.flex}>
            <ImageBackground style={styles.flex} source={require('/home/divum/Projects/React-Native/API/assets/post_details.jpg')}>
                <View style={styles.container}>

                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    containerFlate: {
        backgroundColor: '#83e3f2',
        padding: 50,
        margin: 15,
        borderRadius: 8,
        elevation: 8,
        marginRight: 8,
        marginLeft: 16
    },
    album: {
        textAlign: 'center'
    }
});

export default Album;