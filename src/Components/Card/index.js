import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    let { children } = props;
    return (
        <View style={Styles.container}>
            {children}
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF', padding: 10, borderRadius: 5, shadowColor: "#000",
        textShadowColor: 'rgba(0, 0, 0, 0.30)',
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 10, elevation: 7
    }
})

export default Card;