import {StyleProp, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../constants/colors';
import {fontFamily} from '../constants/fonts';

interface ButtonProps {
  onPress: () => void;
  text: string;
  isFullWidth: boolean;
  backgroundColor: string;
}

const Button = ({onPress, text, isFullWidth, backgroundColor}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isFullWidth && styles.fullWidth,
        backgroundColor && {backgroundColor},
      ]}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  btnText: {
    fontFamily: fontFamily.JakartaBold,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary['100'],
  },
  fullWidth: {
    width: '100%',
  },
});

export default Button;
