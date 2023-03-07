import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TextInput, Pressable } from 'react-native';


const ModalComponent = ({ modalVisible, setModalVisible }) => {
  const [unos, setUnos] = useState('');
  const [iznos, setIznos] = useState('');

  const noviOpis = (text) => setUnos(text);
  const noviIznos = (text) => setIznos(text);

  const noviCilj = () => {
    // your logic for adding a new expense here
    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            placeholder="Opis troška"
            style={styles.unos}
            value={unos}
            onChangeText={noviOpis}
          />
          <TextInput
            placeholder="Dodaj iznos.."
            keyboardType="numeric"
            style={styles.unos}
            value={iznos}
            onChangeText={noviIznos}
          />
          <View style={styles.modalButtons}>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={noviCilj}>
              <Text style={styles.textStyle}>Dodaj</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Zatvori</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  unos: {
    width: '70%',
    minWidth: '50%',
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 16,
},
modalButtons:{
  flexDirection:'row',

  marginTop:5,
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
  marginLeft:5,
},
});

export default ModalComponent;