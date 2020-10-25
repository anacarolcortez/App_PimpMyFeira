import React, { Component } from 'react'
import {Text, View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default class Filtros extends Component {
    constructor(props){
        super(props)
    }

    render() {
        state = {
            categoria: 'refeição'
        }

        return(
            <View style={styles.container}>
                <Text style={styles.text}>Filtrar categoria: </Text>
                <Picker 
                    style={styles.picker} 
                    selectedValue={state.categoria}
                    onValueChange={(itemValue, itemIndex) => this.setState({categoria: itemValue})}>
                    <Picker.Item label='refeição' value='refeição' />
                    <Picker.Item label='sobremesa' value='sobremesa' />
                    <Picker.Item label='pestisco' value='pestisco' />
                    <Picker.Item label='bebida' value='bebida' />
                </Picker>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        backgroundColor: '#ff801a',
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
    },
    picker: {
        height: 20,
        width: 130,
    }
})