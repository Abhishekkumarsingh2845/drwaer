import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.scrollView} horizontal={true}>
      <View style={styles.container}>
        <Image 
          source={require('./Assets/detail.png')} 
          style={styles.image}
          resizeMode="contain" // Adjust the resizeMode as needed
        />
        <Image 
          source={require('./Assets/egg.png')} 
          style={styles.image}
          resizeMode="contain" // Adjust the resizeMode as needed
        />
        <Image 
          source={require('./Assets/taco.png')} 
          style={styles.image}
          resizeMode="contain" // Adjust the resizeMode as needed
        />
        <Image 
          source={require('./Assets/pizza.png')} 
          style={styles.image}
          resizeMode="contain" // Adjust the resizeMode as needed
        />
        <Image 
          source={require('./Assets/omleete.png')} 
          style={styles.image}
          resizeMode="contain" // Adjust the resizeMode as needed
        />
      </View>
    </ScrollView>
  );
}; 

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 150, // Set the width of the image
    height: 150,

    marginLeft:20, // Set the height of the image
  },
});

export default App;
