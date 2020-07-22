import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const MyTextInput = (props) => {
    let { password, ...rest } = props;
    return (
        <View style={Styles.container}>
            <TextInput style={Styles.textInput} secureTextEntry={password ? true : false} {...rest}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        borderColor: '#CCC', borderWidth: 1, borderRadius:10
    }, textInput: {
        fontSize: 20, fontFamily: 'Product Sans Regular', paddingLeft: 20, paddingRight: 20, paddingTop:10, paddingBottom:10
    }
});

export default MyTextInput;