import LottieView from 'lottie-react-native';
import { useState } from 'react';
import {
    Dimensions, KeyboardAvoidingView,
    Platform, SafeAreaView, StyleSheet, Text, TextInput, View,
    Button, ProgressBarAndroid, AsyncStorage
} from "react-native";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { getOperatorAPI } from "../../api";
import { initializeFirebaseInstance } from '../../config/firebase_config';

const windowHeight = Dimensions.get('window').height;
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

initializeFirebaseInstance();
const firebaseAuthInstance = getAuth();

export default function SignInPage({ navigation }) {
    const [emailId, setEmailId] = useState('op2@temp.com');
    const [password, setPassword] = useState('password');
    const [loading, setIsLoading] = useState(false);

    const onSignInButtonClick = async () => {
        try {
            setIsLoading(true);

            await navigation.navigate("Home");
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                <View style={{ paddingLeft: 24, paddingTop: 48 }}>
                    <Text style={{ fontSize: 40, fontFamily: "LexendDeca" }}>Welcome!</Text>
                    <Text style={{ fontSize: 20, fontFamily: "LexendDeca" }}>Sign in to continue</Text>
                </View>

                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: windowHeight / 4 }}>
                    <LottieView
                        autoPlay
                        style={{
                            width: 300,
                            height: 300,
                        }}
                        source={require('../../assets/lottie/security1.json')}
                    />
                </View>

                <TextInput
                    style={styles.input1}
                    onChangeText={setEmailId}
                    value={emailId}
                    placeholder="Email ID"
                />

                <TextInput
                    style={styles.input2}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                />

                <View style={styles.button}>
                    <Button
                        onPress={onSignInButtonClick}
                        title="Sign In"
                    />
                </View>

                {
                    loading &&
                    <ProgressBarAndroid styleAttr="Horizontal" />
                }
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input1: {
        height: 48,
        borderWidth: 1,
        padding: 10,
        marginTop: windowHeight / 4,
        marginLeft: 24,
        marginRight: 24
    },
    input2: {
        height: 48,
        borderWidth: 1,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 24,
        padding: 10
    },
    container: {
        flex: 1
    },
    button: {
        marginTop: 16,
        marginLeft: 24,
        marginRight: 24
    }
});