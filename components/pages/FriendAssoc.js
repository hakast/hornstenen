import React, { Component } from 'react';
import {  Text, 
          View,
          TouchableOpacity,
          Image,
          StyleSheet,
          Linking,
      } from 'react-native';
 
export default class FriendAssoc extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {Linking.openURL('http://lpkamrat.se/')}}
          >
          <Text style={styles.upperText}>Till Kamratföreningen ...</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
  },
  upperText: {
    marginTop: 80,
    fontSize: 20,
    color: 'gray',
    padding: 45,
    marginLeft: 20,
    marginRight: 20,
    letterSpacing: 1.5,
    borderWidth: 1,
    borderColor: 'gray',
    // backgroundColor: '#F3F2F2',
    borderRadius: 8,
  },

})
