import React from "react";
import { Text, StyleSheet, View, Image, FlatList} from "react-native";
import  Header from "./componentes/header";
import Card from "./componentes/card";
import ROTINAS from './data';


export default function App() {
  return (
    <View style={estilo.container}>

     <Header></Header>

<View style= {{width:'100%'}}>
      <FlatList
            data = {ROTINAS}
            horizontal = {true}
            keyExtractor = {(item)=>item.id}
            renderItem = {({item})=> (

                  <Card

                    titulo = {item.titulo}
                    descricao = {item.descricao}
                    porcentagem = {item.porcentagem}
                    imagem = {item.imagem}


                  />

            )}


      />

    </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'beige',
    borderColor: 'pink',
  },
})

