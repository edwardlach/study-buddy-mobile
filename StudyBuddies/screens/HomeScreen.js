import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text, ActivityIndicator, ScrollView, Button
} from 'react-native';
import { AsyncStorage } from 'react-native'

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    // this.props.getUserGroups();
  }

  // async componentWillMount() {
  //   await this.props.getUserGroups();
  // }

  componentDidMount() {
    this.props.getUserGroups();
  }

  render() {
    if (this.props.groups.loaded) {
      if (this.props.groups.groupList != undefined) {
        return (
          <ScrollView style={{paddingVertical : 10}}>
            {
              this.props.groups.groupList.map(
                (group) => (
                  <View style={styles.container} key={group.id} >
                    <TouchableOpacity style={styles.groupItem} onPress={()=> this.props.navigation.navigate('Chat')}>
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
    }

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 25 }}>Loading user groups</Text>
        <ActivityIndicator color='#346ea8' size="large" />
      </View>
    );


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
