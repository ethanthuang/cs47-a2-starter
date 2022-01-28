import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Icons, Profiles } from './assets/Themes';
import NavBar from './components/navBar';
import Profile from './components/Profile';
import BottomButtons from './components/BottomButtons';
import BottomButtonLabels from './components/BottomButtonLabels';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
      <NavBar></NavBar>

      <Profile photo={Profiles.mtl.image} name={Profiles.mtl.name} caption={Profiles.mtl.caption}></Profile>

      <BottomButtons></BottomButtons>
      <BottomButtonLabels></BottomButtonLabels>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
