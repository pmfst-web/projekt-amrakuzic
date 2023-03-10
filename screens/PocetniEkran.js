import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import Naslov from '../components/Naslov';
import ButtonComponent from '../components/ButtonComponent';
import { FlatList } from 'react-native';
import ModalComponent from '../components/ModalComponent';
import { ZADACI } from '../data/test-podaci';
import ListaElement from '../components/ListaElement';
import { useSelector } from 'react-redux';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={stil.listaElement}>
    <Text>{title}</Text>
  </View>
);

const PocetniEkran = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const zadaciPrikaz = useSelector(state => state.zadaci.filterZadaci)
  const closeModal = () => {
    setShowModal(false);
  }
  
  const openModal = () => {

    setShowModal(true);
  }
  const prikazElelementa = (podaci) => {
    return (
      <ListaElement
        onPress={() => navigation.navigate('Detalji', { id: podaci.item.id })}
        natpis={podaci.item.naslov}
      />
    );
  };
  return (
    <View style={stil.ekran}>
      <View style={stil.body}>

      <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={ZADACI}
          renderItem={prikazElelementa}
          numColumns={1}
        />

        <ModalComponent visible={showModal} closeModal={closeModal} />

        <ButtonComponent onPress={openModal} />


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
    width:"100%",
    borderWidth: 1,
    flex:2,
  },
  listaElement: {
    padding:15,
    marginVertical: 5,
    backgroundColor: '#0060F1',
    borderColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    flex:1,
  },
  body: {
    minHeight: '100%',
    backgroundColor: 'rgba(34,36,40,1)',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
});

export default PocetniEkran;