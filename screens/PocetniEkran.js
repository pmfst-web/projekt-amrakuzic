import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import Naslov from '../components/Naslov';
import ButtonComponent from '../components/ButtonComponent';
import ButtonDelete from '../components/ButtonDelete';
import { FlatList } from 'react-native';
import ModalComponent from '../components/ModalComponent';
import ModalDetalji from '../components/ModalDetalji';
import { ZADACI } from '../data/test-podaci';
import ListaElement from '../components/ListaElement';
import { useSelector } from 'react-redux';
import Swipeable from 'react-native-swipeable';


const PocetniEkran = ({ route, navigation }) => {
  const [itemModalVisible, setItemModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); 
  const zadaciPrikaz = useSelector((state) => state.zadaci.filtriraniZadaci);

  const handleItemModal = (selectedItem) => {
    setSelectedItem(selectedItem);
    setItemModalVisible(true);
  };

  const handleAddModal = () => {
    setAddModalVisible(!addModalVisible);
  };

  const prikazElementa = (podaci) => {
    return (
        <ListaElement
          onPress={() => handleItemModal(podaci.item)}
          natpis={podaci.item.naslov}
          tezina={podaci.item.tezina}
        />
    );
  };

  return (
    <View style={stil.ekran}>
      <View style={stil.body}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={zadaciPrikaz}
          renderItem={prikazElementa}
          numColumns={1}
        />

        <ButtonComponent onPress={handleAddModal} />
        
        <ModalDetalji
          modalVisible={itemModalVisible}
          closeModal={() => setItemModalVisible(false)}
          selectedItem={selectedItem}
        />
        <ModalComponent
          modalVisible={addModalVisible}
          closeModal={handleAddModal}
          isAddModal
        />
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatLista: {
    padding: 10,
    width: '100%',
    borderWidth: 1,
    flex: 2,
  },
  listaElement: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#0060F1',
    borderColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
  },
  body: {
    minHeight: '100%',
    backgroundColor: 'rgba(34,36,40,1)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default PocetniEkran;