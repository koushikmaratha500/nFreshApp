import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Card from '../../Components/Card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Divider from '../../Components/Divider';
import MyButton from '../../Components/MyButton';
import _ from 'lodash';
import DeliveryListView from '../../Components/DetailListView';

const DeliveryDetails = (props) => {
    const [tabValue, setTabValue] = useState(0);
    const _handleClick = () => {
        props.navigation.goBack();
    };
    const informationWrapper = (content, index) => {
        return (<View key={index} style={Styles.informationWrapper} >
            <Text style={Styles.labelText}>{content.label}</Text>
            <Text style={Styles.valueText}>{content.valueText}</Text>
        </View>);
    }
    return (
        <View style={Styles.container}>
            <View style={Styles.headerWrapper}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={Styles.backWrapper}><Icon name="angle-left" size={35} /></TouchableOpacity>
                <View style={Styles.headerTextWrapper}><Text style={Styles.headerText}>Delivery Details</Text></View>
            </View>
            <View style={Styles.content}>
                <Card>
                    <View style={Styles.contentWrapper}>
                        <View style={Styles.leftPanel}>
                            <Icon name="th-list" size={20} color={'#5a98ef'} />
                        </View>
                        <View style={Styles.centerPanel}>
                            <Text style={Styles.orderNumber}>Order: #473</Text>
                            <Text style={Styles.orderDate}>July 20, 2020 9:30 am</Text>
                            <Divider />
                            <Text style={Styles.orderProduct}>2x Chicken Nuggets</Text>
                            <Text style={Styles.orderType}>Cash on Delivery</Text>
                        </View>
                        <View style={Styles.rightPanel}>
                            <View style={Styles.orderStatus}><Text style={Styles.orderStatusText}>Successfull</Text></View>
                            <View><Text style={Styles.orderPrice}>₹200</Text></View>
                        </View>
                    </View>
                </Card>
                <Divider />
                <View style={Styles.customTabSelector}>
                    <TouchableOpacity onPress={() => setTabValue(0)}><Text style={tabValue === 0 ? Styles.activeSelector : Styles.nonActiveSelector}>Customer Detail</Text>{tabValue === 0 && <View style={{ borderWidth: 2, borderColor: '#5a98ef' }} />}</TouchableOpacity>
                    <TouchableOpacity onPress={() => setTabValue(1)}><Text style={tabValue === 1 ? Styles.activeSelector : Styles.nonActiveSelector}>Store Information</Text>{tabValue === 1 && <View style={{ borderWidth: 2, borderColor: '#5a98ef' }} />}</TouchableOpacity>
                </View>
                <Divider />
                <Card>
                    <View style={Styles.detailsWrapper}>
                        <DeliveryListView />
                        <DeliveryListView />
                        <DeliveryListView />
                    </View>
                </Card>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    }, headerWrapper: {
        flex: 1, flexDirection: 'row', paddingLeft: 10,
    }, headerTextWrapper: {
        flex: 9, justifyContent: 'center', alignItems: 'center'
    }, headerText: {
        fontFamily: 'Product Sans Bold', fontSize: 25, textAlign: 'center'
    }, backWrapper: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }, content: {
        flex: 8, padding: 20
    }, contentWrapper: {
        flexDirection: 'row', padding: 10
    }, detailsWrapper: {
        padding:10
    }, leftPanel: {
        flex: 1
    }, rightPanel: {
        flex: 4, alignItems: 'flex-end', justifyContent: 'space-between', paddingBottom: 20
    }, centerPanel: {
        flex: 5,
    }, orderNumber: {
        fontFamily: 'Product Sans Bold', fontSize: 20, color: '#5a98ef'
    }, orderDate: {
        fontFamily: 'Product Sans Regular', fontSize: 15, color: '#00000029'
    }, orderProduct: {
        fontFamily: 'Product Sans Bold', fontSize: 17,
    }, orderType: {
        fontFamily: 'Product Sans Regular', fontSize: 13, color: '#CCC'
    }, orderStatus: {
        backgroundColor: '#01b951', paddingTop: 2, paddingBottom: 2, paddingLeft: 4, paddingRight: 4, borderRadius: 2
    }, orderPrice: {
        color: '#01b951', fontFamily: 'Product Sans Bold', fontSize: 15
    }, orderStatusText: {
        color: '#FFF'
    }, activeSelector: {
        color: '#5a98ef', fontFamily: 'Product Sans Bold', fontSize: 20
    }, customTabSelector: {
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10, marginBottom: 10
    }, nonActiveSelector: {
        color: '#c8ced6', fontFamily: 'Product Sans Bold', fontSize: 20
    }
})
export default DeliveryDetails; 