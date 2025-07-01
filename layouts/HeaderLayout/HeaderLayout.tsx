import { StyleSheet, View } from "react-native";

import { Header } from "~/components";

export default function HeaderLayout() 
{
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
    },
});