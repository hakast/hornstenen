import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MapView } from 'expo';
import { 
    Alert,
    Text, 
    TextInput,
    View, 
    StyleSheet, 
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  import { Input } from 'react-native-elements';

export default class Contact extends React.Component {
  constructor(){
    super()
    this.state = {
      // isHidden: true,
      fname: '',
      lname: '',
      mail: '',
      msg: '',
    }
  }

  handleSubmit = () => {
    console.log(this.state.fname)
    const { fname, lname, mail, msg } = this.state;
    Alert.alert('Dina uppgifter: ', `\n ${fname} \n ${lname} \n ${mail} \n ${msg}`);
    
    var data =  qs.stringify({
      fname: this.state.fname,
      lname: this.state.lname,
      mail: this.state.mail,
      msg: this.state.msg
        });
        
    var config = { 'Content-Type': 'application/x-www-form-urlencoded' }
    
    axios.post('http://127.0.0.1:8080/myProjects/nav-app/api/index.php/?/user',
        data,
        config
        )    
        .catch(function (error) {
        console.log(error);
      });
  
    }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Phone and mail */}
        <View style={{marginBottom: 20, marginTop: 20,}}>
          <Text style={styles.headerText}>Kontakta oss!</Text>
          <Text style={styles.addressText}>Telefon: 076-902 41 05</Text>
          <Text style={styles.addressText}>E-mail: info@tingvallahemmet.se</Text>
        </View>
        {/* Contactdetails */}
        <View style={{marginBottom: 20,}}>
          <Text style={styles.headerText}>Placeringsansvarig</Text>
          <Text style={styles.addressText}>
            Föreståndare {'\n'}
            Caj Hellsten {'\n'}
            Tel: 0704 607 119 {'\n'}
            caj@tingvallahemmet.se	
            </Text>
        </View>
        
        {/* Contact form */}
        <Input
          value={this.state.fname}
          onChangeText={(fname) => this.setState({ fname })}       
          containerStyle={{
            borderWidth: 8, 
            borderColor: 'white' 
            }}
          inputStyle={{color: 'gray'}}
          style={styles.input}
          placeholderTextColor='gray'
          placeholder='Förnamn'
          leftIcon={
            <View style={{marginRight: 22}}>
              <Icon
                name='user'
                size={24}
                color='gray'
              />
            </View>
          }
        />
        <Input
          value={this.state.lname}
          onChangeText={(lname) => this.setState({ lname })}               
          containerStyle={{
            borderWidth: 8, 
            borderColor: 'white' 
            }}
          inputStyle={{color: 'gray'}}
          style={styles.input}
          placeholderTextColor='gray'
          placeholder='Efternamn'
          leftIcon={
            <View style={{marginRight: 28}}>
              <Icon
                name='male'
                size={24}
                color='gray'
              />
            </View>
          }
        />
        <Input
          value={this.state.mail}
          onChangeText={(mail) => this.setState({ mail })}               
          containerStyle={{
            borderWidth: 8, 
            borderColor: 'white' 
            }}
          inputStyle={{color: 'gray'}}
          style={styles.input}
          placeholderTextColor='gray'
          placeholder='Mailadress'
          leftIcon={
            <View style={{marginRight: 20}}>
              <Icon
                name='envelope'
                size={24}
                color='gray'
              />
            </View>
          }
        />
        <TextInput
          value={this.state.msg}
          onChangeText={(msg) => this.setState({ msg })}               
          style={styles.textInput}
          multiline={ true }
          placeholder='Meddelande'
          placeholderTextColor="gray"        
          />

        {/* Send button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.buttonText}>SKICKA</Text>
        </TouchableOpacity>

        {/* Map */}
        <View style={{ 
            alignSelf: 'stretch',
            // marginLeft: 5,
            // marginRight: 5,
            }}>
        {/* <MapView
          style={{ 
            height: 400,
            marginTop: 15, 
            borderWidth: 0.5, 
            borderColor: 'gray',
            // borderRadius: 5, 
          }}

          initialRegion={{
            latitude: 59.615600,
            longitude: 17.826960,
            latitudeDelta: 0.2122,
            longitudeDelta: 0.0421,
          }}          
          >
          <MapView.Marker
            coordinate={{
              latitude: 59.615600,
              longitude: 17.826960,
              }}
            title={"marker.title"}
            description={"Hornstenen"}
          />      
        </MapView> */}
        </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    // marginVertical: 5,
    // alignItems: 'stretch',    
    // alignItems: 'center',
  },
  headerText: {
    marginTop: 0,
    fontSize: 22,
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: 30,    
    letterSpacing: 1.3,
  },
  addressText: {
    marginTop: 0,
    fontSize: 15,
    color: 'gray',
    marginLeft: 30,    
    letterSpacing: 1.3,
  },
  textInput: {
    marginTop: 15,
    marginLeft:15,
    marginRight:15,
    marginBottom: 10,
    borderWidth: .5,
    borderColor: 'gray',
    borderStyle: 'dotted',
    borderRadius: 10,
    height: 100,
    padding: 20,
    color: 'gray',
  },
  button: {
    // alignSelf: 'stretch',  
    alignItems: 'center',

  },
  buttonText: {
    marginTop: 0,
    textAlign: 'center',
    paddingVertical: 6,
    color: 'white',
    width: 100,
    height: 30,
    borderWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: '#615E5E',
  },
  
  
})
