import React, { Component,useState,useEffect } from "react";
import { Button, View, Text } from "react-native";
import axios from "axios";

export default function TeacherScreen() {

  const [getdata, setData]=useState([]);
  const fetch=()=>{

    axios.get('http://127.0.0.1:8000/listea/')
    .then((res)=>setData(res.data))
    .catch(err=>console.log(err))
  }
    useEffect(() =>{
      fetch()
    },[])

    const des=(id)=>{
      axios.delete(`http://127.0.0.1:8000/deltea/${id}`)
      fetch()
    }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      {getdata.map((items)=>{
        return(
          <View key={items.id}>
            <Text>{items.teacherName}</Text>
            <Text>{items.coures}</Text>
            <Button
             title="Delete"
             onPress={()=> des(items.id)}
             />
          </View>
        );
      })}
      
    </View>
  );
}