/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { StatusBar } from "react-native";
 import React from "react";
 import { useState } from "react";
 import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
 
 export default function App(){
   const [nombre_empleado,setNombre_Empleado]=useState("")
   const [salario_base,setSalario_Base]=useState("")
   const [salario_neto,setSalario_Neto]=useState("")
   const [memoria_nombre,setMemoria_Nombre]=useState("")
 
   const proceso=() =>{
     if(nombre_empleado!="" && salario_base!=""){
      if(salario_base<0){
        alert("No se pueden ingresar valores negativos")
        setNombre_Empleado("")
        setSalario_Base("")
      }
      else{
      var isss=salario_base*0.03;
      var afp=salario_base*0.04;
      var renta=salario_base*0.05;
      setMemoria_Nombre(nombre_empleado)
      setSalario_Neto((salario_base-isss-afp-renta).toFixed(2))
      setNombre_Empleado("")
      setSalario_Base("")
     }
    }
     else alert("Tienes que rellenar todos los campos")
   }
   
   return(
     <TouchableWithoutFeedback
       onPress={() => {Keyboard.dismiss();}}
     >
     <View style={styles.container}>
       <Text style={styles.titulo}>Calculo del Salario</Text>
       <TextInput 
         placeholder="Juan"
         style={styles.inputs}
         onChangeText={setNombre_Empleado}
         value={nombre_empleado}
       />

      <Text style={styles.titulo1}>Ingrese el nombre del empleado</Text>
       <TextInput
         keyboardType="number-pad" 
         placeholder="1000"
         style={styles.inputs}
         onChangeText={setSalario_Base}
         value={salario_base}
       />
        <Text style={styles.titulo1}>Ingrese el salario base</Text>
         <TouchableOpacity
         style={styles.btn}
         onPress={proceso}
         >
         <Text style={styles.textobtn}>Calcular</Text>
         </TouchableOpacity>
 
       <StatusBar style='auto'/>
       <Text style={styles.textSalida}>Nombre del empleado : {memoria_nombre}</Text>
       <Text style={styles.textSalida}>Salario neto : {salario_neto}</Text>
     </View>
     </TouchableWithoutFeedback>
   );
 
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#f1f1f1',
     alignItems: 'center',
     justifyContent: 'center',
   },
   titulo: {
     fontSize: 30,
     color: '#000',
     fontWeight:'bold',
   },
   titulo1: {
     fontSize: 15,
     color: 'gray',
   },
   inputs:{
     backgroundColor: '#fff',
     textAlign: 'center',
     padding: 10,
     width: '80%',
     height: 50,
     marginTop: 20,
     borderRadius: 30,
   },
   btn:{
     backgroundColor:'#3D57FF',
     paddingTop: 15,
     marginTop: 20,
     width: '60%',
     height: 50,
     borderRadius: 30,
   },
   textobtn:{
     textAlign: 'center',
     color: 'white',
   },
   textSalida: {
     marginTop: 5,
     padding: 10,
     fontSize: 20,
     alignSelf: 'stretch',
   },
 
 })
 