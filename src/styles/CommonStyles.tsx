import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  parentLayout: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '100%',
    aspectRatio: 320 / 213,
    backgroundColor: '#f3edf7',
    overlayColor: 'white',
  },
  heading: {
    marginTop: 20,
    color: '#000',
    fontSize: 20,
  },
  text: {
    color: '#000',
    fontSize: 14,
  },
  buttonText: {
    textAlignVertical: 'center',
    fontWeight: '500',
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6750a4',
    height: 40,
    marginTop: 32,
    borderRadius: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});

export const homeStyles = StyleSheet.create({
  parentLayout: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  formContainer: {
    height: 56,
    padding: 12,
    borderWidth: 1,
    borderColor: '#b5b0b7',
    borderRadius: 4,
    color: '#000',
    fontSize: 16,
  },
  buttonText: {
    textAlignVertical: 'center',
    fontWeight: '500',
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6750a4',
    height: 40,
    marginTop: 32,
    borderRadius: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});
