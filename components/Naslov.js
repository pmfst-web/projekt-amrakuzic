import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Filter from './Filter';
const Naslov = (props) => {
  return (
    <View style={stil.zaglavlje}>
      <Text style={stil.pomocni}></Text>        
      <Text style={stil.naslov}>{props.naslov}</Text>
      <Filter />
    </View>
  );
};

const stil = StyleSheet.create({
  zaglavlje: {
    marginTop:75,
    width: "100%",
    height: '15%',
    paddingTop: 36,
    backgroundColor: "#9A9A9A",
    borderBottomWidth:1,
    borderBottomColor:'white',

    alignItems: "flex-end",
    justifyContent: "space-around",
    flexDirection:'row',
  },
  naslov: {
    flex: 2,
    color: "black",
    fontSize: 37,
    paddingBottom:10,
    
  },
  pomocni: {
    flex: 1,
    color: "black",
    
  },
})

export default Naslov;
