import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import DeliveryIndicator from '../StatBlock/DeliveryIndicator';
import MyText from '@Components/MyText';
import Divider from '@Components/Divider';


const NotificationBlock = (props) => {
    let { delivery } = props;
    const { width, height } = Dimensions.get('window');
    const Styles = StyleSheet.create({
        container: {
            flex: 1, flexDirection: 'row', borderRadius: 15, backgroundColor: '#FFF', minHeight: width / 3, shadowColor: "#000",
            textShadowColor: 'rgba(0, 0, 0, 0.30)',
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10, elevation: 7
        }, deliveryIndicator: {
            flex: 1, alignItems: 'center', paddingTop: 20
        }, detailWrapper: {
            flex: 4, justifyContent: 'space-evenly'
        }, priceWrapper: {
            flex: 2, alignItems: 'center', paddingTop: 20
        }, orderNumberText: {
            fontFamily: 'Product Sans Regular', fontSize: 22, color: '#01a9b4'
        }, orderDetails: {
            fontFamily: 'Product Sans Bold', fontSize: 22,
        }, orderType: {
            fontFamily: 'Product Sans Regular', fontSize: 17, color: '#CCC'
        }, orderPriceText: {
            fontFamily: 'Product Sans Bold', fontSize: 22, color: '#438a5e'
        },
    });

    return (
        <>
            <TouchableOpacity style={Styles.container}>
                <View style={Styles.deliveryIndicator}>
                    <DeliveryIndicator status={delivery.status} />
                </View>
                <View style={Styles.detailWrapper}>
                    <MyText style={Styles.orderNumberText}>{delivery.orderID}</MyText>
                    <MyText style={Styles.orderDetails}>{delivery.productTitle}</MyText>
                    <MyText style={Styles.orderType}>{delivery.orderType}</MyText>
                </View>
                <View style={Styles.priceWrapper}>
                    <MyText style={Styles.orderPriceText}>₹{delivery.orderPrice}</MyText>
                </View>
            </TouchableOpacity>
            <Divider />
        </>
    );
}

export default NotificationBlock;