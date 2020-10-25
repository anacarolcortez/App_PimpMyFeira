import React from 'react'
import { SafeAreaView } from 'react-native'
import {NavigationContainer } from '@react-navigation/native'
import Routes from './routes'

export default props => {
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </SafeAreaView>
    )

}