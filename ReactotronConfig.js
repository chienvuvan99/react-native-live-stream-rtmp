import Reactotron, {networking} from 'reactotron-react-native';

let reactotron = null;

if (__DEV__) {
  reactotron = Reactotron.configure({name: 'FireAnt'})
    .useReactNative({
      networking: false,
    })
    .connect();

  Reactotron.clear();
  console.info = Reactotron.log;
}

export default reactotron;
