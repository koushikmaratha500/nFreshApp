import React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import MyText from '@Components/MyText';
import MyTextInput from '../../Components/MyTextInput';
import Divider from '../../Components/Divider';
import MyButton from '../../Components/MyButton';

const Login = (props) => {
    const _handleClick = () => {
        props.navigation.navigate('Home');
    };

    return (
        <View style={Styles.container}>
            <View style={Styles.imageWrapper}>
                <Image style={Styles.deliveryImage} source={require('@Assets/Images/deliveryMan.png')} />
            </View>
            <View style={Styles.headingWrapper}>
                <MyText style={Styles.headingText}>Start With Login !</MyText>
            </View>
            <View style={Styles.formWrapper}>
                <MyTextInput placeholder={'Email Address'} />
                <Divider />
                <MyTextInput password placeholder={'Password'} />
                <Divider />
                <MyButton buttonText={'Login'} onClickEvent={_handleClick} />
            </View>
        </View >
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#FFF', paddingLeft: 10, paddingRight: 10
    }, formWrapper: {
        flex: 4,
    }, headingWrapper: {
        flex: 1
    }, imageWrapper: {
        flex: 3
    }, deliveryImage: {
        width: '100%', height: '100%'
    }, headingText: {
        fontFamily: 'Product Sans Bold', fontSize: 35, textAlign: 'center'
    }
});

export default Login;