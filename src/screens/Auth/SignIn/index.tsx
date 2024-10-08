import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {images} from '../../../constants/onboarding';
import {fontFamily} from '../../../constants/fonts';
import {colors} from '../../../constants/colors';
import {useForm, Controller} from 'react-hook-form';
import Button from '../../../components/Button';
import {NavigationProp} from '@react-navigation/native';
import {RootNativeStackParamList} from '../../../types/navigation';
import Config from 'react-native-config';

interface Data {
  name: string;
  email: string;
  password: string;
}

interface SignInProps {
  navigation: NavigationProp<RootNativeStackParamList>;
}

const SignIn = ({navigation}: SignInProps) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: Data) => {
    console.log(data);
    console.log(`${Config.API_ENDPOINT}/auth/login`);
  };

  const handleLoginRedirect = () => {
    reset();
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={images.signUpCar} style={styles.image} />
          <Text style={styles.title}>Welcome 👋</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          <Controller
            control={control}
            name="email"
            rules={{required: 'Email is required'}}
            render={({field: {onChange, onBlur, value}}) => (
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <>
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                    />
                    {errors.email && (
                      <Text style={styles.errorText}>
                        {errors.email.message}
                      </Text>
                    )}
                  </>
                </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            )}
          />
          <Text style={styles.label}>Password</Text>
          <Controller
            control={control}
            rules={{required: 'Password is required'}}
            render={({field: {onChange, onBlur, value}}) => (
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <>
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                    />
                    {errors.password && (
                      <Text style={styles.errorText}>
                        {errors.password.message}
                      </Text>
                    )}
                  </>
                </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            )}
            name="password"
          />

          <Button
            isFullWidth
            backgroundColor={colors.primary['500']}
            text="Sign In"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        <View style={styles.loginAlreadyText}>
          <Text>New here?</Text>
          <Text style={styles.loginText} onPress={handleLoginRedirect}>
            Sign up
          </Text>
        </View>

        {/* COMMENT IN PRODUCTION */}
        <View style={styles.loginAlreadyText}>
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('MainTabs')}>
            Home
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 250,
  },
  image: {
    zIndex: 0,
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 24, // Equivalent to text-2xl
    color: colors.secondary['900'],
    fontFamily: fontFamily.JakartaSemiBold,
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  formContainer: {
    padding: 14,
  },
  label: {
    color: colors.secondary['900'],
    margin: 20,
    marginLeft: 0,
  },
  input: {
    backgroundColor: colors.primary['100'],
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  loginAlreadyText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: colors.primary['500'],
  },
  errorText: {
    color: colors.danger['600'],
    marginTop: 5,
  },
});

export default SignIn;
