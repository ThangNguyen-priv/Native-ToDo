import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>To Do Native</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
