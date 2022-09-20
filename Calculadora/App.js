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
       setNum1:"",
       setNum2:"",
     };
   }
   render() {
    const _this = this;
    const  btnClickS =  () =>{
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         //Typical action to be performed when the document is ready:
        console.log(xhttp.responseText);
        var resultado =(xhttp.responseText)
        _this.setState({resultado:resultado});
      }
      };
        xhttp.open("GET", "https://pinternet13.000webhostapp.com/tarea.php?num1="+this.state.setNum1+"&num2="+this.state.setNum2+"&op=suma", true);
        xhttp.send();
    }
    const  btnClickR =  () =>{
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         //Typical action to be performed when the document is ready:
        console.log(xhttp.responseText);
        var resultado =(xhttp.responseText)
        _this.setState({resultado:resultado});
      }
      };
        xhttp.open("GET", "https://pinternet13.000webhostapp.com/tarea.php?num1="+this.state.setNum1+"&num2="+this.state.setNum2+"&op=resta", true);
        xhttp.send();
    }
    const  btnClickM =  () =>{
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         //Typical action to be performed when the document is ready:
        console.log(xhttp.responseText);
        var resultado =(xhttp.responseText)
        _this.setState({resultado:resultado});
      }
      };
        xhttp.open("GET", "https://pinternet13.000webhostapp.com/tarea.php?num1="+this.state.setNum1+"&num2="+this.state.setNum2+"&op=mul", true);
        xhttp.send();
    }
    const  btnClickD =  () =>{
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         //Typical action to be performed when the document is ready:
        console.log(xhttp.responseText);
        var resultado =(xhttp.responseText)
        _this.setState({resultado:resultado});
      }
      };
        xhttp.open("GET", "https://pinternet13.000webhostapp.com/tarea.php?num1="+this.state.setNum1+"&num2="+this.state.setNum2+"&op=div", true);
        xhttp.send();
    }
     return (
       <View style={styles.screen}>
         <Text style={styles.textcal}> Calculadora Chafa </Text>
         <TextInput style={styles.input} placeholder="Num" keyboardType='numeric' onChangeText={setNum1 => this.setState({setNum1})}/>
         <View style={styles.boton}>
           <Button title="+" onPress={btnClickS}/>
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