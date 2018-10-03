import React, {Component} from 'react';
//uninstall react-native-elements if not using it
// import { Header } from 'react-native-elements';
import { View, Dimensions, StyleSheet, NativeModules } from 'react-native';
import YouTube from './YouTube';
import TwitchChat from './TwitchChat';
// import { createStackNavigator } from 'react-navigation';
// import RNNavigationBar from 'react-native-navigation-bar';
// module.exports = NativeModules.RNNavigationBar;

// RNNavigationBar.hide();

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


  render() {

    return (
      <View style={{ flex: 1, flexDirection: this.state.mode == 'portrait' ? 'column' : 'row'}}>
        <YouTube mode = {this.state.mode}/>
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