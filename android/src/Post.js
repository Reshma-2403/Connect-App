import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Pressable,
    ImageBackground
} from 'react-native';

const Posts = ({ navigation }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((json) => setData(json.data))

    },);

    const renderItem = (itemData) => {
        return (
            <Pressable onPress={() => navigation.navigate("PostDetails", { ID: itemData.item })} >
                <View style={styles.containerFlate}>
                    <View style={styles.innerContainer}>
                        <Text style={{ color: 'red' }}>Title : {itemData.item.title}</Text>
                        <Text style={{ color: 'black' }}>Description : {itemData.item.body}</Text>
                    </View>
                </View>
            </Pressable>
        );
    }

    return (
        <View style={styles.flex}>
            <ImageBackground style={styles.flex} source={require('/home/divum/Projects/React-Native/API/assets/post_details.jpg')}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    containerFlate: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 8,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        justifyContent: 'center',
        padding: 10
    },

});

export default Posts;