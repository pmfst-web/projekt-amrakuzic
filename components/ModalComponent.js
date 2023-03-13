import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TextInput, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const ModalComponent = (props) => {
  const [unos, setUnos] = useState('');
  const [iznos, setIznos] = useState('');

  const noviOpis = (text) => setUnos(text);
  const noviIznos = (text) => setIznos(text);
  const [selectedLanguage, setSelectedLanguage] = useState('');


  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            placeholder="Opis troška"
            placeholderTextColor="grey"
            style={styles.unos}
            value={unos}
            onChangeText={noviOpis}
          />
          <TextInput
            placeholder="Dodaj iznos.."
            placeholderTextColor="grey"
            keyboardType="numeric"
            style={styles.unos}
            value={iznos}
            onChangeText={noviIznos}
          />
        <Text style={styles.label}>Select a color:</Text>
        <Picker
        style={styles.picker}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Lako" value="lako" style={styles.pickerItem} />
  <Picker.Item label="Srednje" value="srednje" style={styles.pickerItem}/>
  <Picker.Item label="Teško" value="tesko" style={styles.pickerItem}/>
</Picker>
        <Text style={styles.selectedValue}>Odabrana težina {selectedLanguage}
        </Text>

          <View style={styles.modalButtons}>
            <Pressable style={[styles.button, styles.buttonDodaj]} >
              <Text style={styles.textStyle}>Dodaj</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={props.closeModal}
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
  modal:{
    width:'60%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    width:'70%',
    height:'50%',
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
buttonDodaj:{
  backgroundColor:'#0060F1',
},
buttonClose:{
  backgroundColor:'red',
},
textStyle:{

},
pickerContainer: {

},
picker: {
  width: '100%',
  height: 40,
  color: '#333',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  overflow: 'hidden',
  paddingHorizontal: 10,
  flex:1,
},
pickerItem: {
  fontSize: 16,
  fontFamily: 'Arial',
  color: 'black',
},
});

export default ModalComponent;