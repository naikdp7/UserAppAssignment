import React, { Component } from "react";
import { View, Text, TouchableHighlight, Dimensions,StyleSheet } from "react-native";
import PropTypes from "prop-types";
export default class HomeScreenComponent extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render() {
        const { title } = this.props;
        return (
            <View>
                <TouchableHighlight
                    style={styles.touchableHighlightStyle}
                    underlayColor='#ccc'>
                    <Text style={styles.textStyle}> {title} </Text>
                </TouchableHighlight>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    touchableHighlightStyle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: 150,
        height: 150,
        backgroundColor: "#009688",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle:{
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center"
    }
});