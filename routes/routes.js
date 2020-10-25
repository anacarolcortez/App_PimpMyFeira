import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import App from '../views/App'
import Listagem from '../views/Listagem'
import Receita from '../views/Receita'

const Stack = createStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName="App" screenOptions={{headerShown: false}}>
            <Stack.Screen name="App" title="Pimp My Feira" component={App} />
            <Stack.Screen name="Listagem" title="Lista de Receitas" component={Listagem} />
            <Stack.Screen name="Receita" title="Receita" component={Receita} />
        </Stack.Navigator>
    )
}