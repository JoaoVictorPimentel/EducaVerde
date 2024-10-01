import { Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import { Icon } from '@rneui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useTurmaConteudo from './../../hooks/useTurmaConteudo';

interface Conteudo {
    id: number;
    titulo: string;
    objetivo: string;
    habilidades: string;
    leitura_discussao: string;
    video_conteudo: string;
    video_exposicaop_conteudo: string;
    video_exposicaop_link: string;
    video_exposicaot_conteudo: string;
    video_exposicaot_link: string;
    atividade: string;
}

const turmaMap: { [key: string]: string } = {
    'sexto': '6',
    'setimo': '7',
    'oitavo': '8',
    'nono': '9'
};

export default function TemasScreen() {
    const { turma } = useLocalSearchParams();
    const conteudos = useTurmaConteudo(turma) as Conteudo[];

    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });

    if (!fontsLoaded) {
        return null;
    }

    const turmaNumero = turmaMap[turma as string] || 'Desconhecido';

    return (
        <ImageBackground
            source={require('./../../../assets/img/fundoPadrao.png')}
            style={{ width: '100%', height: '100%' }}
        >
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.touchable}>
                        <Icon name="left" type='antdesign' size={23} color="#fff" />
                        <Text style={styles.headerText}>VOLTAR</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>{turmaNumero}° ANO - TEMAS</Text>
                <View style={styles.temasContainer}>
                    {conteudos.length > 0 ? (
                        conteudos.map((conteudo, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={styles.container2} 
                                onPress={() => router.push({ pathname: '/screens/conteudos', 
                                    params: { 
                                        conteudoId: conteudo.id, 
                                        titulo: conteudo.titulo,
                                        objetivo: conteudo.objetivo,
                                        habilidades: conteudo.habilidades,
                                        leitura_discussao: conteudo.leitura_discussao,
                                        video_conteudo: conteudo.video_conteudo,
                                        video_exposicaop_conteudo: conteudo.video_exposicaop_conteudo,
                                        video_exposicaop_link: conteudo.video_exposicaop_link,
                                        video_exposicaot_conteudo: conteudo.video_exposicaot_conteudo,
                                        video_exposicaot_link: conteudo.video_exposicaot_link,
                                        atividade: conteudo.atividade
                                    }})}
                            >
                                <Text style={styles.containerText}>{conteudo.titulo}</Text>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text style={styles.containerText}>Carregando conteúdos...</Text>
                    )}
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container2: {
        backgroundColor: '#3B934F',
        height: 74,
        borderRadius: 17,
        marginHorizontal: 31,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    containerText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
        textTransform: 'uppercase',
        textAlign: 'center',
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
        marginTop: 2,
    },
    title: {
        fontSize: 26,
        fontFamily: 'Inter_600SemiBold',
        color: '#3B934F',
        textAlign: 'center',
        marginVertical: 40,
        letterSpacing: 2,
    },
    temasContainer: {
        marginTop: 30
    }
});
