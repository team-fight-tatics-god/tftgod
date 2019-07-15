import React, { Component } from 'react';
import { StatusBar, View, Text, ImageBackground, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {GetItem} from '../imgs'

let nomeTela = '';

export default class Tela1 extends Component {

  constructor(props) {
    super(props);
    this.state = { name: this.props.navigation.getParam("name")}
  }
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.texto,
    headerStyle: {
      backgroundColor: 'black',
      height: 80,
      opacity: 0.8
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      opacity: 1
    }
  });
  render() {
   
    const item = GetItem(this.state.name);
    return (
      <ImageBackground source={require('../imgs/fundoLol.jpg')} style={{ width: '100%', height: '100%' }}>
        <ScrollView style={{backgroundColor:'#00000060'}}>
          <View style={{ alignItems: 'center',backgroundColor:'#00000060' }}>
            <Image
              style={{ width: 180, height: 180, margin: 70 }}
              source={item.url}
            />
            <Text style={{ color: 'white', fontSize: 40, opacity: 0.8 }}>Como é feito </Text>
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={item.feito[0]}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25 }}>+</Text>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={item.feito[1]}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25, marginRight: 10 }}>=</Text>
              <Image
                style={{ width: 60, height: 60, margin: 20 }}
                source={item.url}
              />
            </View>

            <Text style={{ color: 'white', fontSize: 40, opacity: 0.8, marginTop: 50 }}>Qual Efeito do Item</Text>

            <Text style={{ color: 'cyan', fontSize: 20, opacity: 0.7, margin: 40 }}>{item.efeito}</Text>

            <Text style={{ color: 'white', fontSize: 40, opacity: 0.8, marginTop: 20, margin: 40, }}>Item é bom em:</Text>

            <View style={{ flexDirection: 'row', marginBottom: 100, flexWrap: 'wrap', justifyContent: 'center' }}>
            {item.bomEm.map(t => (
              <Image
              key={t.id}  
              style={{ width: 80, height: 80, margin: 5 }}
                source={t.url}
              />
            ))}
            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}