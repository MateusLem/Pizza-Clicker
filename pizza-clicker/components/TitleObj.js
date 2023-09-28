import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TitleObj({ value, desc, title }) {
  return (
    <TouchableOpacity
      style={styles.titleContainer}
      onPress={() => {
        console.log(desc);
        alert(desc);
      }}>
      <Text style={{ color: 'white' }}>
        {title}: {value}
      </Text>
      <Text style={{ color: 'white', padding: 5 }}>&#9432;</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    margin: 8,
    height: 50,
    width: '100%',
    backgroundColor: '#3085d6', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10,
  }
});
