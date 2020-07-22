import React from 'react';
import { Text } from 'react-native';

const MyText = (props) => {
    let { children, ...rest } = props;
    return (
        <Text {...rest}>{children}</Text>
    )
}

export default MyText;