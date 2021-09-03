import React from 'react';
import { View,Text,StyleSheet, Image, Button , StatusBar } from 'react-native';


const FrontHeader = props => {
    return(
        <View style={styles.container}>
             <StatusBar backgroundColor='#333333' barStyle="light-content"/>
            <View style={styles.insideContainer}>
              <View style={styles.text}>
                  
                  <Text style={[styles.name,{fontSize:30,marginLeft:8}]}>Popular</Text>
                  <Text style={styles.name}>online Courses</Text>
                  
                </View>
              <View style={styles.imageView}><Image style={styles.image} source={require('../assets/image/girl2.png')}/></View>
            </View> 
        </View>
    );
};

const styles = StyleSheet.create({
    container:{ 
        width:'100%',
        height:160, 
        backgroundColor:'#333333',
        alignItems:'center'
    },
    image:{
        height:100,
        width:100
    },
    insideContainer:{
        flexDirection:"row"
    },
    name:{
        fontSize:20,
        color:"#fff"
    },
    text:{
        paddingTop:40,
        marginRight:40
    },
    imageView:{
        paddingTop:30
    },
    btn:{
        marginTop:10,
      
    }
});

export default FrontHeader;