import React from 'react'
import {View} from 'react-native'

export default props => {
    const lado = props.lado || 100
    return(
        <View style={{
            height: lado,
            width: 50,
            backgroundColor: props.cor
        }} />
    )
}
