import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TwitchChat extends Component {
    // static navigationOptions = {
    //     title: 'YouTC'
    // };

    // handleSearchScreenEvent = () => {
    //     this.props.navigation.navigate('search');
    // }

    render() {
        return (
            <View style={this.props.mode ? portraitStyles.container : landscapeStyles.container }>
                <Text>Hello</Text>
            </View>
            // <Button
            //     title="Search"
            //     onPress={this.handleSearchScreenEvent}
            //     buttonColor="rgba(231, 76, 60, 1)"
            // />
        );
    }
}

const portraitStyles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const landscapeStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default TwitchChat;