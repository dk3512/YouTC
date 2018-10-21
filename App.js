import React, {Component} from 'react';
//uninstall react-native-elements if not using it
// import { Header } from 'react-native-elements';
import { View, Dimensions, StyleSheet, NativeModules, StatusBar, AppState } from 'react-native';
import YouTube from 'react-native-youtube';

import YouTubeScreen from './YouTubeScreen';
import TwitchChat from './TwitchChat';
// import { createStackNavigator } from 'react-navigation';
// import RNNavigationBar from 'react-native-navigation-bar';
// module.exports = NativeModules.RNNavigationBar;

// RNNavigationBar.hide();
StatusBar.setHidden(true);


const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {mode: isPortrait() ? 'portrait' : 'landscape'};

    Dimensions.addEventListener('change', () => {
      this.setState({
        mode: isPortrait() ? 'portrait' : 'landscape'
      });
    });
  }

  componentDidMount() {
    StatusBar.setHidden(true);

    // AppState.addEventListener('change', this._handleAppStateChange);
  }

  // componentWillUnmount() {
  //   AppState.removeEventListener('change', this._handleAppStateChange);
  // }

  // _handleAppStateChange = (nextAppState) => {
  //   if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
  //     StatusBar.setHidden(true);
  //   }
  //   this.setState({appState: nextAppState});
  // }

  render() {

    return (
      //TODO put this back in YouTubeScreen.js hide android status bar     
      <View style={{ flex: 1, flexDirection: this.state.mode == 'portrait' ? 'column' : 'row'}}>
        <YouTubeScreen mode = {this.state.mode}/>
        <TwitchChat mode = {this.state.mode}/>
      </View>
    );
  }
}

// const App = createStackNavigator({
//   search: { screen: Search },
//   main: { screen: Main },
// });

// export default App;