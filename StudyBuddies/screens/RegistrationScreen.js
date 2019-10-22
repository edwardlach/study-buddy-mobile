import React from 'react'
import {
    View, Button, TextInput, Text
} from 'react-native'
import registrationStyles from '../styles/RegistrationStyles'

export default class RegistrationScreen extends React.Component {
    render() {
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
                        onChangeText={val => this.props.onChangeText('name', val)} />

                    <TextInput style={registrationStyles.input}
                        placeholder='Email'
                        textContentType="emailAddress"
                        onChangeText={val => this.props.onChangeText('email', val)} />

                    <TextInput style={registrationStyles.input}
                        placeholder='Password'
                        textContentType="password"
                        secureTextEntry={true}
                        onChangeText={val => this.props.onChangeText('password', val)} />
                </View>

                <View style={registrationStyles.actions}>
                    <View style={registrationStyles.buttonWrapper}>
                        <Button
                            title="Sign Up"
                            onPress={() => this.props.onSubmit()}
                        />
                    </View>

                    <View style={registrationStyles.buttonWrapper}>
                        <Button
                            color="#e65058"
                            title="Already Have An Account?"
                            onPress={() => this.props.navigation.navigate('Signin')}
                        />
                    </View>
                </View>


            </View>
        )
    }
}
