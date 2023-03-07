import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Pressable,
  Modal, 
} from 'react-native';
import ButtonComponent from './components/ButtonComponent';
import ModalComponent from './components/ModalComponent';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PrikazNapravljenih from './screens/PrikazNapravljenih';
const Tab = createBottomTabNavigator()

export default function App() {
  const [unos, postaviUnos] = useState('');
  const [iznos, postaviIznos] = useState(0);
  const [ciljevi, postaviCiljeve] = useState([]);
  console.log("lista",ciljevi.length)
  const [ukupniTrosak, postaviUkupniTrosak] = useState(0);
  const [brojElemenata, postaviBrojElemenata] = useState(0);
  const [prosjekTroskova, postaviProsjekTroskova] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const noviOpis = (tekst) => {
    postaviUnos(tekst);
  };
  const noviIznos = (tekst) => {
    postaviIznos(tekst);

  };
  const povecajBrElemenata = () => {
    postaviBrojElemenata(brojElemenata => brojElemenata+1)

  };
  const smanjiBrElemenata = () => {
    postaviBrojElemenata(brojElemenata => brojElemenata-1)

  };
      
  const noviCilj = () => {
    console.log(unos);
    if (unos != "" && iznos!=0){
      const noviObjekt = {
        value: unos,
        cijena: iznos,
        key: Math.random().toString(),
      };
      postaviCiljeve((ciljevi) => [noviObjekt, ...ciljevi]);
      setModalVisible(!modalVisible);
      //racunajUkupniTrosak(ciljevi);
      //postaviUkupniTrosak(ukupniTrosak => +ukupniTrosak + +noviObjekt.cijena);
      //postaviProsjekTroskova(prosjekTroskova => ((+ukupniTrosak + +noviObjekt.cijena) / brojElemenata).toFixed(2));
      console.log(brojElemenata);
      postaviIznos("");
      postaviUnos("");
      setModalVisible(!modalVisible)
    }

  };

  return (
    <View style={stilovi.ekran}>
      <View style={stilovi.body}>

      <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <FlatList
          style={stilovi.flatLista}
          data={ciljevi}
          renderItem={(el) => (
            <TouchableOpacity onPress={() => console.log("Dodir")}>
            <View style={stilovi.listaElement}>
              <Text>{el.item.value} : ({el.item.cijena}) </Text>
            </View>
            </TouchableOpacity>
          )}
        />
      <View style={stilovi.gumbFleks}>
        <ButtonComponent onPress={() => setModalVisible(true)} />
      </View>

      </View>

      <View style={stilovi.footer}>

        <NavigationContainer> 
          <Tab.Navigator> 
            <Tab.Screen name="PrikazNapravljenih" component={PrikazNapravljenih} />
            <Tab.Screen name="PrikazNapravljenih2" component={PrikazNapravljenih} /> 
          </Tab.Navigator>
          
        </NavigationContainer>
     
      </View>
    </View>

  );
}

const stilovi = StyleSheet.create({
  ekran: {
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    //alignItems: 'center',
    alignContent:'center',
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
  gumbFleks:{
    flex: 0.1,
  },
  gumb:{
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:'50%',
    height:'50%',
    backgroundColor: "#5cb55c",
    justifyContent:'center',
    
  },
  unosContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex:0.2,
    //flexWrap: 'wrap',
    backgroundColor: '#0275dd',
    padding: 15,
    alignContent:'flex-end',
  },
  listaElement: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 2,
    borderStartColor: 'brown',
    borderEndColor: 'brown',
    flex:1,
    alignItems:'center',
  },
  flatLista: {
    padding: 10,
    marginVertical: 0,
    backgroundColor: '#ebad4e',
    flex:5,

  },
  body: {
    minHeight: '92%',
    backgroundColor: '#ebad4e',

  },
  footer: {
    flexDirection: 'column',
    //alignItems:'center',
    justifyContent:'space-between',
    flex:1,
    backgroundColor: '#6f9196',
    minWidth: '100%',
    maxHeight: '5%',
  },
  tekst:{
    fontSize: 16,
  },
  tekstIznosi:{
    fontWeight: 'bold',
  },
  prikazDole:{
    flexDirection:'column',
  },
  modalButtons:{
    flexDirection:'row',

    marginTop:5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft:5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },

});