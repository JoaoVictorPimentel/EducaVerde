import { Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import { router } from 'expo-router';
import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface InicioProps {
}

export default function Inicio(props: InicioProps) {
    let [fontsLoaded] = useFonts({
        Inter_500Medium,
    });
    
    if (!fontsLoaded) {
        return null;
    }
    
    return (
        <ImageBackground
            source={require('./../assets/img/fundoInicio.png')}
            style={{ width: '100%', height: '100%' }}
        >
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.text}>
                        "Aplique a transversabilidade da educação ambiental"
                    </Text>
                </View>
                <View style={styles.mid}>
                    <Image source={require('./../assets/img/educaVerdeLogo.png')}/>
                    <Text style={styles.text2}>
                        Unidade temática de ciências
                    </Text>
                    <TouchableOpacity style={styles.botao} onPress={() => router.push('/screens/turmas')}>
                        <Text style={styles.textButton}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    top: {
        minHeight: 50,
        width: 300,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Inter_500Medium',
        textAlign: 'center',
    },
    text2: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Inter_500Medium',
        textAlign: 'center',
    },
    mid: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        backgroundColor: '#3B934F',
        width: 100,
        marginTop: 50,
        borderRadius: 5,

    },
    textButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontFamily: 'Inter_500Medium',
        padding: 10,
        textTransform: 'uppercase',
    }
});