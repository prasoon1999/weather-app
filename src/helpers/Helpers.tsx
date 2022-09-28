import { Alert } from 'react-native';

const accessKey = '1d5eb42dd300547b147d71806809c900';
const countryDataApi = 'https://restcountries.com/v3.1/name/';
const weatherDataApi = `http://api.weatherstack.com/current?access_key=${accessKey}&query=`;

const countryErrorAlert = () => {
  Alert.alert(
    'Invalid country name',
    'Make sure that the name is spelled correctly',
    [{text: 'Ok'}],
  );
};

const weatherErrorAlert = () => {
  Alert.alert(
    'Weather data not found',
    'api.weatherstack.com was not able to provide the data',
    [{text: 'Ok'}],
  );
};

export const getCountryData = async (
  countryName: string,
  setLoading: any,
  setCountryData: any,
) => {
  setLoading(true);
  try {
    const response = await fetch(`${countryDataApi + countryName.trim()}`);
    if (response?.ok) {
      const data = await response.json();
      setCountryData({
        flag: data?.[0]?.flags?.png,
        capitalName: data?.[0]?.capital?.[0],
        population: data?.[0]?.population,
        latitude: data?.[0]?.latlng?.[0],
        longitude: data?.[0]?.latlng?.[1],
      });
    } else {
      countryErrorAlert();
    }
  } catch (error: any) {
    console.log(error);
  }
  setLoading(false);
};

export const getWeatherData = async (
  capitalName: string,
  setLoading: any,
  setWeatherData: any,
) => {
  setLoading(true);
  try {
    const response = await fetch(`${weatherDataApi + capitalName}`);
    if (response?.ok) {
      const data = await response.json();
      setWeatherData({
        icon: data?.current?.weather_icons?.[0],
        temperature: data?.current?.temperature,
        precipitation: data?.current?.precip,
        windSpeed: data?.current?.wind_speed,
      });
    } else {
      weatherErrorAlert();
    }
  } catch (error: any) {
    console.log(error);
  }
  setLoading(false);
};
