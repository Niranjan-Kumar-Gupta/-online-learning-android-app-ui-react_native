
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Courses from './Courses';

import FrontHeader from './FrontHeader';

const AllCourses = ({navigation}) => {
    
    const [courses,setCourses]  = useState([
        {courseName:<Courses subjectName="c++"  title2={"View"} imageUri = {require('../assets/image/Cpp.jpg')} navigation={navigation}/>,key:'physics'},
        {courseName:<Courses subjectName="Python" title2={"View"} imageUri = {require('../assets/image/python.jpg')} navigation={navigation}/>,key:'math'},
        {courseName:<Courses subjectName="Web Devplopment"  title2={"View"} imageUri = {require('../assets/image/web.jpeg')} navigation={navigation}/>,key:'chemistry'},
        {courseName:<Courses subjectName="Andorid Devlopment" title2={"View"} imageUri = {require('../assets/image/Android.jpg')} navigation={navigation}/>,key:'data structure'},
        {courseName:<Courses subjectName="System Design" title2={"View"} imageUri = {require('../assets/image/systemDesign.jpg')} navigation={navigation}/>,key:'programmng'},
        {courseName:<Courses subjectName="Networking" title2={"View"} imageUri = {require('../assets/image/networking.jpg')} navigation={navigation}/>,key:'systemDesign'},
        {courseName:<Courses subjectName="Machine Learning" title2={"View"} imageUri = {require('../assets/image/robot.jpg')} navigation={navigation}/>,key:'Networking'}
  ]);
  
    return (
         <ScrollView>
           <FrontHeader />
           {courses.map(course => (
               <View style={styles.container} key={course.key}>
                  {course.courseName}
               </View>
           ))}
             
         </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
   
  
});

export default AllCourses;
