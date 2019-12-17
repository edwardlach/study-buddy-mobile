import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    AsyncStorage,
    ActivityIndicator,
    Keyboard
} from 'react-native'
import { Icon } from 'react-native-elements';
import { Header } from 'react-navigation';
import { SEND_MESSAGE } from '../types/reduxTypes';

export default class CustomChatScreen extends React.Component {

    payload() {
        return {
            action: SEND_MESSAGE,
            groupId: this.props.groupId,
            message: this.props.messageText
        }
    }

    render() {
        const userId = this.props.navigation.getParam('userId', '');

        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled keyboardVerticalOffset={Header.HEIGHT + 30}>

                <ScrollView style={{ height: '80%', backgroundColor: '#cadce3' }} ref={ref => this.scrollView = ref}
                    onContentSizeChange={(contentWidth, contentHeight) => {
                        this.scrollView.scrollToEnd({ animated: true });
                    }}>
                    {
                        this.props.messages.map(
                            (message) => (
                                <View key={message.messageId} style={{ marginHorizontal: 3 }}>
                                    {
                                        message.userId != userId &&
                                        <Text style={{ fontSize: 16, marginStart: 3 }}>{message.user.firstName[0] + '.' + message.user.lastName}
                                        </Text>
                                    }
                                    <View style={message.userId == userId ? styles.sentMessageView : styles.receivedMessageView}>
                                        <Text style={styles.messageText}>{message.message}</Text>
                                    </View>
                                </View>
                            ))
                    }
                </ScrollView>

                <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: 20, paddingVertical: 6 }}>
                    <TextInput
                        placeholder='enter your message'
                        style={styles.message}
                        maxLength={200}
                        multiline={true}
                        onChangeText={(text) => this.props.updateMessageText(text)}
                        value={this.props.messageText} />

                    <Icon
                        name='send'
                        type='material'
                        color='#517fa4'
                        size={40}
                        onPress={() => {
                            if (this.props.messageText && this.props.messageText.length > 0) {
                                Keyboard.dismiss();
                                this.props.sendMessage(this.payload())
                            }
                        }} />

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
        padding: 10,
        borderRadius: 20,
        marginLeft: 40
    },
    receivedMessageView: {
        marginVertical: 5,
        backgroundColor: '#1f9468',
        alignSelf: "flex-start",
        padding: 10,
        borderRadius: 20,
        marginRight: 40
    },
    messageText: {
        fontSize: 16,
        color: 'white'
    }
})
