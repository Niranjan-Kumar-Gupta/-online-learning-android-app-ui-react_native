import React from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import SignUp from './SingUp';

const ForgetPassword = ({navigation}) => {
    const { colors } = useTheme();

    const [data, setData] = React.useState({
        username: '',
        password: '',
     
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

  

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#841584' barStyle="light-content"/>
         <View style={styles.header}>
         <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                source={require('../assets/girl2.png')}
                style={styles.logo}
                resizeMode="stretch"
            />
         </View>
         <Animatable.View
           animation="fadeInUpBig"
           style={styles.footer}
         >
         <View style={styles.footer}>
           <Text style={[styles.text_footer,{fontSize:15}]}>Lost your password? Please enter your email address.You will receive a link to 
             create a new password via link.</Text>
             <View style={{borderBottomWidth:0.6,
                           marginTop:30
                         }}></View>      
           <Text style={[styles.text_footer,{marginTop:15}]}>Email</Text>      
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val)=>textInputChange(val)}
                />
                {data.check_textInputChange?
                <Animatable.View 
                    animation="bounceIn">
                    <Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                />
                </Animatable.View>
                :null}
            </View>
            <View style={styles.button}>
                 <LinearGradient
                   colors={['#841584', '#801cec']}
                    style={styles.signIn}
                     >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Reset Password</Text>
                </LinearGradient>
    
            </View>
          
         </View>
         </Animatable.View>
     </View>
    );
};

export default ForgetPassword;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.15;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#841584'
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
        width: height_logo,
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
        marginTop: 40
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
