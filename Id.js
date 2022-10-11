import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

export default class Id extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let recibir= this.props.route.params
    return (
      <View>
        <Text> ID:{recibir.id} </Text>
        <Text> Nombre:{recibir.nombre} </Text>
        <Text> Codigo:{recibir.codigo} </Text>
        <Image style={{width: 100,height:100}} source ={{uri:recibir.imagen}}></Image>
      </View>
    );
  }
}
