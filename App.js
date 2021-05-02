import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';

import {ModelX, Model3, ModelS, ModelY} from './assets';

import Car from './src/components/Car'
import Header from './src/components/Header'

function App(){

  const cars = [
    {
      key:'1',
      image: ModelX,
      name : 'Model X',
      price : '69,420'
    },
    {
      key:'2',
      image: ModelS,
      name : 'Model S',
      price : '89,420'
    },
    {
      key:'3',
      image: ModelY,
      name : 'Model Y',
      price : '46,499'
    },
    {
      key:'4',
      image: Model3,
      name : 'Model 3',
      price : '39,499'
    },
  ]

  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        style={styles.list}
        data={cars}
        // keyExtractor={({item, index})=> item.key}
        renderItem= {({item, index})=>(<Car imgSource={item.image} name={item.name} price={item.price} />)}
        snapToAlignment={'start'}
        decelerationRate={5}
        snapToInterval={Dimensions.get('window').height}
      />
      {/* <Car imgSource={ModelX} name='Model S' price='69,420' />
      <Car imgSource={ModelY} name='Model Y' price='69,420' />
      <Car imgSource={ModelS} name='Model S' price='69,420' />
      <Car imgSource={Model3} name='Model 3' price='69,420' /> */}
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  list: {
    // flex:1,
    width:'100%'
  }
})

export default App;