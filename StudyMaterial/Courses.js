
import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import Card from './Card';



const Courses = props => {
    let subjectname = "UnderDev"
    if (props.subjectName === "c++") {
        subjectname = "Cpp"
    }else if(props.subjectName === "Python"){
        subjectname = "Python"
    }else if(props.subjectName === "Web Devplopment"){
        subjectname = "WebDev"
    }else{
        subjectname = "UnderDev"
    }

    return(
        <View style={styles.screen}>
             <Card style={{...styles.CoursesCard, ...props.style}}>
             <View style={styles.container}>
                  <Image style={styles.image} source={props.imageUri}/>
                  <Text style={styles.subjectName}>{props.subjectName}</Text>
                  <View style={styles.btnContainer}>
    
                    <TouchableOpacity activeOpacity={.8} 
                                      style={{...styles.btn,...props.styleBtn}}
                                      onPress={()=>props.navigation.navigate(subjectname)}
                                      ><Text style={{...styles.text,...props.styletext}}>{props.title2}</Text></TouchableOpacity>
                  </View>
            </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor: '#fff',
    },
    image:{
        width:180,
        maxWidth:"70%",
        height:100,
        borderRadius:20, 
    },
    CoursesCard:{
        height:200,
        width:300,
        maxWidth:'80%',
        marginTop:30,
        
    },
    subjectName:{
        fontSize:18
    },
    btnContainer:{
        flexDirection:"row",
        alignItems:"center",
        alignContent:"space-around",
        marginTop:10
       
    },
    btn:{  
        marginHorizontal:10,
        width:90,
        backgroundColor:"#841584",
        height:35,
        alignItems:"center"
    },
    text:{
           paddingTop:4,
           fontSize:16,
           color:"#fff"
        
      }
});

export default Courses;
