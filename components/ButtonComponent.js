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

    padding: 0,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:'17%',
  },
  button: {
    borderWidth: 0,
    borderRadius: 40,
    padding: 10,
    width: 80,
    height: 80,
    backgroundColor: '#0060F1',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default ButtonComponent;