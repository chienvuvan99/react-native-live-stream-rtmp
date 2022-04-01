/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

AppRegistry.registerComponent(appName, () => App);
