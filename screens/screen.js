import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import React from 'react';


export default function App( navigation ) {
  //codigo Js
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    let suma = parseFloat(numero1) + parseFloat(numero2)
    setResultado(suma)
  }
  const restar = () => {
    let resta = parseFloat(numero1) - parseFloat(numero2)
    setResultado(resta)
  }
  const multiplicar = () => {
    let multi = parseFloat(numero1) * parseFloat(numero2)
    setResultado(multi)
  }
  const dividir = () => {
    let division = parseFloat(numero1) / parseFloat(numero2)
    setResultado(division)
  }

  const clean = () => {
    setNumero1(0)
    setNumero2(0)
    setResultado(0)
  }


  //termina codigo js
  return (
    <View style={styles.container}>
      <Text style={{

        paddingVertical: 10,
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center',
      }}>calculadora de numeros</Text>
      <Text>Numero 1: </Text>
      <TextInput
        style={{
          backgroundColor: 'lightgray',
          borderRadius: 10,
          paddingHorizontal: 15,
          paddingVertical: 10,
          marginBottom: 10,
          fontSize: 9,
          color: 'black',
          width: 150,
        }}

        placeholder='Numero 1: '
        value={numero1}
        onChangeText={setNumero1}
      />
      <Text>Numero 2: </Text>
      <TextInput style={{
        backgroundColor: 'lightgray',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 25,
        fontSize: 9,
        color: 'black',
        width: 150,
      }}
        placeholder='Numero 2: '
        value={numero2}
        onChangeText={setNumero2}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={{
          backgroundColor: 'violet',
          padding: 5,
          marginLeft: 50,
          width: 125
        }}
          onPress={sumar}
        >
          <Text style={{
            color: '#FFF',
            fontSize: 12,
            textAlign: 'center',

          }}>Sumar numeros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: 'pink',
          padding: 5,
          marginRight: 50,
          width: 125
        }}
          onPress={restar}
        >
          <Text style={{
            color: '#FFF',
            fontSize: 12,
            textAlign: 'center',

          }}>Restar numeros</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={{
          backgroundColor: 'lightgreen',
          padding: 5,
          marginLeft: 50,
          width: 125
        }}
          onPress={multiplicar}
        >
          <Text style={{
            color: '#FFF',
            fontSize: 12,
            textAlign: 'center',

          }}>Multiplicar numeros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: 'lightblue',
          padding: 5,
          marginRight: 50,
          width: 125
        }}
          onPress={dividir}
        >
          <Text style={{
            color: '#FFF',
            fontSize: 12,
            textAlign: 'center',

          }}>dividir numeros</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{ color: 'black', fontSize: 25 }}>
        Resultado: {resultado}
      </Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={{
        backgroundColor: 'lightyellow',
       
        padding: 5
      }}
        onPress={clean}
      >
        <Text style={{
          color: 'gray',
          fontSize: 20,
          width: 150,
          textAlign:'center'
        }}>Reset</Text>
      </TouchableOpacity>

    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
});