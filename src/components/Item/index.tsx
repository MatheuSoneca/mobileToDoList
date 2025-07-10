import { TouchableOpacity, TouchableOpacityProps, Text, View } from "react-native"
import {styles} from "@/components/Item/styles";

type ItemProps = TouchableOpacityProps & {
    title: string;
}

export default function Item({title, ...rest}: ItemProps)  {
    return (
            <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={() => console.log(`${title} pressed`)}>
                <Text style={styles.itemText}>{title}</Text>\
                <View>
                    <Text style={styles.options}>...</Text>
                </View>
            </TouchableOpacity>
    )
}