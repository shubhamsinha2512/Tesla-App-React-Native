import React from 'react';
import {Text, View, ImageBackground, StyleSheet, Dimensions, TouchableWithoutFeedback} from 'react-native';

import StyledButton from './StyledButton'

function Car({imgSource, name, price}){
    return(
        <TouchableWithoutFeedback>

        <View style={styles.carContainer}>

        <ImageBackground 
          source={imgSource}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>Starting at ${price}</Text>
        </View>

        <View style={styles.buttonContainer}>
            <StyledButton type='primary' text='Custom Order' />
            <StyledButton type='secondary' text='Explore More' />
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
}

const styles=StyleSheet.create({
    carContainer:{
        width:'100%',
        height: Dimensions.get('window').height
      },
    titles:{
      marginTop:'30%',
      alignItems:'center',
      width:'100%',
    },
    title:{
      fontSize:40,
      fontWeight:'500'
    },
    subTitle:{
      fontSize:16,
      color:'#5c5e62'
    },
    image:{
      width:'100%',
      height:'100%',
      resizeMode:'cover',
      position:'absolute'
    },
    buttonContainer: {
        position:'absolute',
        bottom: 40,
        width: '100%',
        paddingHorizontal:10
    }
});

export default Car;