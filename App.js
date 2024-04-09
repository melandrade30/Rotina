import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import  Header from "./componentes/header";
import Card from "./componentes/card";

export default function App() {
  return (
    <View style={estilo.container}>

     <Header></Header>

      <Card porcentagem = '29,17%'
            titulo = 'Dormir'
            descricao = 'Todos os dias eu durmo no mínimo 8h'
            imagem = 'https://cdn-icons-png.flaticon.com/512/1422/1422872.png'
      ></Card>
      <Card porcentagem = '29,17%'
            titulo = 'Dormir'
            descricao = 'Todos os dias eu durmo no mínimo 8h'
            imagem = 'https://cdn-icons-png.flaticon.com/512/1422/1422872.png'
      ></Card>
      <Card porcentagem = '29,17%'
            titulo = 'Dormir'
            descricao = 'Todos os dias eu durmo no mínimo 8h'
            imagem = 'https://cdn-icons-png.flaticon.com/512/1422/1422872.png'
      ></Card>


      <Card porcentagem = '16,7%'
            titulo = 'Comer'
            descricao = 'Todos os dias eu tomo café da manhã, almoço e janto.'
            imagem = 'https://icon-library.com/images/meal-icon/meal-icon-23.jpg'
      ></Card>

      <Card porcentagem = '8,33%'
            titulo = 'Treinar'
            descricao = 'Todos os dias treino no mínimo 2h.'
            imagem = 'https://cdn-icons-png.flaticon.com/512/38/38464.png'
      ></Card>

      <Card porcentagem = '19,7%'
            titulo = 'Estudar'
            descricao = 'De segunda a sexta estudo na Etec, e reforço em casa'
            imagem = 'https://cdn-icons-png.flaticon.com/512/171/171322.png'
      ></Card>

      <Card porcentagem = '17,8%'
            titulo = 'Limpeza'
            descricao = 'Todos os dias, ajudo minha família com os deveres domésticos.'
            imagem = 'https://cdn.icon-icons.com/icons2/2248/PNG/512/broom_icon_136857.png'
      ></Card>


      <Card porcentagem = '12,5%'
            titulo = 'Lazer'
            descricao = 'Todos os dias tenho um momento de descanso, onde leio um livro ou fico com minha família.'
            imagem = 'https://cdn-icons-png.freepik.com/256/33/33728.png'
      ></Card>
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

