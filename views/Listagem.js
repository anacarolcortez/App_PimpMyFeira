import React from 'react'
import { Text, View, StyleSheet, ScrollView  } from 'react-native'
import Filtro from '../components/Filtros'
import Sinopse from '../components/Sinopse'

export default props => {
    return(
        <View style={styles.bgcolor}>
        <Filtro />
        <Text style={styles.title}>Livro de Receitas</Text>
        <Text style={styles.subtitle}>Confira pratos deliciosos que aproveitam partes super nutritivas de alimentos que descartamos</Text>
        <ScrollView>
            <Sinopse navigation={props.navigation}/>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    bgcolor: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    title: {
        color: '#50d1f6',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 30,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: '#585858',
        marginBottom: 20,
        fontStyle: 'italic',
    },
})
