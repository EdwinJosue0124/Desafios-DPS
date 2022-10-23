import React from 'react';
import {View,Text,StyleSheet, ScrollView, Image, SafeAreaView, FlatList, StatusBar, TouchableOpacity} from 'react-native';
import { AppRegistry } from 'react-native';
import ExternalLink from '../components/Externalurl';



export default function Peliculas(){

    return(
        <>
        <ScrollView>
        <View style={{ flexDirection: 'row' }}>
            <Image style={styles.banner} source={require('../img/prox/fondo.png')} />
        </View>
            
        <View style={styles.contenedor}>
        <Text style={styles.titulos}>Peliculas</Text>
            <ExternalLink url="https://www.youtube.com/watch?v=5PSNL1qE6VY">
            <View>
                <Image style={styles.imgpelis} source={require('../img/prox/peli1.jpg')}/>
            </View>
            </ExternalLink>
            <View style={styles.des}>
                        <Text >Titulo:Avatar</Text>
                        <Text >Categoria: Fantasía</Text>
                        <Text >Fecha de estreno: 12/12/2022 </Text>
                        
                </View>
            <View>
                <Image style={styles.imgpelis} source={require('../img/prox/peli2.jpg')}/>
            </View>
            <View style={styles.des}>
            <Text >Titulo:Matrix Resurrection</Text>
                        <Text >Categoria: Ciencia Ficción</Text>
                        <Text >Fecha de estreno: 30/10/2020 </Text>
                </View>
            <View>
                <Image style={styles.imgpelis} source={require('../img/prox/peli3.jpg')}/>
            </View>   
            <View style={styles.des}>
            <Text >Titulo:John Wick 2: un nuevo día para matar</Text>
                        <Text >Categoria: Acción</Text>
                        <Text >Fecha de estreno: 24/12/2022 </Text>
                </View>

        <Text style={styles.titulos}>Series</Text>
        <View>
                <Image style={styles.imgpelis} source={require('../img/prox/seri1.jpg')}/>
            </View>
            <View style={styles.des}>
            <Text >Titulo:13 Reasons Why</Text>
                        <Text >Categoria:Drama juvenil</Text>
                        <Text >Fecha de estreno: 20/11/2022 </Text>
                </View>
            <ExternalLink url="https://www.youtube.com/watch?v=DQ4r7HegRQw">
            <View>
                <Image style={styles.imgpelis} source={require('../img/prox/seri2.jpg')}/>
            </View>
            </ExternalLink>
            <View style={styles.des}>
            <Text >Titulo:La casa de papel</Text>
                        <Text >Categoria: Crimen</Text>
                        <Text >Fecha de estreno:30/11/2022 </Text>
            </View>
            <View>
                <Image style={styles.imgpelis} source={require('../img/prox/seri3.jpg')}/>
            </View>
            <View style={styles.des}>
            <Text >Titulo:Hawkeye</Text>
                        <Text >Categoria: Acción</Text>
                        <Text >Fecha de estreno: 31/12/2022</Text>
            </View>

        </View>
        
        </ScrollView>
        </>



);
}

const styles =StyleSheet.create({
banner:{
    height: 250,
    flex:1,
},
contenedor:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3F59FF'
    
},
imgpelis:{
    width: 120,
    height: 180,
    marginRight:10,
    marginTop: 20,
},
titulos:{
    fontWeight: 'bold',
    fontSize: 24,
    marginRight: 10,
    marginTop: 10,
    color: '#ffff',
},
des:{
    marginTop:10,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: '#ffff',
}
})