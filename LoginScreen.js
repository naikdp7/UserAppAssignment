import React from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    showAlert(title, message) {
        Alert.alert(
            title,
            message,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }

    navigateToDashboardScreen() {
        this.props.navigation.replace('DashBoard');
    }
    render() {
        return (
            <View style={styles.viewStyle}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={styles.textStyle}>UserName: </Text>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="enter username"
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => this.setState({ username: value })}
                        value={this.state.username}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={styles.textStyle}>Password: </Text>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="enter password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => this.setState({ password: value })}
                        value={this.state.password}
                    />
                </View>
                <View style={styles.forgotPasswordViewStyle}><Text style={styles.textStyle}>Forgot Password</Text></View>
                <TouchableOpacity onPress={() => {
                    let userName = this.state.username;
                    let password = this.state.password;
                    console.log(userName);
                    console.log(password);
                    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    let isValuesNotEntered = userName.trim == "" || password.trim == "";
                    if (isValuesNotEntered) {
                        this.showAlert("Incorrect values", "Please enter values")
                    } else if (reg.test(this.state.username) === false) {
                        this.showAlert("Invalid email", "Please enter valid email address")
                    } else if (userName != "deep.naik@neosofttech.com" && password != "12345678") {
                        this.showAlert("Invalid credential", "user not found,please enter valid detail")
                    } else {
                        this.navigateToDashboardScreen();
                    }
                }
                } style={styles.buttonContainerStyle}>
                    <Text style={styles.buttonTextStyle}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainerStyle}>
                    <Text style={styles.buttonTextStyle}>Sign up</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFEB3B', flexDirection: 'column'
    },
    textStyle: {
        textAlignVertical: "center", fontSize: 20, marginVertical: 5, color: "#009688"
    },
    textInputStyle: {
        padding: 4,
        height: 40, width: "70%", borderColor: 'gray', borderRadius: 20, borderWidth: 2, marginBottom: 20, fontSize: 18
    },
    forgotPasswordViewStyle:{
        marginEnd:8,alignSelf: 'flex-end'
    },
    buttonContainerStyle: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        marginStart: 4,
        marginEnd: 4,
        marginTop: 4,
        marginBottom: 4,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonTextStyle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});