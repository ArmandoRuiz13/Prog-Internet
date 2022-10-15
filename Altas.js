import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground} from 'react-native';

export default class Altas extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      nombre: "",
      codigo: "",
      tarea: "",
      imagen: "",      
      textoNombre: "Ingrese el nombre..",
      textoCodigo: "Ingrese el código..",
      textoTarea: "Tarea a realizar..",
      textoImagen: "Ingrese URL de la imagen..",
    };
  }

  render() {    
    const _this = this;    

    const RestaurarValores = () => {  
      this.setState({textoNombre: "Ingrese el nombre.."});
      this.setState({textoCodigo: "Ingrese el código.."});
      this.setState({textoTarea: "Tarea a realizar.."});
      this.setState({textoImagen: "Ingrese URL de la imagen.."});
      this.setState({nombre: ""});
      this.setState({codigo: ""});
      this.setState({tarea: ""});
      this.setState({imagen: ""});
    }

    const Exito = () => {
      alert("El registro se ha dado de alta :D");
    }

    const MensajeError = () => {
      alert("No se pudo dar de alta el registro");
    }

    const PressedButton = () => {

      if(this.state.nombre == "" || this.state.codigo == "" || this.state.tarea == "" || this.state.imagen == ""){
        MensajeError();
      }else{

        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function(){
            if(xhttp.readyState == 4 && xhttp.status == 200){
              console.log(xhttp.responseText);
              if(xhttp.responseText != 0){
                Exito();   
                RestaurarValores();           
              }else{
                MensajeError();
              }
            }
        };
        xhttp.open("GET", "https://pinternet13.000webhostapp.com/Altas.php?nombre="+_this.state.nombre+"&codigo="+_this.state.codigo+"&tarea="+_this.state.tarea+"&imagen="+_this.state.imagen, true);      
        xhttp.send();          
      }      
    }

    return (
      <ImageBackground  source={require("./Imagenes/fondo.jpeg")} style ={{flex:1}}>
        <Text style = {styles.estPrincipal}> Realizar alta de registro </Text>
        <TextInput 
          style = {styles.estInput} 
          placeholder = {this.state.textoNombre}
          onChangeText = {nombre => this.setState({nombre})}          
        />
        <TextInput 
          style = {styles.estInput}
          placeholder = {this.state.textoCodigo}
          keyboardType='numeric'
          onChangeText={codigo => this.setState({codigo})}             
        />
        <TextInput 
          style = {styles.estInput}
          placeholder = {this.state.textoTarea}
          onChangeText={tarea => this.setState({tarea})}
        />
        <TextInput 
          style = {styles.estInput}
          placeholder = {this.state.textoImagen}
          onChangeText={imagen => this.setState({imagen})}
        />
        <View style = {styles.estBoton}>
          <Button
            title = 'registrar'
            onPress={() => PressedButton()}            
            >
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  estPrincipal:{
    alignSelf:"center",
    fontSize:22,
    color:"black",
    marginTop:25,
    marginBottom: 15
  },

  estBoton:{
    marginTop:30,
    alignSelf: "center",
    width:120,
    height:100    
  },

  estInput:{
    marginTop:20,
    marginLeft: 25,
    marginRight: 30,
    borderWidth:2,
    fontSize: 18
  }

});
