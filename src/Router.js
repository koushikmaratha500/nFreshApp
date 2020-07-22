import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

//importing Screen
import Dashboard from '@Screens/Dashboard';
import Account from '@Screens/Account';
import Deliveries from '@Screens/Deliveries';
import MyNotifications from '@Screens/MyNotifications';
import DeliveryDetails from './Screens/DeliveryDetails';
import Login from '@Screens/Login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'tomato', showLabel: false,
            inactiveTintColor: 'gray',
            style: { height: 70 }
        }}>
            <Tab.Screen name="Dashboard" component={Dashboard} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <FontAwesomeIcon name={'home'} size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Deliveries" component={Deliveries} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <FontAwesomeIcon name={'truck-moving'} size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="MyNotifications" component={MyNotifications} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <FontAwesomeIcon name={'bell'} size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Account" component={Account} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <FontAwesomeIcon name={'user'} size={size} color={color} />
                ),
            }} />
        </Tab.Navigator>
    )
}


export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' headerMode={'none'}>
                <Stack.Screen name="Home" component={HomeTabs} />
                <Stack.Screen name="DeliveryDetails" component={DeliveryDetails} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

const styles = StyleSheet.create({
    myHeaderTitleStyle: {
        textAlign: 'center', fontSize: 20, fontFamily: 'Lato-Regular'
    }
})  
