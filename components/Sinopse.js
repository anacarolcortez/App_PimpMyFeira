import React, { Component }  from 'react'
import {Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Sinopse ( { navigation, filtroReceitas } ) {

    const receitas = [...filtroReceitas]
    return receitas.map(receita => {
        return (
            <View style ={styles.box} key={receita.id + ''}>
                <Image style={styles.img} source={{uri: receita.imagem}}></Image>
                <Text style={styles.title}>{receita.nome}</Text>
                <TouchableOpacity onPress = { () => navigation.navigate('Receita', {id : receita.id})}>
                    <Text style={styles.btn}>Receita completa</Text>
                </TouchableOpacity>
            </View>
        )
    })

}


const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f8f8f8',
        width: '100%',
        marginTop: 25,
        borderWidth: 1,
        borderColor: '#dddddd',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#511287',
        padding: 10,
    },
    img: {
        width: '100%',
        height: 150,
    },
    btn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dd22c1',
        width: '100%',
        padding: 10,
        textAlign: 'center',
        borderColor: '#dd22c1',
        borderWidth: 2,
        backgroundColor: 'transparent',
    }
})
