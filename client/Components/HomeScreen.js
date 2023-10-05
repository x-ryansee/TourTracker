import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../UserContext';

export default function HomeScreen() {
  const [playlistUrl, setPlaylistUrl] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useUser(); // Utilizing the user context
  const navigation = useNavigation(); // Instantiate navigation
  
  const handleSubmit = () => {
    if (playlistUrl.trim() === "") {
      alert("Please provide a Spotify playlist link.");
    } else {
      navigation.navigate('ConcertResults', { playlistUrl }); 
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogout = () => {
    // Reset user state upon logout
    setIsAuthenticated(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ConcertFinder</Text>
      {/* Conditionally render menu button if user is authenticated */}
      {isAuthenticated && (
        <Button title="Menu" onPress={() => navigation.navigate('Menu')} />
      )}

      <Text style={styles.subtitle}>Find live concerts from your favorite playlists!</Text>
      <Text style={styles.instruction}>
        Paste your Spotify playlist link below to discover upcoming tours from the artists!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Paste Spotify playlist link here..."
        placeholderTextColor="#FFFFFFAA"
        value={playlistUrl}
        onChangeText={setPlaylistUrl}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Find Concerts</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        {/* Conditionally render Login/Logout button based on authentication state */}
        {isAuthenticated ? (
          <TouchableOpacity onPress={handleLogout} style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Logout</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleLogin} style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Login</Text>
          </TouchableOpacity>
        )}
        
        <Text style={styles.footerText}>Powered by Spotify</Text>
        {/* Add a tiny Spotify logo here */}
        
        {!isAuthenticated && (
          <TouchableOpacity onPress={handleSignUp} style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Sign Up</Text>
          </TouchableOpacity>
        )}
      </View>
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
  instruction: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
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
  footer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  footerButton: {
    backgroundColor: '#191414',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  footerButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
