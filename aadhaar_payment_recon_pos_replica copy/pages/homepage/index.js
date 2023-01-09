import {
    Button, KeyboardAvoidingView, ProgressBarAndroid, SafeAreaView, StyleSheet, Text, TextInput, View, Dimensions
} from "react-native";
import LottieView from 'lottie-react-native';
import { useEffect, useState } from "react";
import { getMobileAppFieldsAPI } from "../../api";
import * as LocalAuthentication from 'expo-local-authentication';
import * as ReactNativeBiometrics from 'react-native-biometrics';

const windowHeight = Dimensions.get('window').height;
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

export default function HomePage({ navigation }) {
    const [amountPayable, setAmountPayable] = useState(80);
    const [customerAadhaar, setCustomerAadhaar] = useState("5485 5000 8000");

    const handleBiometricAuth = async () => {
        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        console.log(savedBiometrics);
    }

    const isBiometricSupport = async () => {
        let { success, error } = await ReactNativeBiometrics.simplePrompt({
            promptMessage: 'Sign in with Touch ID',
            cancelButtonText: 'Close',
        });
        console.log({ success, error });
    };

    useEffect(() => {
        async function getMobileAppFields() {
            const apiResponse = await getMobileAppFieldsAPI();
        }
        getMobileAppFields();
    });

    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                <View style={{ paddingLeft: 24, paddingTop: 48 }}>
                    <Text style={{ fontSize: 40, fontFamily: "LexendDeca" }}>SAFE Pay</Text>
                    <Text style={{ fontSize: 20, fontFamily: "LexendDeca" }}>Place your finger on the scanner to continue</Text>
                </View>

                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: windowHeight / 8 }}>
                    <LottieView
                        autoPlay
                        style={{
                            width: 300,
                            height: 300,
                        }}
                        source={require('../../assets/lottie/security2.json')}
                    />
                </View>

                <View style={{ marginTop: windowHeight / 4 }}>
                    <Text style={{ marginLeft: 24, fontSize: 16, fontFamily: "LexendDeca" }}>Aadhaar Number</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder="Customer Aadhaar Number"
                        editable={false}
                        value={customerAadhaar}
                    />

                    <Text style={{ marginTop: 16, marginLeft: 24, fontSize: 16, fontFamily: "LexendDeca" }}>Bank Account Number</Text>
                    <TextInput
                        style={styles.input2}
                        placeholder="Bank Account Number"
                        value={`XXXX XXXX XXXX ${Math.floor(1000 + Math.random() * 9000)}`}
                        editable={false}
                    />

                    <Text style={{ marginTop: 16, marginLeft: 24, fontSize: 16, fontFamily: "LexendDeca" }}>Amount Payable</Text>
                    <TextInput
                        style={styles.input3}
                        placeholder="Amount Payable"
                        value={amountPayable.toString()}
                        editable={false}
                    />

                    <View style={styles.button}>
                        <Button
                            onPress={isBiometricSupport}
                            title="Pay with AEPS"
                        />
                    </View>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input1: {
        height: 48,
        borderWidth: 1,
        padding: 10,
        marginLeft: 24,
        marginRight: 24
    },
    input2: {
        height: 48,
        borderWidth: 1,
        marginLeft: 24,
        marginRight: 24,
        padding: 10
    },
    input3: {
        height: 48,
        borderWidth: 1,
        marginLeft: 24,
        marginRight: 24,
        padding: 10
    },
    container: {
        flex: 1
    },
    button: {
        margin: 24
    }
});