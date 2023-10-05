import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ConcertResultsScreen({ route }) {
  // Extract playlistUrl from the navigation parameters
  const { playlistUrl } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Concert Results</Text>
      <Text style={styles.subtitle}>
        Showing results for playlist: 
      </Text>
      <Text style={styles.url}>
        {playlistUrl}
      </Text>
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
  url: {
    fontSize: 16,
    color: '#FFFFFFAA',
    marginBottom: 20,
    textAlign: 'center',
  },
});
