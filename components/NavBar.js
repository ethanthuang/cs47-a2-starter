import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Icons } from '../assets/Themes';

export default function NavBar() {
  let [fontsLoaded] = useFonts({
    Sydney: require('../assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('../assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.navbar}>
        <Image source={Icons.menu.light} style={styles.navbarImage} />
        <Text style={styles.navBarTitle}>
            ensom
        </Text>
        <Image source={Icons.sun} style={styles.navbarImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: Platform.OS === 'ios' ? 1 : 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  navbarImage: {
    resizeMode: 'contain',
    flex: 1,
    height: '50%',
  },
  navBarTitle: {
    flex: 4,
    fontFamily: 'Sydney-Bold',
    textAlign: 'center',
    fontSize: 32,
  },
});
