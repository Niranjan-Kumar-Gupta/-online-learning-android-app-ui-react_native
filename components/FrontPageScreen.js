import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EnrollCourse from '../StudyMaterial/EnrollCourse';
import ViewCourse from '../StudyMaterial/TryForFree';
import AllCourses from '../StudyMaterial/Allcourses';
import Cpp from '../Subject/Cpp';
import Python from '../Subject/Python';
import WebDev from '../Subject/WebDev';
import UnderDev from '../Subject/UnderDev';
import TryForFree from '../StudyMaterial/TryForFree';

const FrontPageStack = createNativeStackNavigator();

const FrontPageStackScreen = ({navigation}) => {
    
  

    return (
      <FrontPageStack.Navigator headerMode='none'>
            <FrontPageStack.Screen name="AllCourses" component={AllCourses} options={{headerShown: false}}/>
            <FrontPageStack.Screen name="Cpp" component={Cpp} options={{headerShown: false}}/>
            <FrontPageStack.Screen name="Python" component={Python} options={{headerShown: false}}/>
            <FrontPageStack.Screen name="WebDev" component={WebDev} options={{headerShown: false}}/>
            <FrontPageStack.Screen name="UnderDev" component={UnderDev} options={{headerShown: false}}/>

            <FrontPageStack.Screen name="EnrollCourse" component={EnrollCourse} options={{headerShown: false}}/>
            <FrontPageStack.Screen name="TryForFree" component={TryForFree} options={{headerShown: false}}/>
    </FrontPageStack.Navigator>
    );
};

export default FrontPageStackScreen;

