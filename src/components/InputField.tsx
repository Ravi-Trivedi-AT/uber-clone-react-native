import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {fontFamily} from '../constants/fonts';
import {InputFieldProps} from '../types/input';

const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
          <View style={[styles.inputContainer, containerStyle]}>
            {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
            <TextInput
              style={[styles.input, inputStyle]}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  wrapper: {
    marginVertical: 8,
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontFamily: fontFamily.JakartaSemiBold,
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  input: {
    flex: 1,
    borderRadius: 999,
    padding: 16,
    fontFamily: fontFamily.JakartaSemiBold,
    fontSize: 15,
    textAlign: 'left',
  },
});

export default InputField;
