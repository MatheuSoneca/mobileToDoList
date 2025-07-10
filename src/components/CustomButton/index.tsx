import {styles} from './styles';
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

type CustomButtonProps = TouchableOpacityProps & {
    title?: string;

};

export default function CustomButton({title, ...props}: CustomButtonProps) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export function CustomButton2({title, ...props}: CustomButtonProps) {
    return (
        <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}