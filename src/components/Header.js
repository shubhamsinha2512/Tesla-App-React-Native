import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Menu, logo} from '../../assets/index'

function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Image style={styles.menu} source={Menu} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top:20,
        zIndex:50,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal: 20
    },
    logo: {
        width:100,
        height:20,
        resizeMode:'contain'
    },
    menu: {
        width:25,
        height:25,
        resizeMode:'contain'
    }
});

export default Header;