import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { filtriraj } from "../store/actions/zadaci";
import Zadatak from '../models/zadatak';
import { useSelector, useDispatch } from "react-redux";
const Filter = ({ onPress }) => {
  const dispatch = useDispatch();
  const filtrirajZadatke = () =>{
    dispatch(filtriraj());
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={filtrirajZadatke}>
        <Ionicons name="filter" size={32} color="white"/>
      </Pressable>
    </View>


  );
};


const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    padding: 0,
    width:'50%',
  },
  button: {
    borderRadius: 50,
    padding: 10,
    elevation: 1,
    width: '100%',
    height: '100%',

    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Filter;