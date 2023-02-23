import React, { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Text, View, Alert } from 'react-native';

export default function Signup({ navigation }) {

  const [emailAddress, setEmailAddress] = useState("");
  const [confirmEmailAddress, setConfirmEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.signUpTitle}>Sign Up</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmailAddress}
          value={emailAddress}
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          onChangeText={setConfirmEmailAddress}
          value={confirmEmailAddress}
          placeholder="Confirm Email Address"
          textContentType="username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
          textContentType="password"
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer} >
          <TouchableOpacity style={styles.button} onPress={() => {
            if (emailAddress.length === 0 && confirmEmailAddress.length === 0 && password.length === 0 && confirmPassword.length === 0) {
              Alert.alert("Oops", "Please fill all the details above")
            }
            else if (emailAddress !== confirmEmailAddress) {
              Alert.alert("Mismatch", "Please check your email")
            } else if (password !== confirmPassword) {
              Alert.alert("Mismatch", "Please check your password")
            } else {
              Alert.alert("Ohoo!!", "Your profile has been created...")
              navigation.navigate("Sign In")
            }
          }}
          >
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View >
      </View>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    backgroundColor: '#fff',
    justifyContent: "center",
    height: "100%"
  },
  signUpTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 30
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderLeftColor: "#FA6E3B",
    borderLeftWidth: 5,
  },
  buttonContainer: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  button: {
    backgroundColor: "#FA6E3B",
    padding: 10,
    borderRadius: 10,
    minWidth: 100
  },
  signUpText: {
    color: "#fff",
    textAlign: "center"
  }
});

