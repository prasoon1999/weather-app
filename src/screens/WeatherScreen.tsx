import React from 'react';
import { Image, SafeAreaView } from 'react-native';

import { WeatherTextSection } from '../components/TextSection';
import { commonStyles } from '../styles/CommonStyles';

const CountryScreen = ({route}: {route: any}) => {
  const {weatherData} = route.params;

  return (
    <SafeAreaView style={commonStyles.parentLayout}>
      <Image
        source={{uri: weatherData?.icon}}
        style={{...commonStyles.image, width: 100, aspectRatio: 1}}
        borderRadius={16}
      />

      <WeatherTextSection
        temperature={weatherData?.temperature}
        precipitation={weatherData?.precipitation}
        windSpeed={weatherData?.windSpeed}
      />
    </SafeAreaView>
  );
};

export default CountryScreen;
