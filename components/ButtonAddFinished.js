import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const ButtonAddComponent = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor: '#0060F1',
            opacity: pressed ? 0.6 : 1
          },
          styles.button
        ]}>
        {({ }) => (
          <Ionicons name="add" size={42} color="white" />
        )}

      </Pressable>
    </View>


  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    position: 'absolute',
    bottom:'35%',
    width:'10%',
  },
  button: {
    borderRadius: 35,
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center',
    paddingLeft:3,
    paddingTop:12,
    width: 70,
    height: 70,
    backgroundColor: '#0060F1',
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.48,
    shadowRadius: 2,
    
    elevation: 10,
    
  },
});
export default ButtonAddComponent;