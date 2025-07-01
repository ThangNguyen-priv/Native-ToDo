import { List, SingleButton, SingleInput } from '~/components';
import { StyleSheet, View } from 'react-native';

import { ToDoContext } from '~/hooks/useToDoContext';
import { ToDoItem } from '../../types/common/component.type';
import useController from '~/hooks/useController';
import { useState } from 'react';

export default function ControllerLayout() {
    const [item, setItem] = useState<string>('');
    const [list, setList] = useState<ToDoItem[]>([]);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const { handleAddItem, handleCheckItem, handleRemoveItem } = useController({
        list,
        setList,
        item,
        setItem,
        isChecked,
        setIsChecked,
    });

    return (
        <View>
            <View style={controllerStyles.group}>
                <SingleInput item={item} setItem={setItem} title="Nhập công việc" />
                <SingleButton title="Thêm" onPress={handleAddItem} />
            </View>
            <View style={controllerStyles.list}>
                <ToDoContext.Provider value={{ onCheck: handleCheckItem, onDelete: handleRemoveItem }}>
                    <List list={list} />
                </ToDoContext.Provider>
            </View>
        </View>
    );
}
const controllerStyles = StyleSheet.create({
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
        borderColor: 'black',
        padding: 10,
        borderRadius: 20,
        boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
    },
    list: {
        height: '80%',
    },
});
