import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  liveStreamButton: {
    backgroundColor: '#34495e',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 25,
    marginBottom: 15,
  },
  textButton: {
    color: 'white',
    fontSize: 25,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginVertical: 16,
    marginHorizontal: 50,
    fontSize: 23,
  },
  flatList: {
    marginHorizontal: 15,
  },
  welcomeText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 25,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    marginLeft: 20,
    marginVertical: 25,
  },
});

export default styles;
