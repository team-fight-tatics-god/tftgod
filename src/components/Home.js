import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { lista } from '../imgs'

export default class Home extends Component {

  // constructor(){
  //   super()
  //   // Fresco.initialize(this)
  // }

  // Server para criar os parametros de rota
  // É possível estilizar a  barra de menu
  static navigationOptions = {
    headerStyle: {
      height: 0,
      width: 0
    }
  }
  render() {
    // usa o navigate da propriedade navagation
    // É utlizada para navegar entre as telas
    // Basta informar o nome da rota e os dados a ser enviado
    // navigate('Tela1', {dados: pessoa}

    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../imgs/fundoLol.jpg')} style={{ width: '100%', height: '100%' }}>
        <ScrollView style={style.container}>
          <View style={style.scroll}>
            <Image
              style={{ width: 350, height: 250, margin: 30 }}
              source={require('../imgs/logoInterno.png')}
            />
             <View style={style.viewItens}>
              <Text style={style.textItens}>Itens Básicos</Text>
              <Image
                style={{ width: 400, height: 80 }}
                source={require('../imgs/risco-lol.png')}
              />
            </View>



            {lista.itens1.map(t => (  
              <TouchableOpacity key={t.id} style={style.botao} onPress={() => { navigate('Tela3', { name: t.nome, texto:t.texto}) }}>
                <Image
                  key={t.id}  
                  style={{ width: 80, height: 80 }}
                  source={t.url}
                />
              </TouchableOpacity>
            ))}
            
            
            
            
            <View style={style.viewItens}>
              <Text style={style.textItens}>Itens Completos</Text>
              <Image
                style={{ width: 400, height: 80 }}
                source={require('../imgs/risco-lol.png')}
              />
            </View>



            {lista.itens.map(t => (  
              <TouchableOpacity key={t.id} style={style.botao} onPress={() => { navigate('Tela1', { name: t.nome, texto:t.texto}) }}>
                <Image
                  key={t.id}  
                  style={{ width: 80, height: 80 }}
                  source={t.url}
                />
              </TouchableOpacity>
            ))}


            <View style={style.viewCampeoes}>
              <Text style={style.textItens}>Campeões</Text>
              <Image
                style={{ width: 400, height: 80 }}
                source={require('../imgs/risco-lol.png')}
              />
            </View>



            {lista.campeoes.map(t => (
              <TouchableOpacity key={t.id} style={style.botao} onPress={() => { navigate('Tela2', { name:t.nome, texto:t.texto })}}>
              <Image
                key={t.id}
                style={{ width: 80, height: 80 }}
                source={t.url}
              />
            </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>

    );
  }
}

const style = StyleSheet.create({
  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#00000060',
    marginBottom: 100
  },
  botao: {
    margin: 25,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    backgroundColor: 'transparent',
    borderRadius: 20,
    zIndex: 10,
  },
  textItens: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f1f1f1',
    opacity: 0.7
  },
  viewItens: {
    alignItems: 'center',
    // marginTop:85
  },
  viewCampeoes: {
    alignItems: 'center',
    marginTop: 35
  },
  container:{
    backgroundColor:'#00000060'
  }
})