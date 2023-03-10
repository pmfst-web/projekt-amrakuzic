
import { View, Text, StyleSheet, Button } from 'react-native';
import Naslov from '../components/Naslov';
import { FlatList } from 'react-native';
import { Pressable } from 'react-native';
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

const NenapravljeniEkran = ({ route, navigation }) => {

  return (
    <View style={stil.ekran}>
        

      <View style={stil.body}>
      <FlatList
        style={stil.flatLista}
        data={DATA}
        renderItem={(item) => (
        <Pressable onPress={() => {
          }}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.6 : 1
            },
          ]}>
          <View style={stil.listaElement}>
            <Text>{item.title}</Text>
          </View>
        </Pressable>
        )}
        keyExtractor={item => item.id}
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
    backgroundColor: 'red',
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