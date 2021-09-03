import * as React from 'react';
import { View, Text, Button,Dimensions,StyleSheet,ScrollView,StatusBar,TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Card from './Card';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TryForFree = (navigation) => {

    const ChapterName = (props)=>{
        return(
            <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.chapterName,{
                marginVertical:5
            }]} >
                 <MaterialIcons 
                    name="navigate-next"
                    color="#801cec"
                    size={20}
                 />
                <Text style={[styles.textChapterName,{
                    color:"#801cec" 
                }]}>{props.chapterName}</Text> 
            </TouchableOpacity>
            
        );
    }
    
  
    return (
         <View style={styles.container}>
             <StatusBar backgroundColor='#333333' barStyle="light-content"/>
             <ScrollView>
                <View style={styles.header}>
                <Animatable.Image 
                        animation="bounceIn"
                        duraton="1500"
                        source={require('../assets/image/Cpp.jpg')}
                        style={styles.logo}
                        resizeMode="stretch"
                        borderRadius={10}
                    /> 
                    <Text style={{fontSize:25,color:"#fff",fontWeight:"bold",marginTop:10}}>Learn C++ Programming</Text>
                </View>            
                <View style={styles.itemContainer}>
                    <Card style={styles.card}>
                         <Text style={{fontSize:20,fontWeight:"bold",color:"#801cec"}}>C++ Introduction</Text>
                         <View style={{width:"100%",borderBottomWidth:0.4,marginTop:10}}></View>
                            <ChapterName chapterName="Variable and Literals"/>
                            <ChapterName chapterName="Data Types"/>
                            <ChapterName chapterName="Basic I/O"/>
                            <ChapterName chapterName="Type Conversion"/>
                            <ChapterName chapterName="Operators"/>
                    </Card>
                    <Card style={styles.card}>
                         <Text style={{fontSize:20,fontWeight:"bold",color:"#801cec"}}>C++ Flow control</Text>
                         <View style={{width:"100%",borderBottomWidth:0.4,marginTop:10}}></View>
                            <ChapterName chapterName="If...Else"/>
                            <ChapterName chapterName="For loop"/>
                            <ChapterName chapterName="do..while loop"/>
                            <ChapterName chapterName="Break and Continue Statement"/>
                            <ChapterName chapterName="Switch and Goto statement"/>
                    </Card>
                    <Card style={styles.card}>
                         <Text style={{fontSize:20,fontWeight:"bold",color:"#801cec"}}>C++ Functions</Text>
                         <View style={{width:"100%",borderBottomWidth:0.4,marginTop:10}}></View>
                            <ChapterName chapterName="Function"/>
                            <ChapterName chapterName="Function Type"/>
                            <ChapterName chapterName="Function Overloading"/>
                            <ChapterName chapterName="Recursion"/>
                            <ChapterName chapterName="Recursion Example"/>
                    </Card>
                    <Card style={styles.card}>
                         <Text style={{fontSize:20,fontWeight:"bold",color:"#801cec"}}>C++ Arrays and String</Text>
                         <View style={{width:"100%",borderBottomWidth:0.4,marginTop:10}}></View>
                            <ChapterName chapterName="Basic Array"/>
                            <ChapterName chapterName="Multidiemensional Array"/>
                            <ChapterName chapterName="Function and Array"/>
                            <ChapterName chapterName="String"/>
                            <ChapterName chapterName="String Method"/>
                    </Card>
                    <Card style={styles.card}>
                         <Text style={{fontSize:20,fontWeight:"bold",color:"#801cec"}}>C++ Structure and Template</Text>
                         <View style={{width:"100%",borderBottomWidth:0.4,marginTop:10}}></View>
                            <ChapterName chapterName="Structure"/>
                            <ChapterName chapterName="Structure and Function"/>
                            <ChapterName chapterName="Pointer to structure"/>
                            <ChapterName chapterName="Template"/>
                            <ChapterName chapterName="Enumeration"/>
                    </Card>
                    <Card style={styles.card}>
                         <Text style={{fontSize:20,fontWeight:"bold",color:"#801cec"}}>C++ Object and Class</Text>
                         <View style={{width:"100%",borderBottomWidth:0.4,marginTop:10}}></View>
                            <ChapterName chapterName="Object and Class"/>
                            <ChapterName chapterName="Constructors"/>
                            <ChapterName chapterName="Object and Function"/>
                            <ChapterName chapterName="Function Overloading"/>
                            <ChapterName chapterName="Operator Overloading"/>
                    </Card>
                    <Card style={styles.card}>
                         <Text style={{fontSize:20,fontWeight:"bold",color:"#801cec"}}>C++ Inheritance</Text>
                         <View style={{width:"100%",borderBottomWidth:0.4,marginTop:10}}></View>
                            <ChapterName chapterName="Inheritances Access Control"/>
                            <ChapterName chapterName="Function Overriding"/>
                            <ChapterName chapterName="Multiple and Multileval inheritance"/>
                            <ChapterName chapterName="Friend Function"/>
                            <ChapterName chapterName="Virtual Function"/>
                    </Card>
                    <Card style={styles.card}>
                         <Text style={{fontSize:20,fontWeight:"bold",color:"#801cec"}}>C++ STL</Text>
                         <View style={{width:"100%",borderBottomWidth:0.4,marginTop:10}}></View>
                            <ChapterName chapterName="Basic of STL"/>
                            <ChapterName chapterName="Iterartors"/>
                            <ChapterName chapterName="Vector"/>
                            <ChapterName chapterName="Set and Map"/>
                            <ChapterName chapterName="Stack and Queues"/>
                          
                    </Card>
                </View>
             </ScrollView>
         </View>
    );
};

export default TryForFree;



const {height} = Dimensions.get("screen");
const height_logo = height * 0.20;
const Width_logo = height_logo*2
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#333333'
    },
    header: {
        flex: 1,
        alignItems:'center',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    itemContainer: {
        flex: 3,
        alignItems:"center"
    },
    card:{
        height:220,
        width:"80%",
        marginBottom:10

    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize:30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    logo: {
        width: Width_logo,
        height: height_logo,
        marginTop:30
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 20
    },
    chapterName: {
        width: '100%',
        flexDirection:"row",
    },
    textChapterName: {
        fontSize: 15,
        
    }
  });


