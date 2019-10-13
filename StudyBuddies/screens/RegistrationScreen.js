import React from 'react'
import {
    View, Button, TextInput, Text
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { registionStyles as styles } from '../styles/RegistrationStyles'


const RegistrationScreen = ({ onSubmit, onChangeText }) => {
    return (
        <View style={styles.container}>

            <View style={styles.titleView}>
                <Text style={styles.title}>REGISTER</Text>
            </View>

            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder='Full Name'
                    autoCapitalize="words"
                    textContentType="name"
                    onChangeText={val => onChangeText('name', val)} />

                <TextInput style={styles.input}
                    placeholder='Email'
                    textContentType="emailAddress"
                    onChangeText={val => onChangeText('email', val)} />

                <TextInput style={styles.input}
                    placeholder='Password'
                    textContentType="password"
                    secureTextEntry={true}
                    onChangeText={val => onChangeText('password', val)} />
            </View>

            <View style={styles.actions}>
                <View style={styles.buttonWrapper}>
                    <Button
                        title="Sign Up"
                        onPress={() => onSubmit()}
                    />
                </View>

                <View style={styles.buttonWrapper}>
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
    title: 'Authentication',
};

export default RegistrationScreen;
