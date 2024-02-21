import 'react-native-gesture-handler';
import React, {useEffect} from 'react'
import { StyleSheet, Alert } from 'react-native'
import NetInfo from "@react-native-community/netinfo"

import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme} from 'react-native-paper';
// Screens
import BottomTab from './navigation/BottomTab';
import SupportScreen from './navigation/screens/SupportScreen';
import { DrawerContent } from './navigation/DrawerContent';
import RootStackScreen from './navigation/screens/RootStackScreen';
import { View } from 'react-native-animatable';
import { AuthContext } from './components/context';

const Drawer = createDrawerNavigator();
const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() =>({
    signIn: () => {
      setUserToken('fgh');
      setIsLoading(false);
    },
    signOut: () => { 
      setUserToken(null);
      setIsLoading(false);},
    signUp: () => {
      setUserToken('fgh');
      setIsLoading(false);
    },
  }),[]);

  // useEffect(() =>{
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // },[]);

  // if (isLoading) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   );
  // }

  const unsuscribe = NetInfo.addEventListener(state => {
    if (state.isConnected === false){
      Alert.alert("no conection", "please reconnect");
    }else if (state.isConnected === true){
      console.log("connected to internet");
    }
  })
  useEffect(() => {
    unsuscribe();
  })
  return (   
    <PaperProvider theme={PaperDarkTheme}> 
    <AuthContext.Provider value={authContext}>
      <NavigationContainer >
        {userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="homeTab" component={BottomTab} />
            <Drawer.Screen name="Support" component={SupportScreen} />
          </Drawer.Navigator>
        ) : 
        <RootStackScreen/>
        }
    </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
);
};

export default App