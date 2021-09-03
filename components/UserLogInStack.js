import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screen/SplashScreen';
import SignIn from '../User/SingIn';
import SignUp from '../User/SingUp';

import ForgetPassword from '../User/forgetPassword';


const UserLogInStack = createNativeStackNavigator();



const UserLogInStackScreen = ({navigation}) => {
    
    return (
      <UserLogInStack.Navigator headerMode='none'>
            <UserLogInStack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
            <UserLogInStack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
            <UserLogInStack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
            <UserLogInStack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown: false}}/>
    </UserLogInStack.Navigator>
    );
};

export default UserLogInStackScreen;

