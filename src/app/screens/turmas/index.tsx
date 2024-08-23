import { Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import { router } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TurmasScreen() {
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

            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.touchable}>
                        <Image source={require('./../../../assets/img/educaVerdeLateral.png')}
                            style={{height: 35}}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>TURMAS</Text>
                <View style={styles.turmasContainer}>
                    <TouchableOpacity style={styles.turmaBox} onPress={() => router.push({ pathname: '/screens/temas', params: { turma: 'sexto' }  })}>
                        <View style={styles.turmaTop}>
                            <Text style={styles.turmaText}>6º ANO</Text>
                        </View>
                        <View style={styles.turmaBottom} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.turmaBox} onPress={() => router.push({ pathname: '/screens/temas', params: { turma: 'setimo' }  })}>
                        <View style={styles.turmaTop}>
                            <Text style={styles.turmaText}>7º ANO</Text>
                        </View>
                        <View style={styles.turmaBottom} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.turmaBox} onPress={() => router.push({ pathname: '/screens/temas', params: { turma: 'oitavo' }  })}>
                        <View style={styles.turmaTop}>
                            <Text style={styles.turmaText}>8º ANO</Text>
                        </View>
                        <View style={styles.turmaBottom} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.turmaBox} onPress={() => router.push({ pathname: '/screens/temas', params: { turma: 'nono' }  })}>
                        <View style={styles.turmaTop}>
                            <Text style={styles.turmaText}>9º ANO</Text>
                        </View>
                        <View style={styles.turmaBottom} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#45A75B',
        width: '100%',
        padding: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 26,
        fontFamily: 'Inter_600SemiBold',
        color: '#3B934F',
        textAlign: 'center',
        marginVertical: 40,
        letterSpacing: 2
    },
    turmasContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginTop: 30
    },
    turmaBox: {
        width: '45%',
        marginVertical: 10,
    },
    turmaTop: {
        backgroundColor: '#3B934F',
        paddingVertical: 40,
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        alignItems: 'center',

    },
    turmaBottom: {
        backgroundColor: '#73D88A',
        height: 33,
    },
    turmaText: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
    },
    touchable: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
    },
});
