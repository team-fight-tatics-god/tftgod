import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
// import { Tela1, Tela2, Tela3, Tela4, Home } from '../components';


// Os import dos componentes que representam as telas
import Tela1 from '../components/Tela1';
import Tela2 from '../components/Tela2';
import Tela3 from '../components/Tela3';
import Home from '../components/Home';

//Cria um container com todas as rotas
const AppNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home
    },
    Tela1: {
      screen: Tela1
    },
    Tela2: {
      screen: Tela2
    },
    Tela3: {
      screen: Tela3
    }
  })
);

export default AppNavigator;