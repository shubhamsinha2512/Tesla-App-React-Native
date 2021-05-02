import React, {useEffect} from 'react';
import {Text, View, Button, StyleSheet, Pressable} from 'react-native';


function StyledButton({type, text}){

    var backgroundColor= type == 'primary' ? '#171A20CC' : 'lightgray';
    var color= type == 'primary' ? 'white' : 'black';

    // console.log(type, text)
    return(
        <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor:backgroundColor}]}
                onPress={()=> alert("pressed")}
            >
                <Text style={[styles.text, {color:color}]}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        padding:10,
    },
    button:{
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:12,
        fontWeight:'500',
        textTransform:'uppercase',
    }
});

export default StyledButton;