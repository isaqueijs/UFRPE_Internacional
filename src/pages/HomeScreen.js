import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    View,
    Text,
    StatusBar,
} from 'react-native';


const dataList = [{
    key: 1,
    name: 'GOOGLE',
    url: 'https://www.google.com/'
}, {

    key: 2,
    name: 'NINTER',
    url: 'http://international.ufrpe.br/'

}, {

    key: 3,
    name: 'ACI',
    url: 'http://www.aci.ufrpe.br/'

}, {

    key: 4,
    name: 'Manual',
    url: 'http://www.preg.ufrpe.br/br/manual-estudante'

}]


function HomeScreen({ navigation }) {

    const [url, setUrl] = useState("");

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.botao}
            onPress={() => {
                navigation.navigate('WebPage', item.url)
            }}
        >
            <View>
                <Text style={styles.texto}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' />

            <FlatList
                data={dataList}
                renderItem={renderItem}
                keyExtractor={item => item.key.toString()}
            />

            {/* <TouchableOpacity style={styles.botao}
                onPress={() => {
                    navigation.navigate('WebPage', 'https://www.google.com/')
                }}
            >
                <View>
                    <Text style={styles.texto}>GOOGLE</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={() => {
                    navigation.navigate('WebPage', 'http://international.ufrpe.br/')
                }}
            >
                <View>
                    <Text style={styles.texto}>NINTER</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={() => {
                    navigation.navigate('WebPage', 'http://www.aci.ufrpe.br/')
                }}
            >
                <View>
                    <Text style={styles.texto}>ACI</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={() => {
                    navigation.navigate('WebPage', 'http://www.preg.ufrpe.br/br/manual-estudante')
                }}
            >
                <View>
                    <Text style={styles.texto}>Manual</Text>
                </View>
            </TouchableOpacity> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20
    },
    botao: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#4555',
        height: 100,
        width: 100,
        borderWidth: 2
    },
    texto: {
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 20,
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }
});

export default HomeScreen;