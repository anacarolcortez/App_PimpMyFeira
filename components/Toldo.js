import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style={styles.horizontal}>
            <Quadrado cor='#ff801a' lado={40}/>
            <Quadrado cor='#50d1f6' lado={50}/>
            <Quadrado cor='#dd22c1' lado={60} />
            <Quadrado cor='#8312ed' lado={70}/>
            <Quadrado cor='#36c9a7' lado={80}/>
            <Quadrado cor='#ff801a' lado={90}/>
            <Quadrado cor='#50d1f6' />
        </View>
    )
}

const styles = StyleSheet.create({
    horizontal :{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})