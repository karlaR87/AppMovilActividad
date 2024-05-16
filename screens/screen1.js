import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function App() {
  // Arreglo de objetos con la información de las comidas favoritas
  const comidas = [
    {
      id: 1,
      nombre: 'Pizza',
      descripcion: 'Una deliciosa pizza con queso derretido y pepperoni.',
      imagen: require('../imagenes/pizza.jpg'), // Ajusta la ruta de la imagen según tu estructura de archivos
    },
    {
      id: 2,
      nombre: 'Hamburguesa',
      descripcion: 'Una jugosa hamburguesa con carne, queso, lechuga y tomate.',
      imagen: require('../imagenes/hamburguesa.jpg'), 
    },
    {
      id: 3,
      nombre: 'Wantans',
      descripcion: 'Una deliciosa comida china de masita con camaron o carne.',
      imagen: require('../imagenes/wantans.jpg'), // Ajusta la ruta de la imagen según tu estructura de archivos
    },
    {
      id: 4,
      nombre: 'spaguetti',
      descripcion: 'Una jugosa pasta alfredo de italia.',
      imagen: require('../imagenes/pasta.png'), 
    },
    {
      id: 5,
      nombre: 'Subway',
      descripcion: 'un delicioso pan con ensalda saludable dentro de ellos',
      imagen: require('../imagenes/subway.jpg'), // Ajusta la ruta de la imagen según tu estructura de archivos
    },
    {
      id: 6,
      nombre: 'Papas fritas',
      descripcion: 'Papas fritas',
      imagen: require('../imagenes/papas.jpg'), 
    },

  ];

  // Función para renderizar cada elemento de la lista
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.imagen} style={styles.imagen} />
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Text style={styles.descripcion}>{item.descripcion}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={comidas}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imagen: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 16,
    color: '#555',
  },
});
