import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
navigator.geolocation = require('@react-native-community/geolocation');

export default class ContactUsScreen extends Component {
    constructor() {
        super();
        this.state = {
            ready: false,
            where: { lat: null, lng: null },
            error: null
        }
    }
    componentDidMount() {
        let geoOptions = {
            enableHighAccuracy: false,
            timeOut: 20000, 
        };
        this.setState({ ready: false, error: null });
        navigator.geolocation.getCurrentPosition(this.geoSuccess,
            this.geoFailure,
            geoOptions);
    }
    geoSuccess = (position) => {
        console.log(position.coords.latitude);

        this.setState({
            ready: true,
            where: { lat: position.coords.latitude, lng: position.coords.longitude }
        })
    }
    geoFailure = (err) => {
        this.setState({ error: err.message });
    }
    render() {
        return (
            this.state.where.lat != null ?
                <View style={styles.MainContainer}>

                    <MapView
                        style={styles.mapStyle}
                        showsUserLocation={false}
                        zoomEnabled={true}
                        zoomControlEnabled={true}
                        initialRegion={{
                            latitude: this.state.where.lat,
                            longitude: this.state.where.lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>

                        <Marker
                            coordinate={{ latitude: this.state.where.lat, longitude: this.state.where.lng }}
                            title={"My Location"}
                            description={"Home"}
                        />
                    </MapView>

                </View>
                :
                <View><Text>Loading...</Text></View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});  