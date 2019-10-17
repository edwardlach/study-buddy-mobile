import React from 'react'
import {
    View, Button, TextInput, Text
} from 'react-native'
import registrationStyles from '../styles/RegistrationStyles'
import NavigationService from '../services/NavigationService'

const RegistrationScreen = ({ onSubmit, onChangeText }) => {
    return (
        <View style={registrationStyles.container}>

            <View style={registrationStyles.titleView}>
                <Text style={registrationStyles.title}>REGISTER</Text>
            </View>

            <View style={registrationStyles.form}>
                <TextInput style={registrationStyles.input}
                    placeholder='Full Name'
                    autoCapitalize="words"
                    textContentType="name"
                    onChangeText={val => onChangeText('name', val)} />

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
                        title="Sign Up"
                        onPress={() => onSubmit()}
                    />
                </View>

                <View style={registrationStyles.buttonWrapper}>
                    <Button
                        color="#e65058"
                        title="Already Have An Account?"
                    />
                </View>
            </View>


        </View>
    )
}

RegistrationScreen.navigationOptions = {
    title: 'register',
};


export default RegistrationScreen;
