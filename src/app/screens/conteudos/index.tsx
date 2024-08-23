import { Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import { Icon } from '@rneui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TurmasScreen() {
    const { conteudoId, titulo, objetivo, habilidades, leitura_discussao, video_conteudo, video_exposicaop_conteudo, video_exposicaop_link, video_exposicaot_conteudo, video_exposicaot_link, atividade } = useLocalSearchParams();

    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <ImageBackground
        source={require('./../../../assets/img/fundoPadrao.png')}
        style={{ width: '100%', height: '100%' }}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.touchable}>
                        <Icon name="left" type='antdesign' size={23} color="#fff" />
                        <Text style={styles.headerText}>VOLTAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContent}>
                    <Text style={styles.title}>{titulo}</Text>
                </View>
                <View style={styles.temesContainer}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.button} onPress={() => router.push({ pathname: '/screens/conteudos/objetivo', params: { objetivo: objetivo, titulo: titulo }  })}>
                            <Text style={styles.buttonText}>Objetivo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => router.push({ pathname: '/screens/conteudos/habilidades', params: {habilidades:habilidades, titulo:titulo} })}>
                            <Text style={styles.buttonText}>Habilidades</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.button} onPress={() => router.push({ pathname: '/screens/conteudos/leitura', params: {leitura_discussao: leitura_discussao, titulo:titulo} })}>
                            <Text style={styles.buttonText}>Leitura e discussão</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} 
                            onPress={() => router.push({ pathname: '/screens/conteudos/video', params: {
                                video_conteudo: video_conteudo, 
                                titulo:titulo, 
                                video_exposicaop_conteudo: video_exposicaop_conteudo,
                                video_exposicaop_link: video_exposicaop_link,
                                video_exposicaot_conteudo: video_exposicaot_conteudo,
                                video_exposicaot_link: video_exposicaot_link,
                                } })}>
                            <Text style={styles.buttonText}>Vídeo de apoio</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.button} onPress={() => router.push({ pathname: '/screens/conteudos/atividade', params: {atividade: atividade, titulo:titulo} })}>
                            <Text style={styles.buttonText}>Atividade Prática</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    titleContent:{
        borderColor: '#3B934F',
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderRadius: 3,
        width: 250,
        paddingVertical: 0,
        marginTop: 50,
    },
    containerText:{
        color: '#fff',
        fontSize: 15,
    },
    header: {
        backgroundColor: '#45A75B',
        width: '100%',
        padding: 20,
    },
    touchable: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 3,
        marginTop: 2
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        fontFamily: 'Inter_600SemiBold',
        color: '#3B934F',
        textAlign: 'center',
        marginVertical: 15,
        letterSpacing: 2,
    },
    temesContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        backgroundColor: '#3B934F',
        borderRadius: 20,
        padding: 15,
        margin: 10,
        width: '50%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    singleButton: {
        width: '100%',
    },
});
