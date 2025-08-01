import CustomButton, { CustomButton2 } from '@/components/CustomButton';
import { styles } from './styles';
import { View, Text, TextInput } from "react-native"
import { router } from 'expo-router';

const handleGoBack = () => {
    router.back();
}

export default function NewProject() {
    return (
        <View style={ styles.main }>
            <Text style={styles.title}>Novo Projeto</Text>

            <View style={styles.inputContainer}>  
                <TextInput style={styles.inputName}
                    placeholder="Nome do Projeto" 
                    placeholderTextColor="#FFFFFF"
                />
                
                <TextInput 
                    style={styles.inputDescription} 
                    placeholder="Detalhes Sobre o Projeto" 
                    placeholderTextColor="#FFFFFF"
                />
            </View>
            
            <View>
                <CustomButton title='Salvar'/>
                <CustomButton2 title='Cancelar' onPress={handleGoBack}/> // O ROUTER BACK ESTA QUEBRADO!!!
            </View>
        </View>
    )
}

