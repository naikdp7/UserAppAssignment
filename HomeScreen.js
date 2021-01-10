import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreenComponent from './HomeScreenComponent';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.columnStyle}>
                <View style={styles.rowStyle}>
                    <HomeScreenComponent
                        title={'Profile'}
                    />
                    <HomeScreenComponent
                        title={'My Account'}
                    />
                </View>
                <View style={styles.rowStyle}>
                    <HomeScreenComponent
                        title={'My Orders'}
                    />
                    <HomeScreenComponent
                        title={'My Cart'}
                    />
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    columnStyle: {
        backgroundColor: '#FFEB3B', justifyContent: 'center', flexDirection: 'column', flex: 1
    },
    rowStyle: {
        marginTop: 8,
        flexDirection: 'row', justifyContent: "space-evenly"
    }
});