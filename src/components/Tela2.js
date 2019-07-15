import React, { Component } from 'react';
import { StatusBar, View, Text, ImageBackground, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {GetCampeoes} from '../imgs'



export default class Tela2 extends Component {

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
    const name = this.props.navigation.getParam("name");
    const campeoes = GetCampeoes(name);
    return (
      <ImageBackground source={require('../imgs/fundoLol.jpg')} style={{ width: '100%', height: '100%' }}>
        <ScrollView  style={{backgroundColor:'#00000060'}} >
          <View style={{alignItems:'center', backgroundColor:'#00000060'}}>
            <Image
              style={{ width: 180, height: 180, margin: 70 }}
              source={campeoes.url}
            />
            <View style={{alignItems:'center'}}>
                <Text style={{ color: 'white', fontSize: 40, opacity: 0.8,marginRight:10}}>Origens:</Text>
                <Text style={{ color: 'cyan', fontSize: 20, opacity: 0.8,marginTop:5 }}>{campeoes.origens[0]}</Text>
                <Text style={{ color: 'cyan', fontSize: 20, opacity: 0.8,marginTop:5 }}>{campeoes.origens[1]}</Text>

                <Text style={{ color: 'white', fontSize: 40, opacity: 0.8,marginRight:10}}>Classes:</Text>
                <Text style={{ color: 'cyan', fontSize: 20, opacity: 0.8,marginTop:5 }}>{campeoes.classes[0]}</Text>
                <Text style={{ color: 'cyan', fontSize: 20, opacity: 0.8,marginTop:5 }}>{campeoes.classes[1]}</Text>
                

                <Text style={{ color: 'white', fontSize: 40, opacity: 0.8,marginRight:10,marginTop:0}}>Resistencia Magica:</Text>
                <Text style={{ color: 'cyan', fontSize: 20, opacity: 0.8,margin:25 }}>até o momento todos os campeões do TFT tem 20 de mr(Resistencia Magica)</Text>

                <Text style={{ color: 'white', fontSize: 40, opacity: 0.8,marginRight:10,marginTop:0}}>Armadura</Text>
                <Text style={{ color: 'cyan', fontSize: 20, opacity: 0.8,margin:25 }}>{campeoes.nome} tem {campeoes.armor} de armadura</Text>

                <Text style={{ color: 'white', fontSize: 40, opacity: 0.8,marginRight:10,marginTop:0}}>Dano por Segundo</Text>
                <Text style={{ color: 'cyan', fontSize: 20, opacity: 0.8,margin:25 }}>{campeoes.nome} tem {campeoes.dps} de dano por segundo</Text>
                
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  
                  <Image source={require('../imgs/background/gold-icon.png')} style={{height:50, width:50}} />
                  <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8,margin:25 }}>{campeoes.custo}</Text>
                </View>
            </View>             
          
          </View>
          
        </ScrollView>
      </ImageBackground>
    )
  }
}