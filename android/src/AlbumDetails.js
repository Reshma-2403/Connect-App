import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageModal from "react-native-image-modal";
import { View, StyleSheet, Text, FlatList, Image, ImageBackground, Pressable, Button, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Pinchable from 'react-native-pinchable';




const AlbumDetails = ({ route }) => {
    const [image, setImage] = useState([]);
    const [modal, setModal] = useState(false)
    const [modalImage, setModalImage] = useState(null)
    const id = route.params.dataID;
    //console.log(id)
    const baseurl = 'https://jsonplaceholder.typicode.com/albums/'
    useEffect(() => {
        axios.get(`${baseurl}${id}/photos`)
            .then((response) => setImage(response.data))
    }, [])
    const renderItem = ({ item }) => {
        const URL = item.url;
        //console.log(URL);
        return (
            <View style={styles.containerFlate}>
                <Pressable onPress={() => { setModal(true), setModalImage(URL) }}>

                    <Image source={{ uri: URL }} style={styles.images} />
                </Pressable>

            </View>
        )
    }

    return (
        <View style={styles.flex}>
            <Text style={{fontFamily:'serif',fontSize:20}}>PHOTOS:{image.length}</Text>
            <ImageBackground style={styles.flex} source={require('/home/divum/Projects/React-Native/API/assets/post_details.jpg')}>
                <FlatList data={image} renderItem={renderItem} numColumns={2} />
            </ImageBackground>

            <View  >
                <Modal isVisible={modal} swipeDirection="left">
                    <View style={{ backgroundColor: "white", flex: 1 }}>

                        <Pinchable>
                            <Image source={{ uri: modalImage }} style={styles.image} />
                        </Pinchable>
                        <Pressable style={styles.buttonStyle}onPress={() => { setModal(false) }} >
                        <Text>Close</Text>
                        </Pressable>
                    </View>
                </Modal>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    containerFlate: {
        backgroundColor: 'white',
        margin: 10,
        padding: 12,
        borderRadius: 8,
        elevation: 20
    },
    images: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        borderRadius: 5,
        marginRight: 2,
        marginLeft: 3
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        padding: 10,
        width: 100,
        marginTop: 140,
        marginLeft: 110,
        borderRadius: 10
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop:160
    },
});

export default AlbumDetails;