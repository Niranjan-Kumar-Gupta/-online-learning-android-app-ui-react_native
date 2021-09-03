import * as React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Button,
    TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';


const WebDev = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#282d3c' barStyle="light-content"/>
            <View style={styles.header}>
            <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/image/web.jpeg')}
                    style={styles.logo}
                    resizeMode="stretch"
                    borderRadius={10}
                />
            </View>

         <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}
            >
            <View style={styles.footer}>
            <Text style={[styles.text_footer,{fontSize:28,fontWeight:'bold'}]}>The Complete Web Developer Course</Text>
            <Text style={[styles.text_footer,{fontSize:15,marginTop:8,fontWeight:'bold',borderBottomWidth:0.6}]}>Learn Web Development by building 5 websites using HTML, CSS, Javascript, PHP, Python, MySQL and more</Text>
            <Text style={[styles.text_footer,{fontSize:13,marginTop:20}]}>This Specialization covers how to write syntactically correct HTML5 and CSS3, and how to create interactive web experiences with JavaScript. Mastering this range of technologies will allow you to develop high quality web sites that, work seamlessly on mobile, tablet browsers accessible</Text>

            <View style={{
                          
                          alignItems:'flex-end'
                        }}>  
                    <Text  style={[styles.text_footer,{marginTop:10,fontSize:15,fontWeight:'bold'}]}>100K:Students Enrolled</Text>
            </View>
              
            
                <View style={styles.button}>
                    <LinearGradient
                    colors={['#282d3c', '#801cec']}
                        style={styles.signIn}
                        >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Enroll Now</Text>
                    </LinearGradient>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.signIn,{
                            borderColor:"#841584",
                            borderWidth:1,
                            marginVertical:15
                        }]} >
                        <Text style={[styles.textSign,{
                            color:"#801cec"
                        }]}>Try For Free</Text>
                </TouchableOpacity>
                </View>
            
            </View>
         </Animatable.View>
                
         </View>
    );
};

export default WebDev;


const {height} = Dimensions.get("screen");
const height_logo = height * 0.20;
const Width_logo = height_logo*2
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#282d3c'
    },
    header: {
        flex: 1,
        alignItems:'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
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
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
