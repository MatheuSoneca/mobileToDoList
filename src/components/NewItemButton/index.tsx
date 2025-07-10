import {  TouchableOpacity, TouchableOpacityProps, View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
import { router } from 'expo-router';

const handleNext = () => {
    router.navigate('/newProject');
}

export default function NewItemButton() {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleNext}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    );
}