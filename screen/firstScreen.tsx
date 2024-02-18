import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Button,StatusBar,TouchableOpacity } from 'react-native';

const App = () => {
  const handleButtonPress = () => {
    // Handle button press action here
    console.log('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Image
        source={require('./Assets/aa.png')} // Corrected image path
        style={styles.image} // Corrected style name
      />
      <ImageBackground
        source={require('./Assets/aaa.png')} // Corrected image path
        style={styles.image1}
        resizeMode="cover"
      >
        <Text style={styles.f1}>Coffee so good{"\n"}your taste buds{"\n"}</Text>
        <Text style={styles.f2}>will love it.</Text>
      </ImageBackground>

      {/* Button at the bottom of the screen */}
      <View style={styles.buttonContainer}>
        <Button onPress={handleButtonPress} title="Get Started" color="blue" />
      </View>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
  },
  image1: {
    width: '100%',
    height: '80%',
    bottom: 65,
  },
  f1: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    top: 60,
    left: 70,
  },
  f2: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    bottom:-28,
    left: 95,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width:'80%',
   
  },
});

export default App;
