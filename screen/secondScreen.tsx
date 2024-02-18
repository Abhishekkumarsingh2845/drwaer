import React from 'react';
import {View,Text,StyleSheet,Image,ImageBackground, TextInput,ScrollView,TouchableOpacity} from 'react-native';
 const App = ()=>
 {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 4</Text>
        </TouchableOpacity>
      </ScrollView>

      <Image source={require("./Assets/aaaa.png")}
      style={styles.con}
      resizeMode="cover"/>

      <Image source={require("./Assets/aaaaa.png")}
      style={styles.conn}
      resizeMode="cover"/>
      <Text style={styles.aa}>Location{"\n"}
      Vasundhara,Ghaziabad
        </Text>
        <TextInput style={styles.box} placeholder ="Search coffee"
        textAlign="center"
         ></TextInput>
    </View>
  );
 };

 const styles=StyleSheet.create({
  container:{
  flex:1,
  justifyContent:'flex-start',
  alignItems:'center',
  },
  con:{
   width:'100%',
   height:'125%'
  },
  conn:{
    width:'15%',
    height:'10%',
    bottom:340,
    left:120,
    borderRadius:15,
   },
   aa:{
    fontSize:15,
    bottom:390,
    left:-80,
   },
   box:{
    width:300,
    height:50,
    borderColor:'blue',
    backgroundColor:'#989898',
    borderRadius:16,
    bottom:360,
    fontSize:22,
   },
   button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    height:40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

   

 });
  
 export default App;