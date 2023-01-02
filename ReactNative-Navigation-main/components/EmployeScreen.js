import React, { Component, useState, useEffect } from "react";
import { Button, View, Text } from "react-native";
import axios from "axios";

export default function EmployeScreen() {

  const [getdata, setData]=useState([]);
  const fetch=()=>{

    axios.get('http://127.0.0.1:8000/lisemp/')
    .then((res)=>setData(res.data))
    .catch(err=>console.log(err))
  }
    useEffect(() =>{
      fetch()
    },[])

    const des=(id)=>{
      axios.delete(`http://127.0.0.1:8000/delemp/${id}`)
      fetch()
    }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {getdata.map((items)=>{
        return(
          <View key={items.id}>
            <Text>{items.employeName}</Text>
            <Text>{items.job}</Text>
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