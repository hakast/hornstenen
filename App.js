import React from 'react';
import { 
  View, 
  Image,
  Linking,
  TouchableOpacity,
    } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import {
  // createStackNavigator,
  // createMaterialTopTabNavigator,
  TabNavigator,
  createAppContainer,
    } from 'react-navigation';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomePage from './components/pages/HomePage';
import FriendAssoc from './components/pages/FriendAssoc';
import SupportUs from './components/pages/SupportUs';
import Pics from './components/pages/Pics';
import Contact from './components/pages/Contact';

const TabScreen = createMaterialTopTabNavigator(
  {
    Hem: { screen: HomePage },
    Kompis: { screen: FriendAssoc },
    // Kompis: { onPress:    
    //   (<TouchableOpacity
    //     onPress={() => {Linking.openURL('http://lpkamrat.se/')}}
    //     >
    //   </TouchableOpacity>)
    // },
    Stöd: { screen: SupportUs },
    Bilder: { screen: Pics },
    Kontakt: { screen: Contact },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#5B5A5A',
      style: {
        backgroundColor: '#F3F2F2',
        marginTop: 30,
      },
      labelStyle: {
        textAlign: 'center',
      },
      tabStyle: {
        marginLeft: -18,
      },
      indicatorStyle: {
        borderBottomColor: 'red',
        borderBottomWidth: 2,
      },
    },
  }
);
 
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FFFFFF',
        marginTop: 20,
      },
      headerTintColor: '#FFFFFF',
      title: '',
      headerTitle: (
        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <Image
                source={require('./assets/images/hornstenen.png')}
                style={{
                  width: 348, 
                  height:18, 
                  paddingTop: 70, 
                  marginLeft: 30,
                  marginRight: 30,
                }}
            />
        </View>
    ),
    },
  },
});
export default createAppContainer(App);