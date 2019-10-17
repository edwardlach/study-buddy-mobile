import React from 'react'
import {
    View, Button, TextInput, Text
} from 'react-native'
import registrationStyles from '../styles/RegistrationStyles'
import NavigationService from '../services/NavigationService'


const SigninScreen = ({ onSubmit, onChangeText }) => {
    return (
        <View style={registrationStyles.container}>

            <View style={registrationStyles.titleView}>
                <Text style={registrationStyles.title}>Sign in</Text>
            </View>

            <View style={registrationStyles.form}>

                <TextInput style={registrationStyles.input}
                    placeholder='Email'
                    textContentType="emailAddress"
                    onChangeText={val => onChangeText('email', val)} />

                <TextInput style={registrationStyles.input}
                    placeholder='Password'
                    textContentType="password"
                    secureTextEntry={true}
                    onChangeText={val => onChangeText('password', val)} />
            </View>

            <View style={registrationStyles.actions}>
                <View style={registrationStyles.buttonWrapper}>
                    <Button
                        title="Sign In"
                        onPress={() => onSubmit()}
                    />
                </View>

                <View style={registrationStyles.buttonWrapper}>
                    <Button
                        color="#e65058"
                        title="Don't have an account yet?"
                    />
                </View>
            </View>
        </View>
    )
}

SigninScreen.navigationOptions = {
    title: 'signin',
};

export default SigninScreen;
