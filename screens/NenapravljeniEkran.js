
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { ZADACI } from '../data/test-podaci';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import ModalComponent from '../components/ModalComponent';
import ModalDetalji from '../components/ModalDetalji';
import ListaElement from '../components/ListaElement';


const Item = ({title}) => (
  <View style={stil.listaElement}>
    <Text>{title}</Text>
  </View>
);

const NenapravljeniEkran = ({ route, navigation }) => {
  const [itemModalVisible, setItemModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const zadaciPrikaz = useSelector((state) => state.zadaci.nedovrseniZadaci);

  const handleItemModal = (podaci) => {
    setSelectedItem(podaci.item); // Set the selected item
    setItemModalVisible(true);
  };

  const handleAddModal = () => {
    setAddModalVisible(!addModalVisible);
  };

  const prikazElementa = (podaci) => {
    return (
        <ListaElement
          onPress={() => handleItemModal(podaci)}
          natpis={podaci.item.naslov}
          style={stil.listaElement}
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
  header:{
    height:'20%',
  },
  flatLista: {
    padding: 10,
    width:"100%",
    borderWidth: 1,
    flex:2,

  },
  listaElement: {
    padding:15,
    marginVertical: 5,
    backgroundColor: 'purple',
    borderColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    borderStartColor: 'white',
    borderEndColor: 'white',
    flex:1,
    alignItems:'center',
    
  },
  body: {

    minHeight: '100%',
    backgroundColor: 'rgba(34,36,40,1)',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
});

export default NenapravljeniEkran;