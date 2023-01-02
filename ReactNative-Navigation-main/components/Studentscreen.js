import React, {Component, useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from "axios";

export default function StudentScreen({ navigation }) {

  const [getdata, setData] = useState([]);
  const fetch=()=>{

    axios.get('http://127.0.0.1:8000/lisstu/')
    .then((res)=>setData(res.data))
    .catch(err=>console.log(err))
  }
    useEffect(() =>{
      fetch()
    },[])

    const des=(id)=>{
      axios.delete(`http://127.0.0.1:8000/delstu/${id}`)
      .then((response)=>{
        {
          console.log(response.data);
          fetch();
        }
      })
      .catch(err=>console.log(err))
    }
    return (
     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {getdata.map((items)=>{
        return(
          <View key={items.id}>
            <Text>{items.studentName}</Text>
            <Text>{items.grade}</Text>
            <Button
             title="Delete"
             onPress={(id)=> des(items.id)}
             />
          </View>
        );
      })}
     </View>
    );
  }
  

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5359D1',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    studntlist:{
      padding:20,
      backgroundColor:'#c9c9c9',
    }
  });