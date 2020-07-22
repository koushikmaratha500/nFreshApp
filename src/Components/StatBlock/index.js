import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const StatBlock = (props) => {
    const { width, height } = Dimensions.get('window');
    const Styles = StyleSheet.create({
        container: {
            height: width / 2.4, width: width / 2.4, backgroundColor: '#FFF', borderRadius: 10, shadowColor: "#000",
            textShadowColor: 'rgba(0, 0, 0, 0.30)',
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10, elevation: 7
        }
    });

    return (
        <TouchableOpacity style={Styles.container}>

        </TouchableOpacity>
    )
}
export default StatBlock;