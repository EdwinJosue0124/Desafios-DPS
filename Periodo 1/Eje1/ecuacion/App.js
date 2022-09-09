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
  const [a,setA]=useState("")
  const [b,setB]=useState("")
  const [c,setC]=useState("")
  const [x1,setX1]=useState("")
  const [x2,setX2]=useState("")

  const proceso=() =>{
    var discriminante=Math.pow(b,2)-(4*a*c)

    if(discriminante<0){
    alert("La ecuacion ingresada no tiene soluciones en los numeros reales")
    setA("")
    setB("")
    setC("")
    setX1("")
    setX2("")
  }
    else{
    if(a!="" && b!="" && c!=""){
    setX1((-b+Math.sqrt(discriminante))/(2*a))
    setX2((-b-Math.sqrt(discriminante))/(2*a))
    setA("")
    setB("")
    setC("")
    }
    else alert("Tienes que rellenar todos los campos")
  }
}
  
  return(
    <TouchableWithoutFeedback
      onPress={() => {Keyboard.dismiss();}}
    >
    <View style={styles.container}>
      <Text style={styles.titulo}>Ecuacion Cuadratica</Text>
      <Text style={styles.titulo1}>Ingrese los valores numericos</Text>
      <TextInput 
        keyboardType="number-pad"
        placeholder="a"
        style={styles.inputs}
        onChangeText={setA}
        value={a}
      />
      <TextInput
        keyboardType="number-pad" 
        placeholder="b"
        style={styles.inputs}
        onChangeText={setB}
        value={b}
      />
      <TextInput
        keyboardType="number-pad"
        placeholder="c"
        style={styles.inputs}
        onChangeText={setC}
        value={c}
      />
        <TouchableOpacity
        style={styles.btn}
        onPress={proceso}
        >
        <Text style={styles.textobtn}>Calcular</Text>
        </TouchableOpacity>

      <StatusBar style='auto'/>
      <Text style={styles.textSalida}>X1 = {x1}</Text>
      <Text style={styles.textSalida}>X2 = {x2}</Text>
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
