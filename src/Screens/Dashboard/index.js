import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import MyText from '@Components/MyText';
import StatBlock from '../../Components/StatBlock';
import DeliveryBlock from '../../Components/DeliveryBlock';

const Deliveries = [
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
]
const Dashboard = (props) => {
    return (
        <View style={Styles.container} showsVerticalScrollIndicator={false}>
            <View style={Styles.headingWrapper}>
                <MyText style={Styles.nameText}>Hi, Koushik !</MyText>
                <MyText style={Styles.dateText}>Monday, 2 June, 2020</MyText>
            </View>
            <View style={Styles.statsWrapper}>
                <StatBlock />
                <StatBlock />
            </View>
            <View style={Styles.headingWrapper}>
                <MyText style={{ fontFamily: 'Product Sans Regular', fontSize: 25 }}>Pending</MyText>
            </View>
            <View style={Styles.deliveryWrapper}>
                {Deliveries.map((delivery, index) => {
                    return <DeliveryBlock key={index} delivery={delivery} />;
                })}
            </View>
        </View >
    )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1, padding: 20
    }, headingWrapper: {
        flex: 1,
    }, nameText: {
        fontFamily: 'Product Sans Bold', fontSize: 30
    }, dateText: {
        fontFamily: 'Product Sans Regular', fontSize: 15
    }, statsWrapper: {
        flex: 3.5, flexDirection: "row", justifyContent: 'space-around', alignItems: 'center'
    }, deliveryWrapper: {
        flex: 5,
    }
});

export default Dashboard;