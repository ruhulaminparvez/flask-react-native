import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class ClassHome extends Component {

    state = {
        designation: "Dev"
    }

    render() {
        return (
                <View>
                    <Text style = { styles.textStyle}>{this.props.title} {this.state.designation}</Text>
                    <Button title = "Click Here" onPress = {() => this.setState({designation: "Developer"})}>Click Here</Button>

                </View>
            )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
        marginTop: 10
    }

});

export default ClassHome


