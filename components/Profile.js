import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Icons, Profiles } from '../assets/Themes';

export default function Profile(props) {
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
    <View style={styles.profiles}>
        <View style={styles.profileImageShadow}>
            <ImageBackground source={props.photo} style={styles.profileImage}/>
            <View style={styles.profileNameView}>
            <Text style={styles.profileName}>{props.name}</Text>
            </View>
            <View style={styles.profileCaptionView}>
            <Text style={styles.profileCaption}>{props.caption}</Text>
            </View>
        </View>
        <View style={styles.audioShadow}>
            
            <View style={styles.audioCard}>
            <Text style={styles.audioText}>
                My hottest take
            </Text>
            <View style={styles.audioImages}>
                <Image source={Icons.player.light} style={styles.playImage} />
                <Image source={Icons.audioWave.light} style={styles.audiowaveImage} />
            </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profiles: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  profileImageShadow: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
  },
  profileImage: {
    flex: 3,
    resizeMode: 'contain',
    width: undefined,
    margin: 20,
    borderRadius: 8,
    aspectRatio: 1/1.1,
    overflow: 'hidden',
    elevation: Platform.OS === 'android' ? 8 : 0,
    marginBottom: Platform.OS === 'ios' ? 60 : 20,
  },
  audioShadow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    width: undefined,
    paddingHorizontal: 20,
  },
  audioCard: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    backgroundColor: Themes.light.bgSecondary,
    marginHorizontal: 14,
    marginBottom: Platform.OS === 'ios' ? 120 : 50,
    marginTop: Platform.OS === 'ios' ? -40 : 0,
    borderRadius: 15,
    elevation: 8,
  },
  audioText: {
    fontSize: 26,
    fontFamily: 'Sydney',
    fontWeight: '300',
    marginTop: 15,
    marginLeft: 15,
  },
  audioImages: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  playImage: {
    flex: 1,
    resizeMode: 'contain',
    height: '60%',
    marginLeft: 10,
  },
  audiowaveImage: {
    flex: 3,
    resizeMode: 'contain',
    height: '50%',
    marginHorizontal: 10,
  },
  profileNameView: {
    position: 'absolute',
    top: 25,
    left: 35,
    right: 0,
    bottom: 0,
    elevation: 10,
  },
  profileName: {
    fontFamily: 'Sydney',
    fontSize: 32,
    color: Themes.light.textSecondary,
  },
  profileCaptionView: {
    position: 'absolute',
    justifyContent: 'flex-end',
    top: 0,
    left: 35,
    right: 0,
    bottom: Platform.OS === 'ios' ? 75 : 30,
    elevation: 10,
  },
  profileCaption: {
    fontFamily: 'Sydney',
    fontSize: 18,
    color: Themes.light.textSecondary,
  },
});
