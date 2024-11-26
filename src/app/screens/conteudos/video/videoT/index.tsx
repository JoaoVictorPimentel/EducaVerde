import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Icon } from '@rneui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import YouTubeIframe from 'react-native-youtube-iframe';

export default function TurmasScreen() {
    const { video_exposicaot_conteudo, video_exposicaot_link } = useLocalSearchParams();
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    const openLink = () => {
        let link = Array.isArray(video_exposicaot_link) ? video_exposicaot_link[0] : video_exposicaot_link;

        if (link) {
            const videoId = getVideoId(link);
            if (videoId) {
                setIsVideoOpen(true);
            } else {
                Alert.alert('Vídeo Indisponível', 'Este link do vídeo do YouTube não é válido.');
            }
        } else {
            Alert.alert('Vídeo Indisponível', 'Este conteúdo não possui vídeo.');
        }
    };

    const getVideoId = (link: string | string[]) => {
        if (typeof link === 'string') {
            const match = link.split('v=')[1];
            if (match) {
                return match.split('&')[0];
            }
        }
        return null;
    };

    return (
        <ImageBackground
            source={require('./../../../../../assets/img/fundoPadrao.png')}
            style={{ width: '100%', height: '100%' }}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.touchable}>
                        <Icon name="left" type='antdesign' size={23} color="#fff" />
                        <Text style={styles.headerText}>VOLTAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.temeContainer}>
                    <Text style={styles.textTitle}>Vídeo exposição teórica</Text>
                </View>
                <View style={styles.contentText}>
                    <Text style={styles.text}>{video_exposicaot_conteudo}</Text>
                </View>
                <View style={styles.containerVideo}>
                    {isVideoOpen ? (
                        <YouTubeIframe
                            height={200}
                            videoId={getVideoId(video_exposicaot_link)}
                            play={true}
                            onChangeState={(state) => console.log(state)}
                        />

                    ) : (
                        <View>
                            <TouchableOpacity style={styles.contentVideo} onPress={openLink}>
                                <Icon name="youtube-play" type='font-awesome' size={25} color="#fff" />
                                <Text style={styles.videoText}>Vídeo exposição teórica</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.youtubeButton} onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${getVideoId(video_exposicaot_link)}`)}>
                                <Icon name="youtube" type='font-awesome' size={25} color="#fff" />
                                <Text style={styles.youtubeButtonText}>Assistir no YouTube</Text>
                            </TouchableOpacity>
                        </View>

                    )}
                    {video_exposicaot_link && isVideoOpen && (
                        <TouchableOpacity style={styles.youtubeButton} onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${getVideoId(video_exposicaot_link)}`)}>
                            <Icon name="youtube" type='font-awesome' size={25} color="#fff" />
                            <Text style={styles.youtubeButtonText}>Assistir no YouTube</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    containerText: {
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
    temeContainer: {
        width: '80%',
        minHeight: 58,
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
        fontSize: 17,
    },
    containerVideo: {
        width: '93%',
        marginTop: '15%'
    },
    contentVideo: {
        backgroundColor: '#59CA72',
        height: 58,
        borderRadius: 25,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    videoText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 19,
        color: 'white',
        marginLeft: 10,
    },
    youtubeButton: {
        backgroundColor: '#3B934F',
        height: 58,
        borderRadius: 25,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    youtubeButtonText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 19,
        color: 'white',
        marginLeft: 10,
    },
});
