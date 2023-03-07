import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const ButtonComponent = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Novi Unos</Text>
      </Pressable>
    </View>


  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebad4e',
    padding: 0,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:'17%',
  },
  button: {
    borderRadius: 50,
    padding: 10,
    elevation: 2,
    width: '100%',
    height: '100%',
    backgroundColor: '#5cb55c',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default ButtonComponent;