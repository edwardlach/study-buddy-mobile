import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import { Icon } from 'react-native-elements'
import { Header } from 'react-navigation';
// import {KeyboardAvoidingView} from 'react-native';
// import { Header, NavigationActions } from 'react-navigation'
// import {AudioRecorder, AudioUtils} from 'react-native-audio'
// import RNFS from 'react-native-fs'
// import Sound from 'react-native-sound'
// import { ChatScreen } from 'react-native-easy-chat-ui'

export default class ChatScreen extends Component {
    render() {
        return (
            // <View style={{  padding: 10 }} >
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled keyboardVerticalOffset={Header.HEIGHT + 20}>
                <ScrollView style={{ height: '80%', backgroundColor: '#cadce3' }}>

                </ScrollView>
                <View style={{ flex: 1, flexDirection: "row", padding: 5}}>
                    <TextInput placeholder='enter your message' style={styles.message} maxLength={200} />
                    <Icon
                        name='send'
                        type='material'
                        color='#517fa4'
                        size={40}
                        style={{flex:1, margin: 5}}
                    />
                </View>
            </KeyboardAvoidingView>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    message: {
        fontSize: 18,
        flex: 9,
        paddingStart: 10
    }
})
