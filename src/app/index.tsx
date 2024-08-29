import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

export default function SplashScreenApp() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push({ pathname: 'inicio' });
        }, 2500);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/splash.png')} style={styles.image} />
            <ActivityIndicator size="large" color="#ffff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#45A75B',
    },
    image: {
        marginBottom: 20,
    },
});