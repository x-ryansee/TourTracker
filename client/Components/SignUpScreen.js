import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // TODO: Add logic to handle sign up 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join ConcertFinder today!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#FFFFFFAA"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#FFFFFFAA"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#FFFFFFAA"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1DB954',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 32,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      color: '#FFFFFF',
      marginBottom: 20,
    },
    input: {
      height: 50,
      width: '100%',
      borderColor: '#FFFFFF',
      borderWidth: 1,
      borderRadius: 25,
      marginBottom: 20,
      paddingHorizontal: 15,
      color: '#FFFFFF',
      backgroundColor: '#FFFFFF33',
    },
    button: {
      backgroundColor: '#191414',
      borderRadius: 25,
      paddingVertical: 15,
      paddingHorizontal: 40,
      marginBottom: 20,
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
