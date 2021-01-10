import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
export default class SplashScreen extends Component {
     componentDidMount() {
          this.timeoutHandle = setTimeout(() => {
               this.props.navigation.replace('Login');
          }, 5000);
     }

     componentWillUnmount() {
          clearTimeout(this.timeoutHandle);
     }

     render() {
          return (
               <View>
                    <ImageBackground source={require('./img/splash.jpg')} style={{ width: '100%', height: '100%' }} />
               </View>
          );
     }
}
