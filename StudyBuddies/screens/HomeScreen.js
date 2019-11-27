import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.groupItem}>
          <Text style={styles.title}>
            Utimate Mathematicians
          </Text>
          <Text style={styles.subscript}>
            Math250
          </Text>
        </TouchableOpacity>
      </View>
    )
  };

  static navigationOptions = {
    title: 'Your Groups',
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  groupItem: {
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '80%',
    borderRadius: 15,
    backgroundColor: '#346ea8',
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    color: 'white'
  },
  subscript: {
    fontSize: 16,
    color: 'white'
  }
});

