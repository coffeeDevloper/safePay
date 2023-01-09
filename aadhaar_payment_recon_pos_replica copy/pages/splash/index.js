import { loadAsync, useFonts } from 'expo-font';
import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';


export default function SplashPage({ navigation }) {
    useEffect(() => {
        async function loadFonts() {
            await loadAsync({
                'LexendDeca': require('../../assets/fonts/LexendDeca.ttf')
            });
        }
        loadFonts();
    }, []);

    const [fontsLoaded] = useFonts({
        'LexendDeca': require('../../assets/fonts/LexendDeca.ttf'),
    });

    return (
        <View style={styles.animationContainer}>
            <LottieView
                autoPlay
                loop={false}
                style={{
                    width: 400,
                    height: 400
                }}
                onAnimationFinish={() => navigation.navigate("SignIn")}
                source={require('../../assets/lottie/biometric.json')}
            />

            {fontsLoaded && <Text style={{ fontFamily: "LexendDeca", fontSize: 32, fontWeight: "bold" }}>SAFE Pay</Text>}
            {fontsLoaded && <Text style={{ fontFamily: "LexendDeca", fontSize: 16 }}>Team Name: SAVE THE SEVA </Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20
    },
});
