import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Peliculas from '../screens/Peliculas'
import Series from '../screens/Series'
import Proximamente from '../screens/Proximamente'

const Tab=createBottomTabNavigator();
        export default function Navigation(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="peliculas" component={Peliculas} options={{title:'Peliculas'}}/>
                <Tab.Screen name="series" component={Series} options={{title:'Series'}}/>
                <Tab.Screen name="proximamente" component={Proximamente} options={{title:'Proximamente'}}/>
            </Tab.Navigator>
    );
}