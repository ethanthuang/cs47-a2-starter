import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Button, ImageBackground } from 'react-native';
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
        <Text>
          Hi
        </Text>
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
  },
  navbarImage: {
    resizeMode: 'contain',
    flex: 1,
    marginHorizontal: 20,
  },
  navBarTitle: {
    flex: 4,
    fontFamily: 'Sydney-Bold',
    textAlign: 'center',
    fontSize: 35,
  },
  profiles: {
    display: 'flex',
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
    height: undefined,
    margin: 20,
    borderRadius: 8,
    aspectRatio: 1/1.1,
    overflow: 'hidden',
    elevation: 8,
  },
  audioShadow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
  },
  audioCard: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    borderColor: 'black',
    borderWidth: 0,
    margin: 40,
    borderRadius: 15,
    elevation: 8,
    backgroundColor: Themes.light.bgSecondary,
  },
  audioText: {
    fontSize: 18,
    fontFamily: 'Sydney',
    fontWeight: '300',
    marginTop: 15,
    marginLeft: 15,
  },
  audioImages: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  playImage: {
    flex: 1,
    resizeMode: 'contain',
    height: '60%',
  },
  audiowaveImage: {
    flex: 3,
    resizeMode: 'contain',
    height: '50%',
    marginRight: 20,
  },
  profileName: {
    position: 'absolute',
  },
  bottomButtons: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
