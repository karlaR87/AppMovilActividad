import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import Cardstudent from '../src/component/card'; // Asegúrate de que la ruta sea correcta

export default function App() {
    return (
        <View style={styles.container}>
            <Cardstudent
                nombreEstudiante="Rodrigo Rivas"
                carnet="20200308"
                foto='https://png.pngtree.com/element_our/20190531/ourmid/pngtree-cartoon-pupil-reading-text-png-transparent-bottom-image_1305440.jpg'
            />
             <Cardstudent
                nombreEstudiante="Perez Garcia"
                carnet="20180527"
                foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sBqtsULXUiZnguC8UJ78-iGYntbMYgPfz_elipEVxQ&s'
            />
             <Cardstudent
                nombreEstudiante="Emiliano Jose"
                carnet="20130450"
                foto='https://w7.pngwing.com/pngs/1008/662/png-transparent-student-girl-school-girl-thinking-s-child-reading-boy.png'
            />
             <Cardstudent
                nombreEstudiante="Wilfredo Molina"
                carnet="19980415"
                foto='https://png.pngtree.com/png-clipart/20220226/ourlarge/pngtree-cute-cartoon-middle-school-students--hand-painted-character-elements-png-image_4439736.png'
            />
             <Cardstudent
                nombreEstudiante="Curma Melino"
                carnet="20165398"
                foto='https://png.pngtree.com/png-vector/20220120/ourlarge/pngtree-high-school-girl-playing-with-mobile-phone-png-image_4353891.png'
            />
            <StatusBar style="auto" />
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
});
