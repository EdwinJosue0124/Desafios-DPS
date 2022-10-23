import React, { Component } from 'react';
import {View,Text,StyleSheet, ScrollView, Image, SafeAreaView, FlatList,} from 'react-native';


const comedia =[
    {
        key: 1,
        name: 'La que se le avecina',
        imagen:  require('../img/series/serie1.jpg'),
        tem: '12',
    },
    {
        key: 2,
        name: 'A esta privada le hace falta barrio',
        imagen:  require('../img/series/serie2.jpg'),
        tem: '2',
    },
    {
        key: 3,
        name: 'Los Simpson',
        imagen:  require('../img/series/serie3.jpg'),
        tem: '60',
    }
];

class List extends Component{
    _renderItem(item){
        return(
            <Image style={{width: 120, height: 180,}} source={{uri: item.imagen}}/>
        )
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <FlatList 
                    renderItem={({item}) => this._renderItem(item)}
                    data={comedia}
                />
            </View>
        )
    }
}
export default List