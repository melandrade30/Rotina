import{StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    card: {
        marginTop: 20,
        backgroundColor: '#A020F0',
        width: '40%',
        borderRadius: 30,
        height: 200,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        padding: 10,
      },

      texto: {
        fontSize: 25,
        marginTop: 5,
        width: 300,
        marginLeft: -50,
      },

      imagem: {
        marginLeft: 40,
        width: 80,
        height: 80,
        marginRight: 10,
      },
      titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 30,
      },
})

export default estilo;
