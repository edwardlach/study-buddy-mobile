import React, { Component } from 'react'
import {
    View, Button, TextInput, StyleSheet
} from 'react-native'


export default class LoginScreen extends React.Component {
    state = {
        password: '', email: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder='Email'
                    textContentType="emailAddress"
                    onChangeText={val => this.onChangeText('email', val)} />

                <TextInput style={styles.input}
                    placeholder='Password'
                    textContentType="password"
                    secureTextEntry={true}
                    onChangeText={val => this.onChangeText('password', val)} />
                <Button
                    title="Sign In"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        margin: 5,
        marginBottom: 10,
        padding: 8,
        fontSize: 18,
        fontWeight: '500',
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: "#42A5F5"
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

LoginScreen.navigationOptions = {
    title: 'login',
};
