import ContactUsScreen from './ContactUsScreen';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import React, { Component } from 'react';
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import {
    NavigationContainer
  } from '@react-navigation/native';

export default class DashboardScreen extends Component {
    render() {
        const Tab = createBottomTabNavigator();
        return (
                <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    activeColor="#e91e63"
                >
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            tabBarLabel: 'Home'
                        }}
                    />
                    <Tab.Screen
                        name="Contact Us"
                        component={ContactUsScreen}
                        options={{
                            tabBarLabel: 'Contact us'
                        }}
                    />
                    <Tab.Screen
                        name="Setting"
                        component={SettingScreen}
                        options={{
                            tabBarLabel: 'Setting'
                        }}
                    />
                </Tab.Navigator>
                </NavigationContainer>)
    }
}