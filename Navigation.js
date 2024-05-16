import React from 'react';
// Importación del contenedor de navegación principal desde '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';

// Importación de la función para crear un contenedor de navegación con pestañas en la parte inferior desde '@react-navigation/bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importación de los componentes de pantalla que se utilizarán en las pestañas
import Screen1 from './screens/screen1'; 
import Screen from './screens/screen'; 

import { Image } from 'react-native';

// Creación del contenedor de navegación con pestañas mediante createBottomTabNavigator()
const Tab = createBottomTabNavigator();

// Definición del componente Navigation
export default function Navigation() {
  return (
    <NavigationContainer>
      {/* Contenedor de navegación con pestañas */}
      <Tab.Navigator>
        {/* Pestaña de "Estudiantes" */}
        <Tab.Screen 
          name="Estudiantes" // Nombre de la pestaña
          component={Screen} // Componente a renderizar cuando se selecciona esta pestaña
          options={{
            tabBarIcon: ({ color, size }) => (
              // Icono de la pestaña, se muestra en la barra de pestañas
              <Image
                source={require('./imagenes/estudiante.png')} // Ruta de la imagen del icono
                style={{ width: size, height: size, tintColor: color }} // Estilo del icono
              />
            ),
          }}
        />
        {/* Pestaña de "Comidas favs" */}
        <Tab.Screen 
          name="Comidas favs" // Nombre de la pestaña
          component={Screen1} // Componente a renderizar cuando se selecciona esta pestaña
          options={{
            tabBarIcon: ({ color, size }) => (
              // Icono de la pestaña, se muestra en la barra de pestañas
              <Image
                source={require('./imagenes/comida.png')} // Ruta de la imagen del icono
                style={{ width: size, height: size, tintColor: color }} // Estilo del icono
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
