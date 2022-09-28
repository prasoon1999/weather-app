import React, { memo } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { homeStyles } from '../styles/CommonStyles';

const CustomButton = (props: any) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={props?.onPress}
    disabled={props?.disabled}
    style={
      props?.disabled
        ? [homeStyles.button, {backgroundColor: '#e1dced'}]
        : homeStyles.button
    }>
    {props?.loading ? (
      <ActivityIndicator color="white" />
    ) : (
      <Text style={homeStyles.buttonText}>{props?.title}</Text>
    )}
  </TouchableOpacity>
);

export default memo(CustomButton);
