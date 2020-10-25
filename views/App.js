import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native'
import Toldo from '../components/Toldo'

export default class Main extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <>
        <SafeAreaView style={styles.viewArea}>
            <View style={styles.tenda}>
              <Toldo/>
            </View>
            <View style={styles.container}>
              <Text style={styles.logo}>Pimp <Text style={styles.logoColor}>My Feira</Text></Text>
              <Image style={styles.image} source={require('../images/PimpMyFeira.png')} resizeMode={'contain'}></Image>        
              <TouchableOpacity
              onPress = { () => this.props.navigation.navigate('Listagem')}>
                <Text style={styles.btn}>INICIAR</Text>
              </TouchableOpacity>
            </View>

        </SafeAreaView>
      </>
    );
  }  
};

const styles = StyleSheet.create({
  viewArea: {
    flex: 1,
    backgroundColor: '#d8d8d8',
  },
  tenda: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    height: 100,
  },
  container: {
    flex: 2,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 200,
    alignItems: 'center',
    margin: 10,
  },
  logo: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  logoColor: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ff3600',
  },
  btn: {
    backgroundColor: '#f24041',
    fontSize: 20,
    color: '#ffffff',
    padding: 10,
    width: 200,
    textAlign: 'center',
    borderRadius: 20,
  },
})
