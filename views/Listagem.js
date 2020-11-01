import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, ScrollView  } from 'react-native'
import Sinopse from '../components/Sinopse'

import receitas from '../bd/receitas'

export default props => {

    const [receitasSelecionadas, setReceitasSelecionadas] = useState([...receitas])
    const [search, setSearch] = useState('')

    selecionarReceitas = (txt) => {
        setSearch(txt.toLowerCase())
        const res = receitas.filter(receita => receita.nome.includes(search))
        setReceitasSelecionadas(res)
    }

    return(
        <View style={styles.bgcolor}>
            <View style={styles.filter}>
                <TextInput placeholder="Pesquise por ingrediente" style={styles.inputText}
                onChangeText={(txt) => this.selecionarReceitas(txt)} 
                value={search}/>
            </View>
            <Text style={styles.title}>Livro de Receitas</Text>
            <Text style={styles.subtitle}>Confira pratos deliciosos que aproveitam partes super nutritivas de alimentos que descartamos</Text>
            <ScrollView>
                <Sinopse navigation={props.navigation} filtroReceitas={receitasSelecionadas}/>
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
    filter :{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        backgroundColor: '#ff801a',
        marginTop: 40,
    },
    inputText: {
        color: '#ffffff',
        fontSize: 16,
    }
})
