// @flow

import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import PlaygroundScreen from '../screens/PlaygroundScreen';

export default createStackNavigator({
  Home: HomeScreen,
  Playground: PlaygroundScreen,
});
