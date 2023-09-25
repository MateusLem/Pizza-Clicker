import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TitleObj({ value, desc, title }) {
  return (
    <TouchableOpacity
      style={styles.titleContainer}
      onPress={() => {
        console.log(desc);
        //alert(desc);
      }}>
      <Text style={{ color: 'white' }}>
        {title}: {value}
      </Text>
      <Text style={{ color: 'white', padding: '0.5vh' }}>&#9432;</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    margin: '1vh',
    minHeight: '5vh',
    minWidth: '40vw',
    background: '#3085d6',
    textAlign: 'center',
    borderRadius: '10px',
  },
});
