import { View, StyleSheet } from 'react-native';

import TitleObj from './TitleObj';

export default function Header({valSlice, valDmg}) {
  return (
    <View style={styles.headerContainer}>
      <TitleObj value={valSlice} desc="Número de pedaços de pizza que você comeu" title="Pedaços" />
      <TitleObj value={valDmg} desc="Quantidade de pedaços você pode comer de uma vez" title="Gula" />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection:'row',
  },
});
