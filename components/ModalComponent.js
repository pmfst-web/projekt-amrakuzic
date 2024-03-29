import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TextInput, Pressable } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { dodajZadatak } from "../store/actions/zadaci";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Zadatak from '../models/zadatak';

const ModalComponent = ({ modalVisible, closeModal }) => {
  const [naziv, setNaziv] = useState('');
  const [opis, setOpis] = useState('');
  const [tezina, setTezina] = useState('');
  const [vrsta, setVrsta] = useState('');   
  const [selectedDate, setSelectedDate] = useState(new Date());

  const odabirTezina = ["lako", "srednje", "tesko"];
  const odabirVrsta = ["skola", "posao", "slobodno vrijeme"];

  const noviNaziv = (text) => setNaziv(text);
  const noviOpis = (text) => setOpis(text);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const dispatch = useDispatch();

  const handleDodaj = () => {
    const id = uuidv4();
    const noviZadatak = new Zadatak(id, naziv, opis, tezina, vrsta, selectedDate.toISOString());

    console.log(noviZadatak);
    dispatch(dodajZadatak(noviZadatak));

    closeModal();
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={handleOverlayClick}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.naslov}>Novi Zadatak</Text>
          <TextInput
            placeholder="Naziv zadatka"
            placeholderTextColor="grey"
            style={styles.unos}
            value={naziv}
            onChangeText={noviNaziv}
          />
          <TextInput
            placeholder="Opis zadatka..."
            placeholderTextColor="grey"
            style={styles.unos}
            value={opis}
            onChangeText={noviOpis}
          />
          <View style={{width:"100%",height:'25%',flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:25}}>
            <SelectDropdown
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown2DropdownStyle}
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
              data={odabirTezina}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setTezina(selectedItem);
              }}
              defaultButtonText = "Odaberi težinu:"
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
            <SelectDropdown
              data={odabirVrsta}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown2DropdownStyle}
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setVrsta(selectedItem);
              }}
              defaultButtonText = "Odaberi vrstu:"
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>

          <Text style={{marginTop:20}}>Odaberi vrijeme dovršetka</Text>
          <View style={styles.dateTimeOkvir}>
            <DateTimePicker style={styles.dateTime}
              mode="datetime"
              display="spinner"
              value={selectedDate}
              onChange={(event, date) => setSelectedDate(date)}
            />
          </View>
          

          
        </View>
        <View style={styles.modalButtons}>
            <Pressable style={[styles.button, styles.buttonDodaj]} onPress={handleDodaj} >
              <Text style={styles.textStyle}>Dodaj</Text>
            </Pressable>
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
    marginTop: 0,
  },
  modalView: {
    backgroundColor: "rgba(200,200,200,1)",
    borderRadius: 30,
    padding: 10,
    width:'75%',
    height:'50%',
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
  height:"10%",
  width:"40%",
},
button: {
  borderRadius: 20,
  marginTop: -35,
  marginBottom:35,
  flex: 2,
  elevation: 2,
  width:"100%",
  height:"10%",
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
  height:'35%'
},
dateTimeOkvir:{
  width:"100%"
}
});

export default ModalComponent;