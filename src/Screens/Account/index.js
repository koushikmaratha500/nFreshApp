import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Card from '../../Components/Card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Divider from '../../Components/Divider';
import MyButton from '../../Components/MyButton';
import _ from 'lodash';


const Account = (props) => {
    const _handleClick = () => {
        props.navigation.navigate.goBack();
    };
    const detailsArr = [{ label: 'FirstName', valueText: 'Koushik' }, { label: 'LastName', valueText: 'Maratha' }, { label: 'Email Address', valueText: 'koushik.maratha@gmail.com' }, { label: 'Phone', valueText: '+91 8686490500' },]
    const informationWrapper = (content, index) => {
        return (<View key={index} style={Styles.informationWrapper} >
            <Text style={Styles.labelText}>{content.label}</Text>
            <Text style={Styles.valueText}>{content.valueText}</Text>
        </View>);
    }
    return (
        <View style={Styles.container}>
            <View style={Styles.headerWrapper}>
                <View style={Styles.headerTextWrapper}><Text style={Styles.headerText}>Personal Information</Text></View>
            </View>
            <View style={Styles.content}>
                <Card>
                    <View style={Styles.contentWrapper}>
                        <View style={Styles.leftPanel}>
                            <View style={Styles.imageWrapper}>
                                <Image style={Styles.profileImage} source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} />
                            </View>
                        </View>
                        <View style={Styles.rightPanel}>
                            {_.map(detailsArr, (detail, index) => {
                                return informationWrapper(detail, index)
                            })}
                        </View>
                    </View>
                </Card>
                <Divider />
                <MyButton buttonText={'Logout'} onClickEvent={_handleClick} />
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
        flexDirection: 'row'
    }, leftPanel: {
        flex: 2.5
    }, rightPanel: {
        flex: 7.5
    }, imageWrapper: {
        marginTop: 10
    }, profileImage: { width: 74, height: 74, borderRadius: 37 },
    informationWrapper: {
        margin: 12
    }, labelText: {
        fontFamily: 'Product Sans Regular', fontSize: 15,
    }, valueText: {
        fontFamily: 'Product Sans Bold', fontSize: 18,
    },
})
export default Account; 