import React, { Component } from 'react';
import { SocialIcon } from 'react-native-elements';
import { 
      Text, 
      View,
      StyleSheet,
      ScrollView,
      Image,
      Linking,
      TouchableOpacity
    } from 'react-native';
 
export default class SupportUs extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.upperText}>STÖD VÅR VERKSAMHET!</Text>
          <Image 
              style={styles.image}  
              source={require('../../assets/images/plusgiro.png')}
            />
            <Text style={styles.infoUnderText}>PG: 30 93 60 - 6</Text>
        
            <Image 
              style={styles.image}  
              source={require('../../assets/images/swish.png')}
            />
            <Text style={styles.infoUnderText}>SWISH: 123 051 65 91</Text>
            <TouchableOpacity
                onPress={() => {Linking.openURL('http://www.hornstenen.org/pdf/gavogivare.pdf')}}
            >
              <Image 
                style={styles.image}  
                source={require('../../assets/images/gavogivare.png')}
              />
            </TouchableOpacity>
            <Text style={styles.infoUnderText}>Klicka på blå knapp ovan</Text>
          <View>
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
    marginVertical: 5,
    // alignItems: 'stretch',    
    alignItems: 'center',
  },
  upperText: {
    marginTop: 20,
    fontSize: 22,
    color: 'gray',
    padding: 45,
    letterSpacing: 1.5,
  },
  infoUnderText: {
    alignItems: 'center',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 30,

  }

})
