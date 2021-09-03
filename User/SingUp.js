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
import { AuthContext } from '../Screen/AuthContext';



const SignUp = ({navigation}) => {
    const { colors } = useTheme();

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry:true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { signUp } = React.useContext(AuthContext)
    
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

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const handleConfirm_PasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                confirm_password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                confirm_password: val,
                isValidPassword: false
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
           <Text style={styles.text_footer}>Email</Text>      
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={17}
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
                    size={17}
                />
                </Animatable.View>
                :null}
            </View>

            <Text style={[styles.text_footer,{marginTop:25}]}>Password</Text>      
            <View style={styles.action}>
                <FontAwesome 
                    name="lock"
                    color="#05375a"
                    size={17}
                />
                <TextInput 
                    placeholder="Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(val)=>handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                    activeOpacity={0.7}
                >
                    {data.secureTextEntry ?
                    <Feather 
                        name="eye-off"
                        color="green"
                        size={17}
                        />
                        :
                        <Feather 
                        name="eye"
                        color="green"
                        size={17}
                    />
                    }
                </TouchableOpacity>
               
            </View>

            <Text style={[styles.text_footer,{marginTop:25}]}>Confirm Password</Text>      
            <View style={styles.action}>
                <FontAwesome 
                    name="lock"
                    color="#05375a"
                    size={17}
                />
                <TextInput 
                    placeholder="confirm Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    onChangeText={(val)=>handleConfirm_PasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                    activeOpacity={0.7}
                >
                    {data.confirm_secureTextEntry ?
                    <Feather 
                        name="eye-off"
                        color="green"
                        size={17}
                        />
                        :
                        <Feather 
                        name="eye"
                        color="green"
                        size={17}
                    />
                    }
                </TouchableOpacity>
               
            </View>

            <View style={styles.button}>
            <TouchableOpacity 
                  style={styles.signIn}
                  activeOpacity={0.7}
                  onPress={()=>{signUp()}}>
                 <LinearGradient
                   colors={['#841584', '#801cec']}
                    style={styles.signIn}
                     >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={()=>navigation.goBack()}
                  style={[styles.signIn,{
                      borderColor:"#841584",
                      borderWidth:1,
                      marginVertical:12
                  }]} >
                  <Text style={[styles.textSign,{
                      color:"#801cec"
                  }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
         </View>
         </Animatable.View>
        
     </View>
    
    );
};

export default SignUp;
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
    logo: {
        width: height_logo,
        height: height_logo,
        marginTop:30
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize:28
    },
    text_footer: {
        color: '#05375a',
        fontSize: 15
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
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -20,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 15,
        fontWeight: 'bold'
    }
  });
