import {Text, View, Image} from 'react-native'
import Header from '../header';
import estilo from './style';

export default function Card({porcentagem,titulo,imagem,descricao }){
    return(
        <View style={estilo.card}>
            <Image style={estilo.imagem} source={{ uri: imagem}}/>
            <View style={{ marginLeft:15, width:150}}>
                <Text style={estilo.titulo}>{titulo}</Text>
                <Text style={estilo.texto}>{descricao}</Text>
            </View>
            <Text style={{fontSize: 35, fontWeight: 'bold'}}>{porcentagem}</Text>
        </View>
    )
}