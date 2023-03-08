import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Naslov from '../components/Naslov';
import ButtonComponent from '../components/ButtonComponent';

const PocetniEkran = ({navigation}) => {
  return (
    <View style={stil.ekran}>
        
            <Naslov naslov={"Task Tracker"}/>
        

      <View style={stil.body}>
        <View style={stil.gumbFleks}>
          <ButtonComponent onPress={() => setModalVisible(true)} />
        </View>
      </View>
    </View>
    
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    height:'20%',
  },
  body: {

    minHeight: '100%',
    backgroundColor: 'rgba(34,36,40,1)',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
});

export default PocetniEkran;