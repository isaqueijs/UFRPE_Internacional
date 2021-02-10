import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    View,
    Text,
    StatusBar,
    Dimensions,
    Image
} from 'react-native';

import { dataList } from '../../assets/sites'
// import { mdiAccount } from '@mdi/js';
// import Icon from '@mdi/react'


const icon = [
    require('../../assets/intercambio.png'),
    require('../../assets/ipe.png'),
    require('../../assets/handshake.png'),
    require('../../assets/book-open-variant2.png'),
    require('../../assets/google.png'),
    require('../../assets/phone-hangup.png'),
]
const WIDTH = Dimensions.get('window').width

function HomeScreen({ navigation }) {

    function renderItem({ item }) {

        const icon_ = icon[item.key - 1];

        return (
            <TouchableOpacity style={styles.botao}
                onPress={() => {
                    navigation.navigate('WebPage', item.url)
                }}
            >
                <View>
                    <Image
                        style={{ width: 100, height: 100, alignSelf: 'center' }}
                        source={icon_}
                    />
                    <Text style={styles.texto}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' />

            <FlatList
                style={{ marginTop: 20 }}
                data={dataList}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.key.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#594C6F'
    },
    botao: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'orange',
        height: WIDTH / 2,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 50,
        marginHorizontal: 5,
        marginVertical: 5
    },
    texto: {
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 20,
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: '#FAFAFA',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }
});

export default HomeScreen;