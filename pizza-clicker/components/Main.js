import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Pizza from '../assets/pizza.png';
import UpgradeContent from './UpgradeContent';

export default function Main({increment, upgrade, level, value, cost}) {
  

  return (
    <View>
      <TouchableOpacity style={styles.imgContainer} onPress={increment}>
        <Image style={styles.img} source={Pizza} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.upgrade} onPress={upgrade}>
        <UpgradeContent level={level} power={value} cost={cost} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'red',
    backgroundColor: '#f7f7c6',
  },
  img: {
    marginLeft: 7,
    aspectRatio: 1,
    resizeMode: 'contain',
    height: 250
  },
  upgrade: {
    marginTop: 10,
    backgroundColor: '#1d9c14',
    padding: 5,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
