import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const App =()=>
{
  return (
    <View style={style.container}>
      <Image source={require('./Assets/detail.png')}
      style={style.con}/>
      <Text style={style.tt}>Cappucino</Text>
      <View style={style.line}></View>
      <Text style={style.ttt}>Description</Text>
      <Text style={style.tttt}>Cappuccino is a beloved espresso-based coffee beverage that{"\n"} 
       originates from Italy. It's characterized by its luxurious foam, rich {"\n"}
       espresso, and steamed milk. This classic drink typically {"\n"}
        of equal parts of espresso, steamed milk, and milk foam, creating a {"\n"}
        delightful balance of flavors and textures.</Text>
        <Text style={style.tt}>size</Text>
    </View>
  );
};

const style=StyleSheet.create({
  container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:"white",
  },
  con:{
   width:"90%",
   height:"40%",
   bottom:180,
   borderRadius:20,
   top:-145,
  },
  tt:{
    fontSize:22,
    color:"black",
    top:-145,
    left:-90,
    fontWeight: 'bold',
  },
  line: {
    width: '100%',
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
    marginVertical: 20,
    top:-155, // Adjust spacing as needed
  },
  ttt:{
    fontSize:12,
    color:"black",
    top:-170,
    left:-105,
  },
  tttt:{
    fontSize:10,
    color:"black",
    left:-10,
    top:-160,
  },
  ttttt:{
    fontSize:22,
    color:"black",
    top:-145,
    left:-90,
    fontWeight: 'bold',
  },
});

export default App;