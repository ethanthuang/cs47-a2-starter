import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from '../assets/Themes';

export default function BottomButtonLabels() {
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
    <View style={styles.bottomButtonsText}>
        <Text style={styles.bottomButtonTextStyles}>Discover</Text>
        <Text style={styles.bottomButtonTextStyles}>Matches</Text>
        <Text style={styles.bottomButtonTextStyles}>DMs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    bottomButtonsText: {
        flex: 0.3,
        backgroundColor: Themes.light.navigation,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingBottom: 30,
    },
    bottomButtonTextStyles: {
        flex: 1,
        fontFamily: 'Sydney',
        fontSize: 18,
        color: Themes.light.textSecondary,
        textAlign: 'center',
    }
});
