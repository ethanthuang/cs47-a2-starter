import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Button, ImageBackground, Platform, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Icons, Profiles } from './assets/Themes';

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

  const { width, height } = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={Icons.menu.light} style={styles.navbarImage} />
        <Text style={styles.navBarTitle}>
          ensom
        </Text>
        <Image source={Icons.sun} style={styles.navbarImage} />
      </View>
      <View style={styles.profiles}>
        <View style={styles.profileImageShadow}>
          <ImageBackground source={Profiles.mtl.image} style={styles.profileImage}/>
          <View style={styles.profileNameView}>
            <Text style={styles.profileName}>{Profiles.mtl.name}</Text>
          </View>
          <View style={styles.profileCaptionView}>
            <Text style={styles.profileCaption}>{Profiles.mtl.caption}</Text>
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

      <View style={styles.bottomButtons}> 
        {/* <Text>
          Hi
        </Text> */}
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    //padding: Platform.OS === 'ios' ? 20 : 0,
    //paddingRight: Platform.OS === 'ios' ? 100 : 0,
  },
  navbar: {
    flex: Platform.OS === 'ios' ? 1 : 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
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
  profiles: {
    flex: 8,
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
  bottomButtons: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
