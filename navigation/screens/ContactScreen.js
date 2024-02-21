import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

export default function ContactScreen({navigation}) {
    const [contactsData] = useState([
        { id: '1', name: 'Names', phoneNumber: 'Ndahiro Ngoga Regis' },
        { id: '2', name: 'Phone', phoneNumber: '123-456-7890' },
        { id: '3', name: 'Email', phoneNumber: 'regis@gmail.com' },
        // Add more contacts as needed
      ]);
    
      const renderItem = ({ item }) => (
        <View style={styles.contactItem}>
          <TextInput
            style={styles.contactNameInput}
            value={item.name}
            placeholder="Name"
          />
          <TextInput
            style={styles.contactPhoneNumberInput}
            value={item.phoneNumber}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />
        </View>
      );
    
      return (
        <View style={styles.container}>
          <FlatList
            data={contactsData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.contactList}
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingVertical: 20,
      },
      contactList: {
        paddingHorizontal: 20,
      },
      contactItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        elevation: 2,
      },
      contactNameInput: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      contactPhoneNumberInput: {
        fontSize: 16,
        color: '#888',
      },
    });