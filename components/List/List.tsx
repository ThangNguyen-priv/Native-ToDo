import { FlatList, StyleSheet, View } from 'react-native';

import { ListProps } from '~/types';
import React from 'react';
import SingleLine from '../Line/SingleLine';
import { useToDoContext } from '~/hooks/useToDoContext';

export default function List({ list }: ListProps) {
  const { onCheck, onDelete } = useToDoContext();
  return (
    <FlatList
      data={list}
      keyExtractor={(_item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <SingleLine
            id={item.id}
            isChecked={item.isChecked}
            text={item.text}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
