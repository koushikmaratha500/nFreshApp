import React from 'react'
import { View, StyleSheet } from 'react-native';

const DeliveryIndicator = (props) => {
    const { status } = props;
    let indicator, indicatorShade;
    switch (status) {
        case 'pending':
            indicator = '#e7305b';
            indicatorShade = '#e2979c';
            break;
        case 'completed':
            indicator = '#24a19c';
            indicatorShade = '#6ebfb5';
            break;
        default:
            indicator = '#ffa931';
            indicatorShade = '#fecb89';
            break;
    }
    const Styles = StyleSheet.create({
        indicatorShade: {
            width: 30, height: 30, backgroundColor: indicatorShade, justifyContent: 'center', alignItems: 'center', borderRadius: 20
        }, indicator: {
            width: 10, height: 10, backgroundColor: indicator, borderRadius: 5
        }
    });

    return (
        <View style={Styles.indicatorShade}>
            <View style={Styles.indicator} />
        </View>
    )
}
export default DeliveryIndicator;
