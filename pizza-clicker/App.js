import Main from './components/Main';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: '#d6c083',
    height: '100vh',
    borderWidth: '10px',
    borderColor: 'white',
    padding: '1vh',
  },
});
