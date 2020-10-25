import React from 'react'
import {Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import receitas from '../bd/receitas'

export default function Receita ( { route } ) {
    const exibirReceita = receitas.find(receita => receita.id == route.params.id)

    function exibirIngrediente() {
        const ingredientes = exibirReceita.ingredientes
        return ingredientes.map(ingrediente => <Text style={styles.textIngrediente}>{ingrediente}</Text>)
    }    

    return (
        <View style ={styles.container} key={exibirReceita.id}>
            <Text style={styles.title}>{exibirReceita.nome}</Text>
            <Image style={styles.img} source={{uri: exibirReceita.imagem}}></Image>
            <ScrollView>
                <Text style={styles.subtitle1}>Ingredientes</Text>
                {exibirIngrediente()}
                <Text style={styles.subtitle2}>Modo de Preparo</Text>
                <Text style={styles.text}>{exibirReceita.preparo}</Text>
                <Text style={styles.font}>Fonte: {exibirReceita.fonte}</Text>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8d8d8',
    },
    img: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 24,
        color: '#ff801a',
        margin: 20,
    },
    subtitle1: {
        color: '#8312ed',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20,
    },
    subtitle2 : {
        color: '#36c9a7',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20,
    },
    text: {
        fontSize: 18,
        lineHeight: 22,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'justify',
    },
    textIngrediente: {
        fontSize: 18,
        marginLeft: 20,
        marginRight: 20,
    },
    font: {
        fontStyle: 'italic',
        margin: 10,
    }
})