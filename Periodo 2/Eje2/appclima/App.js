/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  TextInput, Alert, TouchableOpacity
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
//import Formulario from './src/components/Formulario';

export default function App () {
const [loading,setLoading]=useState(false);
//const [data,setData] = useState([]);
const [info,setInfo]=useState([]);
const[ciudad, setCiudad] = useState(""); //input


const buscarclima =()=>{
    if(ciudad.trim()===""){
      alerta();return;
    } 
    useEffect(()=>{
      getWeather();
    },[])
    
    const getWeather=()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=3d22ddd3ef9a2c9f973a40bc7d78afac&units=metric`)
    .then(data=>data.json())
    .then(results=>{
      console.log(results)
    })
    
  }

   
};


const alerta=()=>{
  Alert.alert('Error','Se debe seleccionar una ciudad',[{Text:'Entendido'}])
}

  return (
    <>
      <View style={styles.root}>
        <ImageBackground source={require('./src/assets/back.jpg')} resizeMode='cover' style={styles.imagen}>
            
        <View style={styles.lista}>  
                <Picker
                selectedValue={ciudad}
                //onValueChange={ciudad=>setInput({...input,ciudad})}
                onValueChange={(itemValue)=> setCiudad(itemValue)}
                
                >
                    <Picker.Item label="Selecciona un Ciudad" value="" />
                    <Picker.Item label="Aguilares" value='aguilares' />
                    <Picker.Item label="Apopa" value='apopa' />
                    <Picker.Item label="Ayutuxtepeque" value='Ayutuxtepeque' />
                    <Picker.Item label="Ciudad Delgado" value='Ciudad Delgado' />
                    <Picker.Item label="Cuscatancingo" value='Cuscatancingo' />
                    <Picker.Item label="El Paisnal" value='El Paisnal' />
                    <Picker.Item label="Guazapa" value='Guazapa' />
                    <Picker.Item label="Ilopango" value='Ilopango' />
                    <Picker.Item label="Mejicanos" value='Mejicanos' />
                    <Picker.Item label="Nejapa" value='Nejapa' />
                    <Picker.Item label="Panchimalco" value='Panchimalco' />
                    <Picker.Item label="Rosario de Mora" value='Rosario de Mora' />
                    <Picker.Item label="San Marcos" value='San Marcos' />
                    <Picker.Item label="San Martin" value='San Martin' />
                    <Picker.Item label="San Salvador" value='San Salvador' />
                    <Picker.Item label="Santiago Texacuangos" value='Santiago Texacuangos' />
                    <Picker.Item label="Santo Tomas" value='Santo Tomas' />
                    <Picker.Item label="Soyapango" value='Soyapango' />
                    <Picker.Item label="Tonacatepeque" value='Tonacatepeque' />
                </Picker>
            </View>
              <TouchableOpacity style={styles.btnBuscar} onPress={()=>buscarclima()}>
                    <Text style={styles.textobtn}>Buscar</Text>
              </TouchableOpacity>
              {loading && (
                    <View>
                        <ActivityIndicator size={'large'} color='#000'/>
                    </View>
                )}

                <View style={styles.infoView}>
                  <Text style={styles.nombrecuidad}>Apopa</Text>
                  <Text style={styles.fecha}>14:36:52, 22/10/2022</Text>
                  <Text style={styles.globaltem}>23 °C</Text>
                  <Text style={styles.temMaxMin}>Min:10 °C / Max 25 °C</Text>
                </View>
        </ImageBackground>
      </View>
     

      </>
  );
};

const styles = StyleSheet.create({
 root: {
  flex: 1,
 },
 imagen:{
  flex: 1,
  flexDirection: 'column',
 },
 lista:{
  borderBottomWidth: 3,
  padding: 5,
  marginVertical: 50,
  backgroundColor: '#ffff',
  fontSize: 19,
  borderRadius: 16,
},
btnBuscar:{
  alignSelf: 'center',
  width: '50%',
  padding: 10,
  backgroundColor: '#FB7A00',
  fontSize: 10,
  borderRadius: 16,
},
infoView:{
  alignItems: 'center',
},
nombrecuidad: {
  color: '#fffF',
  fontSize: 50,
  fontWeight: 'bold',
},
fecha: {
  color: '#ffff',
  fontSize: 22,
  marginVertical: 10,
},
globaltem: {
  color: '#ffff',
  fontSize: 40,
  marginVertical: 10,
},
temMaxMin: {
  color: '#ffff',
  fontSize: 25,
  marginVertical: 10,
  fontWeight: '500',
},
textobtn: {
  fontSize:18,
fontWeight:'bold',
textTransform:'uppercase',
textAlign:"center",
}
});



