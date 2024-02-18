import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Boje from '../constants/Boje';
import { Foundation } from '@expo/vector-icons';

const ListaElement = (props) => {
  return (
      <TouchableOpacity style={{alignItems: "center"}}
        onPress={props.onPress}>
        <View style={{ ...stil.tipka, ...props.style }}>
          <View style={stil.ime}>
            <Text style={stil.naslov}>{props.natpis}</Text>
            <Text style={stil.tezina}>{props.tezina}</Text>
          </View>
          <View style={stil.ikona}>
            <Foundation name="magnifying-glass" size={16} color={Boje.Bijela} />
          </View>
        </View>
      </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "blue",
    borderColor: Boje.Bijela,
    borderWidth: 2,
    maxWidth: "97%",
    width: 400,
    height: 50,
    borderRadius: 15,
    paddingVertical: 10,
    marginVertical: 5,
    elevation: 3,
    flexDirection: 'row',
    opacity: 0.99,
    flex: 0.99,
  },
  naslov: {
    color: "white"
  },
  tezina: {
    color: "white",
    position: 'relative',
    left:'60%',
    width:'100%',
    height:'100%',
  },
  ime: {
    width: '70%',
    ellipsizeMode: 'tail',
    flex: 1,
    padding: 5,
  },
  ikona: {
    width: '20%',
    alignItems: 'center',
  },
});

export default ListaElement;
