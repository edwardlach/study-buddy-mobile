import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';

import Auth from '@aws-amplify/auth';


export default class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }


    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        return await Auth.currentAuthenticatedUser()
            .then((user) => {
                this.props.navigation.navigate('App');
            })
            .catch(() => { this.props.navigation.navigate('Auth') });
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}