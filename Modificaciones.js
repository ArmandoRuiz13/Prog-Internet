import SelectDropdown from 'react-native-select-dropdown'
import { Text, View, Button,TextInput } from 'react-native'
import React, { Component} from 'react'


//Seleccionar un registro para eliminar
export default class Bajas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datosServer: "",
            codigo: "",
            imagen: "",
            tarea: "",
            nombre: "",
        };
      }
      componentDidMount(){
        let _this = this
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
          var result=(xhttp.responseText);   
          var datos= JSON.parse(result);
          //crear arreglo con los nombres de los registros
            var arreglo=[];
            for (let i = 0; i < datos.length; i++) {
                arreglo.push(datos[i].Codigo);
            }
          _this.setState({datosServer:arreglo});
        }
      }
      xhttp.open("GET", "https://pinternet13.000webhostapp.com/MostrarDatos.php", true);
      xhttp.send();
    }
    render() {
        const RestaurarValores = () => {  
            this.setState({nombre: ""});
            this.setState({codigo: ""});
            this.setState({imagen: ""});
            this.setState({tarea: ""});
          }
      
          const Exito = () => {
            alert("El registro se ha modificado correctamente");
          }
      
          const MensajeError = () => {
            alert("No se pudo modificar el registro");
          }
        let _this = this
        const PressedButton = () => {
            if(this.state.nombre == ""){
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
              xhttp.open("GET", "https://pinternet13.000webhostapp.com/modificar.php?codigo="+this.state.codigo+"&tarea="+this.state.Tarea+"&imagen="+this.state.Imagen, true);   
              xhttp.send();
            }
        }

        const countries = this.state.datosServer;
        return (
            <View>
                <Text style={{fontSize:30,margin: 10}}>Registro a modificar:</Text>
                <SelectDropdown style={{margin: 10, backgroundColor: '#fff', borderRadius: 5, borderWidth: 1, borderColor: '#ccc', padding: 10, width: 300, height: 50}}
                    data={countries}
                    onSelect={(selectedItem, index) => {
                        this.setState({codigo: selectedItem});
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />
                <View style={{marginLeft:85, borderWidth:2, borderColor:"#460089",
                textAlign:'center', heigh:60, maxWidth:240, fontSize: 20, marginBottom:25,}}>
                <Text >Tarea:</Text>
                <TextInput
                placeholderTextColor="#000"
                placeholder="" 
                onChangeText = {tarea => this.setState({tarea})}  />
                </View>
                <View style={{marginLeft:85, borderWidth:2, borderColor:"#460089",
                textAlign:'center', heigh:60, maxWidth:240, fontSize: 20, marginBottom:25,}}>
                <Text >Imagen:</Text>
                <TextInput
                placeholderTextColor="#000"
                placeholder="" 
                onChangeText = {imagen => this.setState({imagen})}  />
                </View>
                <Button title = 'Continuar' onPress={() => PressedButton()}>
                </Button>
                </View>
            
        )
  }        
};
