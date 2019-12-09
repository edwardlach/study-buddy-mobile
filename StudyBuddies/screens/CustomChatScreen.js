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

export default class CustomChatScreen extends Component {
    render() {
        return (
            // <View style={{  padding: 10 }} >
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled keyboardVerticalOffset={Header.HEIGHT + 20}>

                <ScrollView style={{ height: '80%', backgroundColor: '#cadce3', padding: 10 }}>
                    <View style={styles.sentMessageView}>
                        <Text style={styles.messageText}>this is a sent message</Text>
                    </View>

                    <View style={styles.sentMessageView}>
                        <Text style={styles.messageText}>this is a longer sent message which should appear on multiple lines hopefully</Text>
                    </View>

                    <View style={styles.receivedMessageView}>
                        <Text style={styles.messageText}>This is a received message</Text>
                    </View>

                </ScrollView>

                <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: 20, paddingVertical: 6 }}>
                    <TextInput placeholder='enter your message' style={styles.message} maxLength={200} multiline={true} />
                    <Icon
                        name='send'
                        type='material'
                        color='#517fa4'
                        size={40}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    message: {
        fontSize: 18,
        flex: 9,
    },
    sentMessageView: {
        marginVertical: 5,
        backgroundColor: '#2b5599',
        alignSelf: "flex-end",
        padding: 15,
        borderRadius: 25
    },
    receivedMessageView: {
        marginVertical: 5,
        backgroundColor: '#1f9468',
        alignSelf: "flex-start",
        padding: 15,
        borderRadius: 25    
    },
    messageText: {
        fontSize: 18,
        color: 'white'
    }
})
