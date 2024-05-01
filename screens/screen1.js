import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native'; // Importa Platform desde react-native
import Task from "../src/component/task";

export default function TodoList() {
  // Define el estado para la tarea y el listado de tareas
  const [task, setTask] = useState(); //  useState para crear un estado para la tarea
  const [taskItems, setTaskItems] = useState([]);

  // Función para manejar la adición de una tarea
  const handleAddTask = () => {
    Keyboard.dismiss(); // Oculta el teclado al agregar una tarea
    setTaskItems([...taskItems, task]) // Agrega la tarea al listado de tareas
    setTask(null); // Reinicia el estado de la tarea a nulo después de agregarla
  }

  // Función para marcar una tarea como completada
  const completeTask = (index) => {
    let itemsCopy = [...taskItems]; // Crea una copia del listado de tareas
    itemsCopy.splice(index, 1); // Elimina la tarea seleccionada del listado
    setTaskItems(itemsCopy); // Actualiza el listado de tareas
  }

  return (
    <View style={styles.container}>
      {/* Agrega un ScrollView para permitir el desplazamiento cuando el listado de tareas sea largo */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled' // Persiste la pulsación en los elementos interactivos al desplazarse
      >

      {/* Sección de tareas de hoy */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tareas de hoy</Text>
        <View style={styles.items}>
          {/* Aquí se mostrarán las tareas */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Escribir una tarea */}
      {/* Usa KeyboardAvoidingView para evitar que el teclado cubra los elementos en la pantalla */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Ajusta el comportamiento según la plataforma
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Escribe una tarea'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
