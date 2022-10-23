import React from 'react';
import {View,Text,StyleSheet, ScrollView, Image, TouchableOpacity, Linking} from 'react-native';
import ExternalLink from '../components/Externalurl';



export default function Peliculas(){

        return(
            <>
            <ScrollView>
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.banner} source={require('../img/portadapelis.jpg')} />
            </View>
                
            <View style={styles.contenedor}>
            <Text style={styles.titulos}>Comedia</Text>
            <ScrollView horizontal>
                <ExternalLink url="https://www.youtube.com/watch?v=n6ir-qPI2PU">
                <View>
                    <Image style={styles.imgpelis} source={require('../img/peli1.jpg')}/>
                </View>
                </ExternalLink>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/peli2.jpg')}/>
                </View>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/peli3.jpg')}/>
                </View>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/peli4.jpg')}/>
                </View>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/peli5.jpg')}/>
                </View>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/peli6.jpg')}/>
                </View>   
            </ScrollView>

            <Text style={styles.titulos}>Romance</Text>
            <ScrollView horizontal>
            <View>
                    <Image style={styles.imgpelis} source={require('../img/rom1.jpg')}/>
                </View>
                <ExternalLink url="https://www.youtube.com/watch?v=kVrqfYjkTdQ">
                <View>
                    <Image style={styles.imgpelis} source={require('../img/rom2.jpg')}/>
                </View>
                </ExternalLink>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/rom3.jpg')}/>
                </View>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/rom4.jpg')}/>
                </View>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/rom5.jpg')}/>
                </View>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/rom6.jpg')}/>
                </View>  
            </ScrollView>

            <Text style={styles.titulos}>Acción</Text>
            <ScrollView horizontal>
            <ExternalLink url="https://www.youtube.com/watch?v=TcMBFSGVi1c">
                <View>
                    <Image style={styles.imgpelis} source={require('../img/acc1.jpg')}/>
                </View>
                </ExternalLink>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/acc2.jpg')}/>
                </View>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/acc3.jpg')}/>
                </View>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/acc4.jpg')}/>
                </View>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/acc5.jpg')}/>
                </View>
                <View>
                    <Image style={styles.imgpelis} source={require('../img/acc6.jpg')}/>
                </View>   
            </ScrollView>

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
        backgroundColor: '#3F59FF'
    },
    imgpelis:{
        width: 120,
        height: 180,
        marginRight:10
    },
    titulos:{
        fontWeight: 'bold',
        fontSize: 24,
        marginRight: 10,
        marginTop: 10,
        color: '#ffff',
        textAlign: 'center',
    },
})