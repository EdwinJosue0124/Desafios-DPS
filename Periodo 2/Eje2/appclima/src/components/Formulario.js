import React, {useState} from "react";
import { Text, TextInput, View, StyleSheet,Alert, TouchableOpacity, ActivityIndicator }
from 'react-native';
import {Picker} from '@react-native-picker/picker';
import weatherapi from './weatherapi';

const Formulario=({})=>{
//const {ciudad}=input;
const [loading,setLoading]=useState(false);
//const [data,setData] = useState([]);
const [input,setInput]=useState("");
const [data,setData]=useState([]);


/**const consultaciudad=()=>{
    if(ciudad.trim()==="0"){
        Alerta();return;
    }
}

const Alerta=()=>{
    Alert.alert('Error','Debe seleccionar una ciudad'),[{Text:'Entendido'}]
}*/

Show=(value)=>{
    Alert.alert(value);
}
        return(
            <>
            <View>
            <View style={styles.lista}>  
                <Picker
                //selectedValue={ciudad}
                //onValueChange={ciudad=>setInput({...input,ciudad})}
                onValueChange={this.Show.bind()}
                
                >
                    <Picker.Item label="Selecciona un Ciudad" value="0" />
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
                {loading && (
                    <View>
                        <ActivityIndicator size={'large'} color='#000'/>
                    </View>
                )}
           </View>
            </>   
);

}

const styles= StyleSheet.create({
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
        borderBottomWidth: 2,
        padding: 10,
        backgroundColor: '#ffff',
        fontSize: 10,
        borderRadius: 16,
    },
})
export default Formulario;