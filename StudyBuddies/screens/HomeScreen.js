import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text, ActivityIndicator, ScrollView, Button
} from 'react-native';
// import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import { AsyncStorage } from 'react-native'

export default class HomeScreen extends React.Component {

  componentDidMount() {
    this.props.getUserGroups();
  }

  render() {
    if (this.props.groups.loaded) {
      if (this.props.groups.groupList != undefined) {
        return (
          <ScrollView style={{ padding: 10 }}>
            {
              this.props.groups.groupList.map(
                (group) => (
                  <View style={styles.container} key={group.id} >
                    <TouchableOpacity
                      style={styles.groupItem}
                      onPress={() => this.props.groupSelected(
                        this.props.navigation,
                        group.id)}>
                      <Text style={styles.title}>
                        {group.name}
                      </Text>
                      <Text style={styles.subscript}>
                        {group.subject}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
          </ScrollView>
        );
      } else {
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 25 }}>No groups found, try joining some!</Text>
          </View>
        );
      }
    } else {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 25, padding: 10 }}>Loading user groups</Text>
          <ActivityIndicator color='#346ea8' size="large" />
          {/* <Bubbles size={10} color="#FFF" /> */}
        </View>
      );
    }

  };

  static navigationOptions = {
    title: 'Groups',
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  groupItem: {
    margin: 5,
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



/* {this.state.groups.map(
          (item) => (
            <View style={styles.container} >
              <TouchableOpacity style={styles.groupItem}>
                <Text style={styles.title}>
                  {group.name}
                </Text>
                <Text style={styles.subscript}>
                  {group.subject}
                </Text>
              </TouchableOpacity>
            </View>
          ))} */
