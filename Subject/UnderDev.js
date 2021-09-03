import React from 'react';
import { View,Text,StyleSheet, Image, Button , StatusBar } from 'react-native';


const UnderDev = props => {
    return(
        <View style={styles.container}>
             <StatusBar backgroundColor='#333333' barStyle="light-content"/>
             <View style={styles.imageView}><Image style={styles.image} source={require('../assets/image/girl2.png')}/></View>
              <View style={styles.text}>           
                  <Text style={styles.name}>online Courses</Text>
                  <Text style={styles.name}>Under Development</Text>
            </View> 
        </View>
    );
};

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        width:'100%',
        height:160, 
        backgroundColor:'#333333',
        justifyContent:"center",
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
        marginRight:-20
    },
    imageView:{
        paddingTop:30
    },
    btn:{
        marginTop:10,
      
    }
});

export default UnderDev;