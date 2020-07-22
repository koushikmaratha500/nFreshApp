import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import MyText from '@Components/MyText';
import DeliveryBlock from '../../Components/DeliveryBlock';

const dummyDeliveries = [
    {
        orderID: '#0001',
        productTitle: 'Peri Peri Fries',
        orderType: 'Cash On delivery',
        orderPrice: '200',
        status: 'pending'
    },
    {
        orderID: '#0002',
        productTitle: 'Maharaja Mac Burger',
        orderType: 'Prepaid',
        orderPrice: '250',
        status: 'completed'
    },
    {
        orderID: '#0003',
        productTitle: 'Peri Peri Fries',
        orderType: 'Cash On delivery',
        orderPrice: '200',
        status: 'completed'
    },
    {
        orderID: '#0004',
        productTitle: 'Maharaja Mac Burger',
        orderType: 'Prepaid',
        orderPrice: '250',
        status: 'completed'
    },
    {
        orderID: '#0005',
        productTitle: 'KFC Chicken',
        orderType: 'Cash On delivery',
        orderPrice: '200',
        status: 'pending'
    },
    {
        orderID: '#0006',
        productTitle: 'Cheeze Burger',
        orderType: 'Prepaid',
        orderPrice: '250',
        status: 'completed'
    },
];


const Deliveries = (props) => {
    const _handleClick = () => {
        props.navigation.navigate('DeliveryDetails');
    };

    return (
        <View style={Styles.container} showsVerticalScrollIndicator={false}>
            <View style={Styles.headingWrapper}>
                <MyText style={{ fontFamily: 'Product Sans Bold', fontSize: 25 }}>Deliveries</MyText>
            </View>
            <ScrollView style={Styles.deliveryWrapper} showsVerticalScrollIndicator={false}>
                {dummyDeliveries.map((delivery, index) => {
                    return <DeliveryBlock key={index} delivery={delivery} onClickEvent={_handleClick} />;
                })}
            </ScrollView>
        </View >
    )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1, padding: 20
    }, headingWrapper: {

    }, nameText: {
        fontFamily: 'Product Sans Bold', fontSize: 30
    }, deliveryWrapper: {
        marginTop: 35
    }
});

export default Deliveries;