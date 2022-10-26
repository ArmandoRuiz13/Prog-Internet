import SelectDropdown from 'react-native-select-dropdown'
import { Text, View, Button,TextInput,Image } from 'react-native'
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
      imagenInfo: "",
      tareaInfo: "",
      nombreInfo: "",
      idInfo: "",
    };
  }
  //obtener datos del registro seleccionado
  obtenerDatos = (codigo) => {
      let _this = this
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      var result=(xhttp.responseText);
      // crear un arreglo separados por comas
      var datos= result.split(",");
      // asignar los valores del arreglo a las variables
      _this.setState({idInfo:datos[0]});
      _this.setState({nombreInfo:datos[1]});
      _this.setState({tareaInfo:datos[2]});
      _this.setState({imagenInfo:datos[3]});
      }
    }
    //console.log(this.state.nombreInfo);
    xhttp.open("GET", "https://pinternet13.000webhostapp.com/ObtenerDatos.php?codigo="+this.state.codigo, true);
    xhttp.send();
  }
  componentDidMount(){
    let _this = this
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var result=(xhttp.responseText);   
        var datos= JSON.parse(result);
          _this.setState({datosServer:datos});
        }
      }
      xhttp.open("GET", "https://pinternet13.000webhostapp.com/MostrarCodigo.php", true);
      xhttp.send();
    }

    render() {
        const RestaurarValores = () => {  
            this.setState({nombreInfo: ""});
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
            if(this.state.codigo == "" || this.state.imagen == "" || this.state.tarea == ""){
                MensajeError();
            }if(this.state.imagen == ""){
              const xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function(){
                if(xhttp.readyState == 4 && xhttp.status == 200){
                  //console.log(xhttp.responseText);
                  if(xhttp.responseText != 0){
                    alert("Se modifico la tarea con exito");;   
                      RestaurarValores();           
                    }else{
                      MensajeError();
                    }
                  }
                };
                xhttp.open("GET", "https://pinternet13.000webhostapp.com/modificar.php?codigo="+this.state.codigo+"&tarea="+this.state.tarea+"&imagen="+this.state.imagenInfo, true);   
                xhttp.send();
            }if(this.state.tarea == ""){
              const xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function(){
                if(xhttp.readyState == 4 && xhttp.status == 200){
                  //console.log(xhttp.responseText);
                  if(xhttp.responseText != 0){
                    alert("Se modifico la imagen con exito");;   
                      RestaurarValores();           
                    }else{
                      MensajeError();
                    }
                  }
                };
                xhttp.open("GET", "https://pinternet13.000webhostapp.com/modificar.php?codigo="+this.state.codigo+"&tarea="+this.state.tareaInfo+"&imagen="+this.state.imagen, true);   
                xhttp.send();
            }else{
            const xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function(){
                  if(xhttp.readyState == 4 && xhttp.status == 200){
                    //console.log(xhttp.responseText);
                    if(xhttp.responseText != 0){
                      Exito();   
                      RestaurarValores();           
                    }else{
                      MensajeError();
                    }
                  }
              };
              xhttp.open("GET", "https://pinternet13.000webhostapp.com/modificar.php?codigo="+this.state.codigo+"&tarea="+this.state.tarea+"&imagen="+this.state.imagen, true);   
              xhttp.send();
            }
        }
        console.log(this.state.imagenInfo);
        const informacionc = this.state.datosServer;
        return (
            <View>
                <Text style={{fontSize:30,margin: 10}}>Registro a modificar:</Text>
                <SelectDropdown style={{margin: 10, backgroundColor: '#fff', borderRadius: 5, borderWidth: 1, borderColor: '#ccc', padding: 10, width: 300, height: 50}}
                    data={informacionc}
                    onSelect={(selectedItem, index) => {
                        this.setState({codigo: selectedItem});//esperar para que se cargue el codigo 1 seg
                        setTimeout(() => {
                            this.obtenerDatos(this.state.codigo);
                        }, 1000);
                        //console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />
                <Text style={{fontSize:20,margin: 10}}>ID: {this.state.idInfo}</Text>
                <Text style={{fontSize:20,margin: 10}}>Nombre: {this.state.nombreInfo}</Text>
                <Text style={{fontSize:20,margin: 10}}>Tarea: {this.state.tareaInfo}</Text>
                <Image style={{width: 100,height:100}} source ={{uri:this.state.imagenInfo ? this.state.imagenInfo:null}}></Image>
                <Text style={{textAlign:'center'}}>Tarea:</Text>
                <View style={{marginLeft:85, borderWidth:2, borderColor:"#460089",
                textAlign:'center', heigh:60, maxWidth:240, fontSize: 20, marginBottom:25,}}>
                <TextInput
                placeholderTextColor="#000"
                placeholder="" 
                onChangeText = {tarea => this.setState({tarea})}  />
                </View>
                <Text style={{textAlign:'center'}}>Imagen:</Text>
                <View style={{marginLeft:85, borderWidth:2, borderColor:"#460089",
                textAlign:'center', heigh:60, maxWidth:240, fontSize: 20, marginBottom:25,}}>
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
