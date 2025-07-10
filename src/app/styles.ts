import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    //Pagina principal
    main:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 36,
        fontWeight: 'heavy',
        marginTop: 26,
        marginBottom: 50,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    itens: {
        width: '100%',
        borderRadius: 8,
    },

    //Pagina de novo projeto
    inputContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputName: { 
        width: '96%', 
        height: 50,  
        borderRadius: 8, 
        paddingHorizontal: 16, 
        marginBottom: 16,
        color: '#FFFFFF',

        borderWidth: 2,    
        borderColor: "rgb(85, 85, 85)",
    },
    inputDescription: {
        width: '96%', 
        height: 200,  
        borderRadius: 8, 
        paddingHorizontal: 16, 
        marginBottom: 16,
        color: '#FFFFFF',
        textAlignVertical: 'top',
        borderWidth: 2,    
        borderColor: "rgb(85, 85, 85)",
    }
})