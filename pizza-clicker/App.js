import { View, StyleSheet } from 'react-native';
import Main from './components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#d6c083',
    borderWidth: 10,
    borderColor: 'white',
    padding: 10,
  },
});
