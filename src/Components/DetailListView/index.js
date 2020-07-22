import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const DeliveryListView = (props) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.textWrapper}>
                <Text>Full Name</Text>
                <Text>Koushik Maratha</Text>
            </View>
            <View style={Styles.iconWrapper}>
                <View>
                    <Icon name="phone-alt" size={30} />
                </View>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'row',padding:10
    }, textWrapper: {
        flex: 8
    }, iconWrapper: {
        flex: 2
    }
})

export default DeliveryListView;