import React, { Component } from 'react';
import { StatusBar, View, Text, ImageBackground, Image,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GetItemBasico } from '../imgs'

let nomeTela = '';

export default class Tela1 extends Component {

  static navigationOptions = ({ navigation }) => ({
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
    const itens = GetItemBasico(name);
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../imgs/fundoLol.jpg')} style={{ width: '100%', height: '100%' }}>
        <ScrollView style={{ backgroundColor: '#00000060' }} >
          <View style={{ alignItems: 'center', backgroundColor: '#00000060' }}>
            <Image
              style={{ width: 180, height: 180, margin: 70 }}
              source={itens.url}
            />

            <Text style={{ color: 'white', fontSize: 40, opacity: 0.8, marginTop: 50 }}>Qual Efeito do Item</Text>

            <Text style={{ color: 'cyan', fontSize: 20, opacity: 0.7, margin: 40 }}>{itens.efeito}</Text>

            <Text style={{ color: 'white', fontSize: 40, opacity: 0.8 }}>Combinações</Text>
            
            {/* combinação 1 */}
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.url}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25 }}>+</Text>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.combinacoes[0][0]}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25, marginRight: 10 }}>=</Text>
              <TouchableOpacity style={{}} onPress={() => { navigate('Tela1', { name:itens.combinacoes[0][2], texto:itens.combinacoes[0][3]})}}>
                <Image
                  style={{ width: 60, height: 60, margin: 20 }}
                  source={itens.combinacoes[0][1]}
                />
              </TouchableOpacity>
            </View>
            {/* combinação 2 */}
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.url}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25 }}>+</Text>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.combinacoes[1][0]}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25, marginRight: 10 }}>=</Text>
              <TouchableOpacity style={{}} onPress={() => { navigate('Tela1', { name:itens.combinacoes[1][2], texto:itens.combinacoes[1][3]})}}>
                <Image
                  style={{ width: 60, height: 60, margin: 20 }}
                  source={itens.combinacoes[1][1]}
                />
              </TouchableOpacity>
            </View>
            {/* combinação 3 */}
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.url}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25 }}>+</Text>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.combinacoes[2][0]}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25, marginRight: 10 }}>=</Text>
              <TouchableOpacity style={{}} onPress={() => { navigate('Tela1', { name:itens.combinacoes[2][2], texto:itens.combinacoes[2][3]})}}>
                <Image
                  style={{ width: 60, height: 60, margin: 20 }}
                  source={itens.combinacoes[2][1]}
                />
              </TouchableOpacity>
            </View>
            {/* combinação 4 */}
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.url}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25 }}>+</Text>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.combinacoes[3][0]}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25, marginRight: 10 }}>=</Text>
              <TouchableOpacity style={{}} onPress={() => { navigate('Tela1', { name:itens.combinacoes[3][2], texto:itens.combinacoes[3][3]})}}>
                <Image
                  style={{ width: 60, height: 60, margin: 20 }}
                  source={itens.combinacoes[3][1]}
                />
              </TouchableOpacity>
            </View>
            {/* combinação 5 */}
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.url}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25 }}>+</Text>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.combinacoes[4][0]}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25, marginRight: 10 }}>=</Text>
              <TouchableOpacity style={{}} onPress={() => { navigate('Tela1', { name:itens.combinacoes[4][2], texto:itens.combinacoes[4][3]})}}>
                <Image
                  style={{ width: 60, height: 60, margin: 20 }}
                  source={itens.combinacoes[4][1]}
                />
              </TouchableOpacity>
            </View>
            {/* combinação 6 */}
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.url}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25 }}>+</Text>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.combinacoes[5][0]}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25, marginRight: 10 }}>=</Text>
              <TouchableOpacity style={{}} onPress={() => { navigate('Tela1', { name:itens.combinacoes[5][2], texto:itens.combinacoes[5][3]})}}>
                <Image
                  style={{ width: 60, height: 60, margin: 20 }}
                  source={itens.combinacoes[5][1]}
                />
              </TouchableOpacity>
            </View>
            {/* combinação 7 */}
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.url}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25 }}>+</Text>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.combinacoes[6][0]}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25, marginRight: 10 }}>=</Text>
              <TouchableOpacity style={{}} onPress={() => { navigate('Tela1', { name:itens.combinacoes[6][2], texto:itens.combinacoes[6][3]})}}>
                <Image
                  style={{ width: 60, height: 60, margin: 20 }}
                  source={itens.combinacoes[6][1]}
                />
              </TouchableOpacity>
            </View>
            {/* combinação 8 */}
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.url}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25 }}>+</Text>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={itens.combinacoes[7][0]}
              />
              <Text style={{ color: 'cyan', fontSize: 40, opacity: 0.8, margin: 25, marginRight: 10 }}>=</Text>
              <TouchableOpacity style={{}} onPress={() => { navigate('Tela1', { name:itens.combinacoes[7][2], texto:itens.combinacoes[7][3]})}}>
                <Image
                  style={{ width: 60, height: 60, margin: 20 }}
                  source={itens.combinacoes[7][1]}
                />
              </TouchableOpacity>
            </View>



            

          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}