import React, { memo } from 'react';
import { TextInput } from 'react-native';

import { homeStyles } from '../styles/CommonStyles';

const CustomTextInput = (props: any) => (
  <TextInput
    placeholder={props?.placeholder}
    value={props?.value}
    maxLength={30}
    numberOfLines={1}
    style={homeStyles.formContainer}
    onChangeText={props?.onChangeText}
    placeholderTextColor="gray"
  />
);

export default memo(CustomTextInput);
