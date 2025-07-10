import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    item: {
        borderWidth: 2,
        borderTopColor: "rgb(85, 85, 85)",
        borderBottomColor: "rgb(85, 85, 85)",
        borderLeftColor: "#121212",
        borderRightColor: "#121212",
        width: "100%",
        margin: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    itemText: {
        color: '#FFFFFF',
        fontSize: 22,
        margin: 14,
        textAlign: "left",
        marginLeft: 24,
    },
    options: {
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: "bold",
        transform: [{ rotate: '-90deg' }],
        marginRight: 8,
        textAlign: "center", 
    },
});