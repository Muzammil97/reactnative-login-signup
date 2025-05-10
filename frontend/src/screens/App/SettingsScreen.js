import React from 'react'; // Import useCallback

import {  StyleSheet,ScrollView, } from 'react-native';
import { Text, Surface, Title } from 'react-native-paper';
import {useTheme} from 'react-native-paper';

const SettingsScreen = () => {
 const theme = useTheme()
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
 
           <Title style={styles.title}>Settings</Title>
           <Surface style={styles.surface} elevation={2}>
             <Text style={styles.sectionTitle}>User Information</Text>
           </Surface>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
   surface: {
       padding: 15,
       borderRadius: 8,
       marginBottom: 20,
   },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default SettingsScreen;