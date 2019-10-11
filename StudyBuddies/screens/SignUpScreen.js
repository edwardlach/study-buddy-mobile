import React from 'react'
import {
    View, Button, TextInput, StyleSheet
} from 'react-native'


const SignUpScreen = ({ onSubmit, onChangeText }) => {
    return (
        <View style={styles.container}>

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

            <Button
                title="Sign Up"
                onPress = {()=> console.log('name' , this.state.name)}
            />

            <Button
                color="#e65058"
                margin="10"
                title="Already Have An Account?"
                />
                
        </View>
    )
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

SignUpScreen.navigationOptions = {
    title: 'SignUp',
};

export default SignUpScreen;
