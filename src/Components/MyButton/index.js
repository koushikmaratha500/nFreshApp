import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MyText from '@Components/MyText';

const MyButton = (props) => {
    let { buttonText, color, fontColor, onClickEvent } = props;
    const Styles = StyleSheet.create({
        buttonWrapper: {
            backgroundColor: color ? color : 'green', paddingLeft: 20, paddingRight: 20, paddingTop: 15, paddingBottom: 15, borderRadius: 10
        }, buttonTextStyle: {
            fontFamily: 'Product Sans Regular', fontSize: 20, textAlign: 'center', color: fontColor ? fontColor : '#FFF'
        }
    });


    return (
        <TouchableOpacity style={Styles.buttonWrapper} onPress={() => onClickEvent()}>
            <MyText style={Styles.buttonTextStyle}>{buttonText}</MyText>
        </TouchableOpacity>
    )
}

export default MyButton;