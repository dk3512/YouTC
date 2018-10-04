import React, { Component } from 'react';
import { View, Text,  StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
// import { Header } from 'react-native-elements';

class YouTube extends Component {
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
            // <TouchableHighlight onPress = { this.onTap } key = "YouTube">
            //     <View></View>
            // </TouchableHighlight>,
            <View style={this.props.mode == "portrait" ? portraitStyles.container : landscapeStyles.container }>
                <Text>Hello!</Text>
            </View>
            // <Button
            //     title="Search"
            //     onPress={this.handleSearchVideoEvent}
            //     buttonColor="rgba(231, 76, 60, 1)"
            // />
        );
    }
}

const headerStyles = StyleSheet.create({
    hidden: {
        display: 'none'
    }
})

const portraitStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const landscapeStyles = StyleSheet.create({
    container: {
        flex: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default YouTube;