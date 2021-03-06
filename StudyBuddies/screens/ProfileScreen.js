import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { Auth } from 'aws-amplify';
import { AsyncStorage } from 'react-native'

export default class ProfileScreen extends Component {
    static NavigationOptions = {

    }

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        Auth.currentAuthenticatedUser().then(
            (res) => {
                this.setState(res.attributes);
                console.log('username', this.state.name)
            }
        ).catch((err) => console.log('error getting user', err));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>You are logged in</Text>
                <Button
                    title='logout'
                    onPress={() => {
                        this.props.logout(this.props.navigation);
                    }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 25,
        margin: 10
    }
});
