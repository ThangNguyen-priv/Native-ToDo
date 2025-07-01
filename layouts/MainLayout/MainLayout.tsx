import { StyleSheet, View } from 'react-native';

import ControllerLayout from '../ControllerLayout/ControllerLayout';
import HeaderLayout from '../HeaderLayout/HeaderLayout';

export default function MainLayout() {
  return (
    <View style={styles.container}>
      <HeaderLayout />
      <ControllerLayout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});
