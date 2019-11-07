import React from 'react'
import {
    View, Button, TextInput, Text, Modal
} from 'react-native'
import registrationStyles from '../styles/RegistrationStyles'

export default class RegistrationScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                {/* Registration Form */}
                <View style={registrationStyles.container}>

                    <View style={registrationStyles.titleView}>
                        <Text style={registrationStyles.title}>REGISTER</Text>
                    </View>

                    <View style={registrationStyles.form}>
                        <TextInput
                            style={registrationStyles.input}
                            placeholder='First Name'
                            autoCapitalize="words"
                            textContentType="name"
                            onChangeText={val => this.props.onChangeText('firstName', val)} />

                        <TextInput
                            style={registrationStyles.input}
                            placeholder='Last Name'
                            autoCapitalize="words"
                            textContentType="name"
                            onChangeText={val => this.props.onChangeText('lastName', val)} />

                        <TextInput style={registrationStyles.input}
                            placeholder='Email'
                            textContentType="emailAddress"
                            autoCapitalize="none"
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
                                onPress={() => {
                                    this.props.submitRegisterForm(this.props.form, this.props.navigation);
                                }}
                            />
                        </View>

                        <View style={registrationStyles.buttonWrapper}>
                            <Button
                                color="#e65058"
                                title="Already Have An Account?"
                                onPress={() => this.props.navigation.navigate('signin')}
                            />
                        </View>
                    </View>


                </View>

                {/* Dialog for confirmation code */}
                {/* <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.form.modalVisible}>

                    <View style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}>

                        <View style={{ backgroundColor: 'white', elevation: 30, padding: 20 }}>
                            <Text style={{ fontSize: 18, padding: 5 }}>Please enter the code emailed to you</Text>
                            <TextInput
                                style={{ padding: 4, borderBottomWidth: 0.2, borderBottomColor: "black", marginBottom: 20 }}
                                placeholder="Code"
                                onChangeText={(text) => this.setState({ confirmationCode: text })} />
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-evenly", maxHeight : 40}}>
                                <Button
                                    title="Dismiss"
                                    color=""
                                    onPress={() => {
                                        this.props.setModalVisible(false);
                                    }} />
                                <Button
                                    title="Confirm"
                                    onPress={() => {
                                        this.props.confirm(this.state.confirmationCode, this.props.form, this.props.navigation);
                                    }} />
                            </View>
                        </View>

                    </View>
                </Modal> */}

            </View>
        )

    }
}
