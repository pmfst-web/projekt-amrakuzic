import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const Filter = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Ionicons name="filter" size={40} color="white"/>
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