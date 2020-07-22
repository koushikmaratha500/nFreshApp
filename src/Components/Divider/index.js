import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = (props) => {
    let { color } = props;
    const Styles = StyleSheet.create({
        divider: {
            borderBottomColor: color ? color : 'transparent', borderWidth: color ? 1 : 0,
            marginTop: 10, marginBottom: 10
        }
    })
    return (
        <View style={Styles.divider} />
    )
}


export default Divider;