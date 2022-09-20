/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component} from 'react';
import { View, Text,StyleSheet,TextInput,Button } from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    var num1 = parseInt(this.state.setNum1);
    var num2 = parseInt(this.state.setNum2);
      const btnClickS = () => { // calculadora
        resultado = num1 + num2;
        this.setState({resultado:resultado});
      }
      const btnClickR = () => { // calculadora
        resultado = num1 - num2;
        this.setState({resultado:resultado});
      }
      const btnClickM = () => { // calculadora
        resultado = num1 * num2;
        this.setState({resultado:resultado});
      }
      const btnClickD = () => { // calculadora
        resultado = num1 / num2;
        this.setState({resultado:resultado});
      }
    return (
      <View style={styles.screen}>
        <Text style={styles.textcal}> Calculadora Chafa </Text>
        <TextInput style={styles.input} placeholder="Num" keyboardType='numeric' onChangeText={setNum1 => this.setState({setNum1})}/>
        <View style={styles.boton}>
          <Button style={styles.boton1} title="+" onPress={btnClickS}/>
          <Button title="-" onPress={btnClickR}/>
          <Button title="*" onPress={btnClickM}/>
          <Button title="/" onPress={btnClickD}/>
        </View>
        <TextInput style={styles.input} placeholder="Num" keyboardType='numeric' onChangeText={setNum2 => this.setState({setNum2})}/>
        <Text style={styles.textcal} > Resultado: {this.state.resultado} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screen:{
    backgroundColor: "#434242",
    flex: 1,
  },
  textcal:{
  fontSize:50,
  color:"orange",
  textAlign:"center",
  },
  input:{
    borderWidth: 2,
    fontSize:25,
    marginTop:10,
    marginHorizontal:10,
    padding: 10,
    backgroundColor:"red",
  },
boton:{
  display:"flex",
  width:200,
  height:140,
  marginLeft:110,
  marginTop:10,
  backgroundColor: "orange",
  },
});