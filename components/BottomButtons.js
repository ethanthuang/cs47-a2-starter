import AppLoading from 'expo-app-loading';
import { StyleSheet, View, StatusBar, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Icons } from '../assets/Themes';

export default function BottomButtons() {
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
        <View style={styles.bottomButtons}>
            <Image source={Icons.discover.light} style={styles.bottomButtonStyles} />
            <Image source={Icons.heart.light} style={styles.bottomButtonStyles} />
            <Image source={Icons.messages.light} style={styles.bottomButtonStyles} />
        </View>
    );
}

const styles = StyleSheet.create({
    bottomButtons: {
        flex: 0.8,
        backgroundColor: Themes.light.navigation,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    bottomButtonStyles: {
        resizeMode: 'contain',
        flex: 1,
        height: '60%',
    },
});
