import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Icon } from '@rneui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TurmasScreen() {
    const { titulo, objetivo } = useLocalSearchParams();

    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <ImageBackground
        source={require('./../../../../assets/img/fundoPadrao.png')}
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
                <View style={styles.temeContainer}>
                    <Text style={styles.textTitle}>Objetivo</Text>
                </View>
                <View style={styles.contentText}>
                    <Text style={styles.text}>{objetivo}</Text>
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
    contentText: {
        width: '92%',
        marginTop: 30,
        textAlign: 'justify',
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
    temeContainer: {
        width: '80%',
        height: 58,
        borderRadius: 25,
        backgroundColor: '#3B934F',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    textTitle: {
        fontFamily: 'Inter_700Bold',
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    text: {
        color: '#00370D',
        textAlign: 'justify',
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
    }
});
