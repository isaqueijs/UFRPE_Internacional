import React from 'react';
import { Image, View } from 'react-native'

const image = [require('../assets/book-open-variant.png'),require('../assets/phone-hangup.png')]

function Icon(params) {
    return(
        <View>
            <Image 
                source={image[0]}
            />
        </View>
    )
}

export default Icon;