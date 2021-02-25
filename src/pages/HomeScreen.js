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


const icon = [
    require('../../assets/ipe.png'),
    require('../../assets/intercambio.png'),
    require('../../assets/handshake.png'),
    require('../../assets/book-open-variant.png'),
    require('../../assets/editais.png'),
    require('../../assets/phone-hangup.png'),
    require('../../assets/telegram.png'),
]
const WIDTH = Dimensions.get('window').width

function HomeScreen({ navigation }) {

    function renderItem({ item }) {

        const icon_ = icon[item.key - 1];

        if ((dataList.length % 2 == 1) && (dataList.length == item.key)) {
            return (
                <>
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
                    <TouchableOpacity style={styles.itemInvisible}>

                    </TouchableOpacity>
                </>

            )
        }

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
            <StatusBar barStyle='light-content' backgroundColor='#594C6F' />

            <FlatList
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
        // height: "100%",
        justifyContent: 'center',
        backgroundColor: '#594C6F'
    },
    botao: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#FF8B7B',
        height: (WIDTH / 2) - 5,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 50,
        marginHorizontal: 5,
        marginVertical: 5
    },
    texto: {
        alignSelf: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        fontWeight: 'bold',
    },
    itemInvisible: {
        flex: 1,
        backgroundColor: 'transparent'
    }
});

export default HomeScreen;