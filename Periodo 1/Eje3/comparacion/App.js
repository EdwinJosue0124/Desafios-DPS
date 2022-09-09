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
   const [numero_mayor,setNumero_Mayor]=useState("")
   const [numero_menor,setNumero_Menor]=useState("")
   const [numero_mayor_10,setNumero_Mayor_10]=useState("")
   const [numero_menor_5,setNumero_Menor_5]=useState("")
 
   const proceso=() =>{
     if(a!="" && b!="" && c!=""){
      if(a<=0 || b<=0 || c<=0){
        alert("No se pueden ingresar numeros negativos ni 0")
        setA("")
        setB("")
        setC("")
      }
      else{
        var n1=parseInt(a);
        var n2=parseInt(b);
        var n3=parseInt(c);

         /** condicional para numero 1 */
        if(n1>n2 && n1>n3){
            setNumero_Mayor(n1)
        }
        else{
          if(n2>n3){
            setNumero_Menor(n3)
          }
          else{
            setNumero_Menor(n2)
          }
          
        }
        /** condicional para numero 2 */
        if(n2>n3 && n2>n1){
          setNumero_Mayor(n2)
        }
        else{
          if(n1>n3){
            setNumero_Menor(n3)
          }
          else{
            setNumero_Menor(n1)
          }
        }

         /** condicional para numero 3 */
         if(n3>n1 && n3>n2){
          setNumero_Mayor(n3)
         }
         else{
          if(n1>n2){
            setNumero_Menor(n2)
          }
          else{
            setNumero_Menor(n1)
          }
         }
      }
      /**Calculo de numeros mayor y menor */
      if(numero_menor>10){
        setNumero_Mayor_10(numero_mayor+10)
      }
      else{
        setNumero_Mayor_10("El numero menor no es mayor a 10")
      }
      if(numero_mayor<50){
        setNumero_Menor_5(numero_menor-5)
      }
      else{
        setNumero_Menor_5("El numero mayor no es menor a 50")
      }
     }
     else alert("Tienes que rellenar todos los campos")

     setA("")
     setB("")
     setC("")
 }
   
   return(
     <TouchableWithoutFeedback
       onPress={() => {Keyboard.dismiss();}}
     >
     <View style={styles.container}>
       <Text style={styles.titulo}>Numeros</Text>
       <Text style={styles.titulo1}>Ingrese numeros enteros</Text>
       <TextInput 
         keyboardType="number-pad"
         placeholder="1"
         style={styles.inputs}
         onChangeText={setA}
         value={a}
       />
       <TextInput
         keyboardType="number-pad" 
         placeholder="2"
         style={styles.inputs}
         onChangeText={setB}
         value={b}
       />
       <TextInput
         keyboardType="number-pad"
         placeholder="3"
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
       <Text style={styles.textSalida}>Numero mayor = {numero_mayor}</Text>
       <Text style={styles.textSalida}>Numero mayor +10 = {numero_mayor_10}</Text>
       <Text style={styles.textSalida}>Numero menor = {numero_menor}</Text>
       <Text style={styles.textSalida}>Numero menor -5 = {numero_menor_5}</Text>
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
 