import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { Auth } from 'aws-amplify';
import { AsyncStorage } from 'react-native'

export default class ProfleScreen extends Component {
    static NavigationOptions = {

    }

    constructor(props) {
        super(props);
    }

    async logout() {
        Auth.signOut({ global: true }).then(
            await AsyncStorage.removeItem('@UserId', (err) => {
              console.log(err)
            })
            .then(() => {
              this.props.navigation.navigate('Auth')
            })
        )
        .catch((err)=> console.log('error logging out', err))
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
                        this.logout();
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
