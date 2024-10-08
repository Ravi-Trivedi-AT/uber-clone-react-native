import {NavigationProp} from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootNativeStackParamList} from '../../types/navigation';
import Swiper from 'react-native-swiper';
import {useRef, useState} from 'react';
import {colors} from '../../constants/colors';
import {onboarding} from '../../constants/onboarding';
import {fontFamily} from '../../constants/fonts';
import Button from '../../components/Button';

interface OnboardingProps {
  navigation: NavigationProp<RootNativeStackParamList>;
}

const Onboarding = ({navigation}: OnboardingProps) => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isLastSide = activeIndex === onboarding.length - 1;

  const handleSkip = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleSkip} style={styles.skipBtn}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={index => setActiveIndex(index)}>
        {onboarding.map(item => (
          <View key={item.id} style={styles.onboardingContext}>
            <Image source={item.image} style={styles.onboardingImg} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </Swiper>
      <Button
        text={isLastSide ? 'Get Started' : 'Next'}
        onPress={() =>
          isLastSide
            ? navigation.navigate('SignUp')
            : swiperRef.current?.scrollBy(1)
        }
        isFullWidth
        backgroundColor={colors.primary['500']}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary['100'],
  },
  skipBtn: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  skipText: {
    fontFamily: fontFamily.JakartaBold,
    fontSize: 18,
    fontWeight: 'medium',
  },
  onboardingContext: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardingImg: {
    width: '100%',
    height: 300,
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  title: {
    fontSize: 24, // Equivalent to text-3xl
    fontWeight: 'bold',
    marginHorizontal: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16, // Equivalent to text-md
    fontFamily: fontFamily.JakartaSemiBold, // Make sure this font is loaded in your project
    textAlign: 'center',
    color: '#858585',
    marginHorizontal: 10,
    marginTop: 3,
  },
  dot: {
    backgroundColor: colors.primary['400'],
    width: 32,
    height: 4,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: colors.primary['500'],
    width: 32,
    height: 4,
    marginHorizontal: 2,
  },
});

export default Onboarding;
