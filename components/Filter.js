import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const Filter = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Filter</Text>
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
    elevation: 2,
    width: '100%',
    height: '100%',
    backgroundColor: '#5cb55c',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Filter;