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
    backgroundColor: 'rgba(34,36,40,1)',
    borderBottomWidth:1,
    borderBottomColor:'rgba(114,116,110,1)',

    alignItems: "flex-end",
    justifyContent: "space-around",
    flexDirection:'row',
  },
  naslov: {
    flex: 2.5,
    color: "rgba(134,136,130,1)",
    fontSize: 37,
    fontWeight: 'bold',
    paddingBottom:10,
    
  },
  pomocni: {
    flex: 1,
    color: "black",
    
  },
})

export default Naslov;
