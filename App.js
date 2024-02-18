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
import {createStore, combineReducers} from 'redux'
import zadatakReducer from './store/reducers/zadaci'
import ButtonComponent from './components/ButtonComponent';
import ModalComponent from './components/ModalComponent';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NapravljeniEkran from './screens/NapravljeniEkran';
import NenapravljeniEkran from './screens/NenapravljeniEkran';
import PocetniEkran from './screens/PocetniEkran';
import Naslov  from './components/Naslov';
import Filter from './components/Filter';
import {Ionicons} from '@expo/vector-icons';
import { Provider } from "react-redux";
import ModalFilter from './components/ModalFilter';
const Tab = createBottomTabNavigator()


const tabOptions = ({ route }) => ({
   tabBarIcon: ({ focused, color, size }) => {
   let imeIkone;
   if (route.name === 'Napravljeni') {
   imeIkone = focused
   ? 'checkmark-done-circle-sharp'
   : 'checkmark-done-sharp';
   
   } else if (route.name === 'Nenapravljeni') {
   imeIkone = focused ? 'close-circle-outline' : 'close';
   }
   return <Ionicons name={imeIkone} size={size} color={color} />;
   },
   tabBarActiveTintColor: 'blue',
   
   });
// Spajanje svih reducera u jedan objekt
  const glavniReducer = combineReducers({
  zadaci: zadatakReducer
  })
  // Stvaramo centralni spremnik
  const store = createStore(glavniReducer);
export default function App() {
  const [unos, postaviUnos] = useState('');
  const [iznos, postaviIznos] = useState(0);
  const [ciljevi, postaviCiljeve] = useState([]);
  console.log(glavniReducer);
  const [ukupniTrosak, postaviUkupniTrosak] = useState(0);
  const [brojElemenata, postaviBrojElemenata] = useState(0);
  const [prosjekTroskova, postaviProsjekTroskova] = useState(0);
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Provider store={store}>
      <NavigationContainer> 
            <Naslov naslov={"Task Tracker"}/>
            <Tab.Navigator
              initialRouteName="Pocetni"
              screenOptions={() => ({
                headerShown: false,
                tabBarStyle: {
                  height: 90,
                  paddingHorizontal: 5,
                  paddingTop: 0,
                  backgroundColor: 'rgba(34,36,40,1)',
                  position: 'absolute',
                  borderTopWidth: 0,
              },
            })}
            >
              <Tab.Screen name="Napravljeni" component={NapravljeniEkran}  options={{ tabBarActiveBackgroundColor:'rgba(44,46,50,1)',tabBarIcon: () => {
                return <Ionicons name="checkmark-done-sharp" size={34} color="green"/>}    
                }} />
              <Tab.Screen name="Pocetni" component={PocetniEkran} options={{tabBarActiveBackgroundColor:'rgba(44,46,50,1)', tabBarIcon: () => {
                return <Ionicons name="home" size={34} color="blue"/>}    
                }} />
              <Tab.Screen name="Nenapravljeni" component={NenapravljeniEkran} options={{tabBarActiveBackgroundColor:'rgba(44,46,50,1)',tabBarIcon: () => {
                return <Ionicons name="close" size={34} color="red"/>}
                }} />
            </Tab.Navigator>
            
      </NavigationContainer>

    </Provider>


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
  gumbPozicija:{

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
  header:{
  }
  ,
  body: {
    minHeight: '81%',
    backgroundColor: '#ebad4e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'column',
    flex:1,
    minWidth: '100%',

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
  nav:{
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
  },

});