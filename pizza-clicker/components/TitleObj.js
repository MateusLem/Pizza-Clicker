import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TitleObj({ value, desc, title }) {
  return (
    <TouchableOpacity
      style={styles.titleContainer}
      onPress={() => {
        alert(desc);
      }}>
      <Text style={{ color: 'white' }}>
        {title}: {value}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginRight: 10,
    padding: 5,
    fontSize:25,
    backgroundColor: '#3085d6', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10,
  }
});
