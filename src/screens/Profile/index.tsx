import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../../constants/onboarding';
import {fontFamily} from '../../constants/fonts';
import {colors} from '../../constants/colors';
import InputField from '../../components/InputField';
import {pick} from 'react-native-document-picker';

const Profile = () => {
  const onImagePress = async () => {
    try {
      const [pickResult] = await pick();
      // const [pickResult] = await pick({mode:'import'}) // equivalent
      // do something with the picked file
      console.log('pickResult ---', pickResult);
    } catch (err: unknown) {
      console.log('err ---', err);

      // see error handling
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={{
          paddingBottom: 120,
        }}>
        <View>
          <Text style={styles.myProfileText}>My Profile</Text>
        </View>
        <View style={styles.profileImgContainer}>
          <Image source={images.profileAvatar} style={styles.profileImg} />
          <View style={styles.uploadBtnContainer}>
            <TouchableOpacity onPress={onImagePress}>
              <Text>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileFieldsContainer}>
          <InputField label="First Name" value="ravi" />
          <InputField label="Last Name" />
          <InputField label="Email" />
          <InputField label="Phone Number" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    padding: 20,
  },
  myProfileText: {
    fontFamily: fontFamily.JakartaExtraBold,
    fontSize: 24,
  },
  profileImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    height: 200,
    width: 200,
  },
  uploadBtnContainer: {
    backgroundColor: colors.success['400'],
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  profileFieldsContainer: {
    backgroundColor: colors.general['500'],
    padding: 20,
    borderRadius: 20,
  },
});

export default Profile;
