import React, { Component } from 'react';
import { View, Text,  StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import YouTube from 'react-native-youtube';
// import { Header } from 'react-native-elements';

const API_KEY = '${process.env.REACT_APP_API_KEY}';

class YouTubeScreen extends Component {
    // static navigationOptions = {
    //     title: 'YouTC'
    // };

    // handleSearchVideoEvent = () => {
    //     this.props.navigation.navigate('main');
    // }

    constructor(props) {
        super(props);
        this.state = { showHeader: false };
    }

    onTap = () => {
        this.setState({ showHeader: !this.state.showHeader })
    }
    render() {
        return (
            // <Header
            //     key="header"
            //     placement="left" 
            //     centerComponent={
            //         <View style={{ width: Dimensions.get('window').width * 1}}>
            //             <Text style={{ color: '#fff', fontSize: 16 }}>YouTC</Text>
            //         </View>
            //     }
            //     rightComponent = {{ icon: 'search', color: '#fff'}}
            //     style={[ !this.state.showHeader && headerStyles.hidden ]}
            // />,
            //TODO: make app name and logos here
            <YouTube
                apiKey={API_KEY}
                videoId="KVZ-P-ZI6W4"   // The YouTube video ID
                play={false}             // control playback of video with true/false
                fullscreen={false}       // control whether the video should play in fullscreen or inline
                loop={false}             // control whether the video should loop when ended
                showFullscreenButton={false}

                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}

                // style={{ alignSelf: 'stretch', height: 300 }}
                style={ this.props.mode == "portrait" ? portraitStyles.container : landscapeStyles.container }
            >
            </YouTube>
            
            
            // <TouchableWithoutFeedback onPress = { this.onTap }>
            //     <View style={this.props.mode == "portrait" ? portraitStyles.container : landscapeStyles.container }>
            //         <Text>Hello!</Text>
            //     </View>
            // </TouchableWithoutFeedback>
        );
    }
}

const headerStyles = StyleSheet.create({
    hidden: {
        display: 'none',
        alignSelf: 'stretch'
    }
})

const portraitStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch'
    },
});

const landscapeStyles = StyleSheet.create({
    container: {
        flex: 5,
        alignSelf: 'stretch'
    },
});

export default YouTubeScreen;