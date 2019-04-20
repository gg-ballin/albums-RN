import React from 'react';
import {Text,StyleSheet, View} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> {props.headerText} </Text>
        </View>
        )
}


const styles = StyleSheet.create({
    textStyle: {
      fontSize:25
    },
    viewStyle: {
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 20,
        height: 60,
        shadowColor: '#000001',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    }
  });

export default Header;