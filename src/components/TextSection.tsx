import React from 'react';
import { Text } from 'react-native';

import { commonStyles } from '../styles/CommonStyles';

export const WeatherTextSection = (props: any) => (
  <>
    <Text style={commonStyles.heading}>Temperature</Text>
    <Text style={commonStyles.text}>{props?.temperature}° C</Text>
    <Text style={commonStyles.heading}>Precipitation</Text>
    <Text style={commonStyles.text}>{props?.precipitation}%</Text>
    <Text style={commonStyles.heading}>Wind speed</Text>
    <Text style={commonStyles.text}>{props?.windSpeed} kmph</Text>
  </>
);

export const CountryTextSection = (props: any) => (
  <>
    <Text style={commonStyles.heading}>Capital</Text>
    <Text style={commonStyles.text}>{props?.capitalName}</Text>
    <Text style={commonStyles.heading}>Population</Text>
    <Text style={commonStyles.text}>{props?.population}</Text>
    <Text style={commonStyles.heading}>Latitude</Text>
    <Text style={commonStyles.text}>{props?.latitude}°</Text>
    <Text style={commonStyles.heading}>Longitude</Text>
    <Text style={commonStyles.text}>{props?.longitude}°</Text>
  </>
);
