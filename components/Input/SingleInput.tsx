import { StyleSheet, TextInput } from 'react-native';

import { InputComponentProps } from '~/types';

export default function Input({ item, setItem, title }: InputComponentProps) {
    return (
        <TextInput
            style={styles.input}
            value={item}
            onChangeText={(text) => setItem(text)}
            placeholder={title}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 40,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
    },
});
