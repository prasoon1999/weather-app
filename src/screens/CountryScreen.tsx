import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView } from 'react-native';

import CustomButton from '../components/CustomButton';
import { CountryTextSection } from '../components/TextSection';
import { getWeatherData } from '../helpers/Helpers';
import { commonStyles } from '../styles/CommonStyles';

const CountryScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const {countryData} = route.params;

  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({
    icon: '',
    temperature: 0,
    precipitation: 0,
    windSpeed: 0,
  });

  useEffect(() => {
    if (weatherData?.icon) {
      navigation.navigate('WEATHER_SCREEN', {weatherData});
    }
  }, [weatherData]);

  return (
    <SafeAreaView style={commonStyles.parentLayout}>
      <Image
        source={{uri: countryData?.flag}}
        style={commonStyles.image}
        borderRadius={16}
      />

      <CountryTextSection
        capitalName={countryData?.capitalName}
        population={countryData?.population}
        latitude={countryData?.latitude}
        longitude={countryData?.longitude}
      />

      <CustomButton
        title={`${countryData?.capitalName}'s Weather`}
        onPress={() =>
          getWeatherData(countryData?.capitalName, setLoading, setWeatherData)
        }
        loading={loading}
      />
    </SafeAreaView>
  );
};

export default CountryScreen;
