import React, {Component} from 'react';
// Este import é para rotas
// Navegação de telas
import AppNavigator from './routes/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}