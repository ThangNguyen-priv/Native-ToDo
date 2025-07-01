import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { SingleLineProps } from "~/types";

export default function SingleLine({ id, text, isChecked, onCheck, onDelete }: SingleLineProps) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={[styles.line, isChecked && styles.checked]}>{text}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => onCheck(id)}>
                    <FontAwesome
                        name={isChecked ? "check-square-o" : "square-o"}
                        size={20}
                        color="#4CAF50"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(id)}>
                    <FontAwesome name="trash" size={20} color="#F44336" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "70%",
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#CCCCFF",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 8,
        borderColor: "black",
        padding: 10,
        boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    line: {
        fontSize: 16,
        color: "#333",
    },
    iconContainer: {
        flexDirection: "row",
        gap: 12,
    },
    checked: {
        textDecorationLine: "line-through",
        color: "#888",
    },
});
