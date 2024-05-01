import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Button({texto, funcion, colorEnviado}){

    return(
        <TouchableOpacity
        style={styles.btn}
        onPress={funcion}>
            <Text style={styles.text}>{texto}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn:{
      backgroundColor:'pink',
      padding:15,
      width:150, 
      marginBottom:25
    }, 
    text:{
      textAlign:'center', 
      fontWeight:'900'
    }
  });