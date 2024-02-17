
import { StyleSheet, View, Text, Modal, TextInput, Pressable } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { promjenaDovrsenih } from "../store/actions/zadaci";
import { Button } from 'react-native-paper';
import ButtonComponent from './ButtonComponent';
const ModalDetalji = ({modalVisible,closeModal,selectedItem,route}) => {
  const idZadatka = Number(route.params.id);
  const sviRadovi = useSelector(state => state.zadaci.zadaci);
  const zadatak = sviZadaci.find((r) => r.id === idZadatka);
  console.log(idZadatka);
  const handleOverlayClick = (event) => {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    }
    if (!selectedItem) {
        return null; // ako nista nije odabrano nemoj ga otvarati
      }


    const dispatch = useDispatch();
    const akcijaPromjenaDovrsenih = () =>{
      dispatch(promjenaDovrsenih(2));
      closeModal();
    }


  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={handleOverlayClick}>
      <View style={styles.centeredView}>

        <View style={styles.modalView}>
            <Text style={styles.naslov}>Detalji Zadatka</Text>
            <Text style={styles.textStyle}>ID: {selectedItem.id}</Text>
            <Text style={styles.textStyle}>Naslov: {selectedItem.naslov}</Text>
            <Text style={styles.textStyle}>Opis: {selectedItem.opis}</Text>

            <Text style={styles.textStyle}>Tezina: {selectedItem.tezina}</Text>
            <ButtonComponent onPress={akcijaPromjenaDovrsenih} />
            <Text style={styles.textStyle}>Vrijeme: {selectedItem.vrijeme}</Text>
            
        </View>
      </View>
      </TouchableWithoutFeedback>
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
    backgroundColor: "rgba(200,200,200,1)",
    borderRadius: 30,
    padding: 10,
    width:'75%',
    height:'50%',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'white',
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
    fontSize: 18,
},
naslov:{
  color: "rgba(134,136,130,1)",
  fontSize:28,
  fontWeight:"bold"
},
modalButtons:{
  height:"15%",
  width:"70%",
},
button: {
  borderRadius: 20,
  flex: 2,
  elevation: 2,
  width:"100%",
  justifyContent:"center",
  alignItems:"center"

},
buttonDodaj:{
  backgroundColor:'#0060F1',
},
buttonClose:{
  backgroundColor:'red',
},
textStyle:{
  color:"white",
  fontSize:18
},
dropdown2BtnStyle: {
  width: '50%',
  height: 50,
  backgroundColor: '#444',
  borderRadius: 8,
  margin:5,
},
dropdown2BtnTxtStyle: {
  color: '#FFF',
  textAlign: 'center',
  fontWeight: 'bold',
},
dropdown2DropdownStyle: {
  backgroundColor: '#444',
  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
},
dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
dropdown2RowTxtStyle: {
  color: '#FFF',
  textAlign: 'center',
  fontWeight: 'bold',
},
dateTime:{
  width:"100%",
  height:'20%',
  flexDirection:"row",
  justifyContent:"flex-start",
  alignItems:"center",
  marginLeft:40
}
});

export default ModalDetalji;