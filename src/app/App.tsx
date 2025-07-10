import { styles } from './styles';
import { View, Text } from 'react-native';
import Item from '../components/Item';
import NewItemButton from '@/components/NewItemButton';

export default function Index() {
    return (
        <View style={ styles.main }>
            <Text style={styles.title}>Projetos</Text>

            <View style={styles.itens}>  
                <Item title='Tarefas Pessoais' />
                <Item title='Pendências do Trabalho' />
                <Item title='Programação' />
            </View>

            <NewItemButton />
        </View>
    )
}