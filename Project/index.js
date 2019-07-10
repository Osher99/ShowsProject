import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Module RCTImageLoader requires',
  ]);
  
AppRegistry.registerComponent(appName, () => App);
