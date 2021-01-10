import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';
import ContactUsScreen from './ContactUsScreen';

const navigator = createStackNavigator({
  Splash: SplashScreen,
  Home: HomeScreen,
  Login:LoginScreen,
  DashBoard:DashboardScreen,
  ContactUs:ContactUsScreen
}, {
  initialRouteName: 'Splash',
  defaultNavigationOptions: {
    title: 'Restaurant'
  }
})

export default createAppContainer(navigator);