import { StyleSheet, View } from 'react-native';

import { MainLayout } from '~/layouts';

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <MainLayout />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
});
