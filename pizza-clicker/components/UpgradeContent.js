import { View, Text, StyleSheet } from 'react-native';

export default function UpgradeContent({ level, power, cost }) {
  return (
    <View>
      <Text style={styles.upgradeTxt}>UPGRADE {level}</Text>
      <Text style={styles.upgradeGula}>+{power} de Gula</Text>
      <Text style={styles.upgradeCost}>-{cost} pedaços</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  upgradeTxt: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
  },
  upgradeGula: {
    color: '#f5c440',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
  },
  upgradeCost: {
    color: '#d91414',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
  },
});
