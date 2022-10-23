import React from 'react';
import {View,Text,StyleSheet, ScrollView, Image, SafeAreaView, FlatList, StatusBar, TouchableOpacity} from 'react-native';
import { AppRegistry } from 'react-native';
import ExternalLink from '../components/Externalurl';



export default function Home(){
        return(
            <>
            <ScrollView>
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.banner} source={require('../img/series/portadaseries.jpg')} />
            </View>
                
            <View style={styles.contenedor}>
            <Text style={styles.titulos}>Comedia</Text>
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/serie1.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:La que se avecina</Text>
                        <Text style={styles.desserires}>Temporadas: 12</Text>
                    </View>
                </View> 
                
                 <View style={styles.viewseries}>
                 
                    <Image style={styles.imgpelis} source={require('../img/series/serie2.jpg')}/>
                    <ExternalLink url="https://www.youtube.com/watch?v=3wCGThQH70E">
                    <View>
                        <Text style={styles.desserires}>Titulo:A esta privada le hace falta barrio</Text>
                        <Text style={styles.desserires}>Temporadas: 2</Text>
                    </View>
                    </ExternalLink> 
                </View> 
                
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/serie3.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:Los Simpson</Text>
                        <Text style={styles.desserires}>Temporadas:67</Text>
                    </View>
                </View>  
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/serie4.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:Las chicas del cable</Text>
                        <Text style={styles.desserires}>Temporadas: 5</Text>
                    </View>
                </View>  
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/serie5.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:Friends       </Text>
                        <Text style={styles.desserires}>Temporadas:10     </Text>
                    </View>
                </View>  
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/serie6.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:Seinfeld      </Text>
                        <Text style={styles.desserires}>Temporadas:9</Text>
                    </View>
                </View> 


                <Text style={styles.titulos}>Aventura</Text>
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/aven1.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:Star trek picard</Text>
                        <Text style={styles.desserires}>Temporadas: 2</Text>
                    </View>
                </View> 

                 <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/aven2.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:La materia oscura</Text>
                        <Text style={styles.desserires}>Temporadas: 1</Text>
                    </View>
                </View> 
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/aven3.jpg')}/>
                    <ExternalLink url="https://www.youtube.com/watch?v=xK7S9mrFWL4">
                    <View>
                        <Text style={styles.desserires}>Titulo:Sherlock     </Text>
                        <Text style={styles.desserires}>Temporadas:1</Text>
                    </View>
                    </ExternalLink>
                </View>  
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/aven4.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:Hora de aventura</Text>
                        <Text style={styles.desserires}>Temporadas: 10</Text>
                    </View>
                </View>  
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/aven5.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:El ministerio del tiempo</Text>
                        <Text style={styles.desserires}>Temporadas:4    </Text>
                    </View>
                </View>  
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/aven6.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:I am not okay with this</Text>
                        <Text style={styles.desserires}>Temporadas:1</Text>
                    </View>
                </View> 


                <Text style={styles.titulos}>Fantasía</Text>
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/fan1.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:Juego de tronos</Text>
                        <Text style={styles.desserires}>Temporadas: 8</Text>
                    </View>
                </View> 

                 <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/fan2.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:The Witcher</Text>
                        <Text style={styles.desserires}>Temporadas: 1</Text>
                    </View>
                </View> 
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/fan3.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:el cazador y la reina de hielo</Text>
                        <Text style={styles.desserires}>Temporadas:1</Text>
                    </View>
                </View>  
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/fan4.jpg')}/>
                    <ExternalLink url="https://www.youtube.com/watch?v=e9aty0dSc2Y">
                    <View>
                        <Text style={styles.desserires}>Titulo:Supernatural      </Text>
                        <Text style={styles.desserires}>Temporadas: 15</Text>
                    </View>
                    </ExternalLink>
                </View>  
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/fan5.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:Outlander    </Text>
                        <Text style={styles.desserires}>Temporadas:6    </Text>
                    </View>
                </View>  
                <View style={styles.viewseries}>
                    <Image style={styles.imgpelis} source={require('../img/series/fan6.jpg')}/>
                    <View>
                        <Text style={styles.desserires}>Titulo:Los protegidos: El regreso</Text>
                        <Text style={styles.desserires}>Temporadas:1</Text>
                    </View>
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
        backgroundColor: '#3F59FF'
    },
    imgpelis:{
        width: 120,
        height: 180,
        marginRight:10,
    },
    titulos:{
        fontWeight: 'bold',
        fontSize: 24,
        marginRight: 10,
        marginTop: 25,
        textAlign: 'center',
        color: '#ffff',
    },
    viewseries:{
        flexDirection: 'row',
        marginTop: 10,
        flex: 1,
        marginHorizontal: 10,
    },
    desserires:{
        flex: 1,
        fontSize: 16,
        width: '90%',
        flex: 1,
        color: '#ffff',
        
    }
})



