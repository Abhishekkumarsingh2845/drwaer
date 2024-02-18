import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image,Button, TextInput } from 'react-native';

const App = () => {
  const[current, xxx]=useState(0);

  const ff =()=> {
    xxx(current +1);
  }

  const fff = ()=>{
    xxx(current-1);
  }
  return (
    <View style={styles.cc}>
    <View style={styles.container}>
     <Text style={styles.aa}>Delivery Address</Text>
     <Text style={styles.aaa}>Vasundhara</Text>
     <Text style={styles.aaaa}>D-119 Konark Enclave Sector 17 Vasundhara</Text>
     <TouchableOpacity>
     <Text style ={styles.aaaaa}>  Edit Address</Text>
     </TouchableOpacity>
     <TouchableOpacity>
     <Text style ={styles.aaaaaa}>   Add Note</Text>
     </TouchableOpacity>
    </View>
  
    <View style={styles.nexc}>
    <Image source={require("./Assets/detail.png")}
    style={styles.bbb}/>
    <Text style={styles.bt}>Cauupinco</Text>
    <View style={styles.zz}>
    <Text style={styles.sds}>counter:{current}</Text>
      <Button title='+' onPress={ff}/>
      <Button title="-" onPress={fff}/>
    </View>

    </View>
    <View style={styles.lpl}>
      <Text style={styles.lp}>1 Discount Applied</Text>
    </View>
    <View style={styles.hh}>
      <Text style={styles.hhv}>PAYMENT SUMMARY</Text>
    </View>
    <Text style={styles.t1}> Price:                $12</Text>
    <Text style={styles.t2}> Fee:                   $23</Text>
    <Button title='ORDER'/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  cc:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'darkgray',
  },
  container: {
    width:'90%',
    height:'20%',
    borderColor:'black',
    //borderWidth:1,
    top:-150,
  },
  aa:{
   fontSize:20,
  fontWeight:'bold',
   top:-5,
  right:2,
  color:'black',
  },
  aaa:{
    fontSize:17,
    color:'black',
    bottom:-10,
    fontWeight:'bold',
  },
  aaaa:{
    fontSize:10,
    color:'black',
    bottom:-10,
    right:-2,
  },
  aaaaa:{
  width:65,
  height:20,
  borderWidth:0.5,
  color:'black',
 top:29,
 left:0,
 borderRadius:5,
 fontSize:11,
  },
  aaaaaa:{
    width:65,
    height:20,
    borderWidth:0.5,
  color:'black', 
  bottom:-9,
  right:-70,
  borderRadius:5,
  fontSize:12,
  },
  nexc:{
    width:"90%",
    height:"20%",
    //borderWidth:1,
    top:-140,
  },
  bbb:{
    width:'17%',
    height:'25%',
    top:12,
    borderRadius:6,
  },
  bt:{
     fontSize:12,
     color:"black",
     left:52,
     top:-16,
     fontWeight:"bold",
  },
  sds:{
    fontSize:16,
    color:"black",
    top:-30,
    right:-210,
  },
  lpl:{
width:"90%",
height:"10%",
borderWidth:2,
top:-121,
borderRadius:18,
color:"black",
fontSize:16,
borderColor:"aliceblue",
justifyContent: 'center',
    alignItems: 'center',
   
  },
  lp:{
    fontSize:20,
    color:"black",
  },
  hh:{
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth:1,
    top:-104,
  },
  hhv:{
fontSize:22,
  },
  t1:{
    fontSize:22,
    bottom:95,
  },
  t2:{
    fontSize:22,
    bottom:95,
  },
});
export default App;
