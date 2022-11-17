import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './android/src/SplashScreen';
import Landing from './android/src/Landing';
import Posts from './android/src/Post';
import Details from './android/src/PostDetails';
import Album from './android/src/Album';
import AlbumDetails from './android/src/AlbumDetails';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Landing" component={Landing} options={{ headerTransparent: true, headerLeft: () => null }} />
        <Stack.Screen name="Post" component={Posts} options={{headerShown:false}}/>
        <Stack.Screen name="PostDetails" component={Details} options={{headerShown:false}}/>
        <Stack.Screen name="Album" component={Album} options={{headerShown:false}} />
        <Stack.Screen name="AlbumDetails" component={AlbumDetails} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;