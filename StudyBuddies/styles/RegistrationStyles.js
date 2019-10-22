'use strict';

import {
    StyleSheet
  } from 'react-native';


const registrationStyles = StyleSheet.create({
    title: {
        padding: 10,
        fontSize: 50,
        fontWeight: '100',
        letterSpacing: 6
    },
    input: {
        width: 350,
        marginBottom: 5,
        padding: 8,
        fontSize: 18,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: "#c2c2c2"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    buttonWrapper: {
        marginBottom: 13,
    },
    form: {
        flex: 1,
        marginBottom: 30,
        justifyContent: 'center'
    },
    titleView: {
        flex: 1,
        justifyContent: 'center'
    },
    actions: {
        flex: 1,
        justifyContent: "flex-start"
    }
});

export default registrationStyles;