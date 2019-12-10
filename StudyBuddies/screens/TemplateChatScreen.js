import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ChatScreen } from 'react-native-easy-chat-ui'

export default class TemplateChatScreen extends Component {
    state = {
        messages: [
            {
                id: `1`,
                type: 'text',
                content: 'hello world',
                targetId: '12345678',
                chatInfo: {
                    //   avatar: require('../../source/defaultAvatar.png'),
                    id: '12345678',
                    nickName: 'Test'
                },
                renderTime: true,
                sendStatus: 0,
                time: '1542006036549'
            }
        ]
    }

    render() {
        return (
            <ChatScreen
                messageList={this.state.messages}
            />
        )
    }
}

const styles = StyleSheet.create({})
