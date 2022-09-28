import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import {getCountryData} from '../helpers/Helpers';
import {homeStyles} from '../styles/CommonStyles';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const [loading, setLoading] = useState(false);
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState({
    flag: '',
    capitalName: '',
    population: 0,
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    if (countryData?.flag) navigation.navigate('COUNTRY_SCREEN', {countryData});
  }, [countryData]);

  return (
    <SafeAreaView style={homeStyles.parentLayout}>
      <CustomTextInput
        placeholder="Enter country"
        value={countryName}
        onChangeText={(text: string) => {
          setCountryName(text);
        }}
      />

      <CustomButton
        title="Submit"
        onPress={() => getCountryData(countryName, setLoading, setCountryData)}
        disabled={countryName.length < 4} // Shortest country names are of 4 letters
        loading={loading}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
