import {
  ImageStyle,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  className?: string;
}
