import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
// {this.props.route.params.nombre} parametro para recibir
  render() {
    let recibir= this.props.route.params
    return (
      <View> 
        <Text> Bienvenido: {recibir.nombre}</Text>
        <Text> Codigo: {recibir.codigo} </Text>
      </View>
    );
  }
}
