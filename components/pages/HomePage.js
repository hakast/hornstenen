import React, { Component } from 'react';
import { 
    Text, 
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Linking,
  } from 'react-native';
  import { SocialIcon } from 'react-native-elements';
 
export default class HomePage extends React.Component {
  readMore1 = () => {
    this.props.navigation.navigate('Bilder')
   }
   readMore2 = () => {
    this.props.navigation.navigate('Kontakt')
   }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>

          {/* Facebooklogo */}
          <View style={styles.facebookLogo}  >
          <SocialIcon
            type='facebook'
            style={styles.facebookLogo}
            onPress={() => { Linking.openURL('https://www.facebook.com/stodboendet/') } } 
            // title='facebook'
            button
            type='facebook'
            />
          </View>

        <Text style={styles.upperText}>Drogfritt stödboende och motivation på kristen värdegrund.</Text>
        <Image 
          style={styles.image}  
          source={require('../../assets/images/happyHomePage.jpg')}
          />
      </View>
{/* Självhjälpsmodellen */}
      <View style={ styles.textOnSameRow }>
        <View>
          <Text style={styles.bottomText}>Självhjälpsmodellen |</Text>
        </View>
        <View>
          <TouchableOpacity 
            onPress={this.readMore1.bind(this)}
            >
            <Text style={styles.lasMer}>Läs mer ...</Text>
          </TouchableOpacity> 
        </View>
      </View>
{/* Innan och efterHVB */}
      <View style={ styles.textOnSameRow }>
        <View>
          <Text style={styles.bottomText}>Innan och efter HVB |</Text>
        </View>
        <View>
          <TouchableOpacity 
            onPress={this.readMore2.bind(this)}
            >
            <Text style={styles.lasMer}>Läs mer ...</Text>
          </TouchableOpacity> 
        </View>
      </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  contentContainer: {
    marginVertical: 0,
  },
  facebookLogo: {
    width: 50,
    marginRight: 350,
    marginTop: 30,  
  },
  upperText: {
    marginTop: -110,
    marginLeft: 70,
    fontSize: 22,
    color: 'gray',
    padding: 45,
    letterSpacing: 1.5,
  },
  image: {
    height: 300,
    width: 450,
  },
 textOnSameRow: {
  flexDirection: 'row', 
  marginTop: 30,
  justifyContent: 'center',
 },
  bottomText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 22,
  },
  lasMer: {
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    paddingLeft: 10,
  },
});



