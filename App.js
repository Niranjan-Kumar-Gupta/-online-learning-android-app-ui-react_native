
import * as React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screen/SplashScreen';
import SignIn from './User/SingIn';
import UserLogInStackScreen from './components/UserLogInStack';
import { AuthContext } from './Screen/AuthContext';
import AllCourses from './StudyMaterial/Allcourses';
import FrontPageStackScreen from './components/FrontPageScreen';

function App() {

  const [isLoading,setIsLoading] = React.useState(true);
  const [userToken,setUserToken] = React.useState(null);
  

  const authContext = React.useMemo(()=>({
      signIn:() => {
        setUserToken('sdcd');
        setIsLoading(false);
      },
      signOut:() => {
        setUserToken(null);
        setIsLoading(true);
      },
      signUp:() => {
        setUserToken('sdcd');
        setIsLoading(false);
      }
  }));

  React.useEffect(() => {
      setTimeout(()=>{
        setIsLoading(false)
      },1000);
  }, [])

  if (isLoading) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
   

    <AuthContext.Provider value={authContext}>

     <NavigationContainer>
       {userToken != null ? (
        <FrontPageStackScreen />
       )
       :
       <UserLogInStackScreen />
      }
     </NavigationContainer>

    </AuthContext.Provider>
  );
}

export default App;