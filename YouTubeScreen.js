import React, { Component } from 'react';
import { View, Text,  StyleSheet, TouchableWithoutFeedback, Dimensions, WebView } from 'react-native';
// import Video from 'react-native-video';
import YouTube from 'react-native-youtube';
// import { Header } from 'react-native-elements';

const API_KEY = '${process.env.REACT_APP_API_KEY}';
var portraitHeight;
var landscapeHeight;

class YouTubeScreen extends Component {
    // static navigationOptions = {
    //     title: 'YouTC'
    // };

    // handleSearchVideoEvent = () => {
    //     this.props.navigation.navigate('main');
    // }

    constructor(props) {
        super(props);
        this.state = { height: 0, width: 0, start: true, portraitStart: true, landscapeStart: true, play: false, fullscreen: true, playStart: true};
        // , heightFlag: true, widthFlag: true
    }

    handleReady = () => {
        // setTimeout(() => this.setState({ height: this.state.getHeight + 1 }), 5000);
        // setTimeout(() => this.setState({ height: this.state.height + 1}), 500);
        if (this.props.mode == "portrait") {
            setTimeout(() => this.setState({ height: portraitHeight + 1}), 500);
        } else {
            setTimeout(() => this.setState({ height: landscapeHeight + 1}), 500);
        }
        console.log("Handle Ready 1");

        
        // this.props.mode == "portrait" ? setTimeout(() => this.setState({ height: this.state.height + 1}), 500) 
        //     : setTimeout(() => this.setState({ width: this.state.width + 1}), 500);
        
    }

    // getDimensions = (layout) => {
    // getDimensions = (viewHeight) => {
    //     // this.setState({ height: layout.height, heightFlag: false})
    //     // this.props.mode == "portrait" ? this.setState({ height: layout.height, portraitStart: false}) 
    //     //     : this.setState({ height: layout.height, landscapeStart: false});
    //     this.setState({ height: viewHeight, start: false});
    //     console.log("height: " + viewHeight);
    //     // if (this.props.mode == "portrait") {
    //     //     console.log("height: " + layout.height);
    //     // } else {
    //     //     console.log("width: " + layout.width);
    //     // }
    // }

    youtubeStyle = function(portraitStart, landscapeStart) {
        console.log("STYLE");
        if (this.state.portraitStart && this.props.mode == "portrait") {
            return {
                // alignSelf: 'stretch', height: this.state.height
                alignSelf: 'stretch', flex: 1 
            }
        } else if (this.state.landscapeStart && this.props.mode == "landscape") {
            return {
                alignSelf: 'stretch', flex: 1 
            }
        } else if (this.props.mode == "portrait") {
            return {
                alignSelf: 'stretch', height: portraitHeight
            }
        } else if (this.props.mode == "landscape") {
            return {
                alignSelf: 'stretch', height: landscapeHeight
            }
        }
    }
    //learn what this means
    // onChangeState = ({state}) => {
    //     console.log(state);
	// 	if (state !== "playing") {
    //         console.log("DO SOMETHING");
    //         this.setState({play: false});
    //     }

	// }

    render() {
        return (
            //TODO: delete video package
            <View style={ this.props.mode == "portrait" ? portraitStyles.container : landscapeStyles.container }>
                <YouTube
                    apiKey={API_KEY}
                    videoId="hHW1oY26kxQ"   // The YouTube video ID
                    play={this.state.play}             // control playback of video with true/false
                    fullscreen={this.state.fullscreen}       // control whether the video should play in fullscreen or inline
                    loop={false}             // control whether the video should loop when ended
                    showFullscreenButton={false}
                    controls = {1}
                    onLayout = {(event) => {
                        console.log("onLayout");
                        // if (this.state.start) {
                        //     this.getDimensions(event.nativeEvent.layout.height);
                        // } else if (this.props.mode == "landscape") {
                        //     var {height, width} = Dimensions.get('window');
                        //     this.getDimensions(height);
                        // }
                        console.log(this.state.portraitStart);
                        console.log(this.props.mode == "portrait");
                        if (this.state.portraitStart && this.props.mode == "portrait") {
                            var height = event.nativeEvent.layout.height;
                            portraitHeight = height;
                            console.log(height);
                            // this.getDimensions(height);
                            this.setState({ portraitStart: false});
                        } else if (this.state.landscapeStart && this.props.mode == "landscape") {
                            var {height, width} = Dimensions.get('window');
                            landscapeHeight = height;
                            // this.getDimensions(height);
                            this.setState({ landscapeStart: false});
                        } 
                        if (this.props.mode == "portrait") {
                            // setTimeout(() => this.setState({ height: portraitHeight - 1}), 500);
                            this.setState({ height: portraitHeight});
                        } else if (this.props.mode == "landscape") {
                            // setTimeout(() => this.setState({ height: landscapeHeight - 1}), 500);
                            this.setState({ height: landscapeHeight});
                        }
                        
                    }}
                    onReady={e => this.setState({ isReady: true })}
                    // onReady = {this.handleReady}
                    onChangeState={e => this.setState({ status: e.state })}
                    // onChangeState={this.onChangeState}
                    // onChangeState={event => {
                    //     if ((event.state === 'paused' || event.state === 'stopped') && this.state.playStart && this.state.fullscreen) {
                    //         setTimeout(() => this.setState({ play: true, playStart: false, fullscreen: false }), 700);
                    //     } 
                    //     // this.setState({play: true});
                    //     // else if (event.state === 'paused' || event.state === 'stopped' || event.state === 'ended') {
                    //     //     this.setState({ play: false })
                    //     // }
                    // }}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    // style = {{ alignSelf: 'stretch', flex: 1 }}
                    style = {this.youtubeStyle()}
                    // style = { this.state.start = true ? {alignSelf: 'stretch', flex: 1 } : {alignSelf: 'stretch', height: 500}} 
                    // style = { this.props.mode == "portrait" ?  {alignSelf: 'stretch', height: this.state.height } 
                    //     : {alignSelf: 'stretch', width: this.state.width }}

                    // style={ this.props.mode == "portrait" ? portraitStyles.container : landscapeStyles.container }
                    
                />
            </View>
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
        alignSelf: 'stretch',
        flex: 1
    },
});

const landscapeStyles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 5
    },
});

export default YouTubeScreen;