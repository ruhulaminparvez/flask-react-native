import {View, ScrollView } from 'react-native'
import { Text, Button } from 'react-native-paper'
import React,  { useState } from 'react'

function Details(props) {

    const data = props.route.params.data;

    const deleteData = () => {
        fetch('Access-Control-Allow-Origin', `http://192.168.127.1:3000/delte/${data.id}`, {

            method: 'DELETE',
            headers: {
                 'Content-Type': 'application/json',
                    'Accept': 'application/json'
            },
            body: JSON.stringify({ title: title, content: content })

        })
        .then(data => {
            props.navigation.navigate('Home')
        })
        .catch(error => console.log(error))
    }


  return (
    <ScrollView>
        <View style = {{margin: 15, padding: 15, justifyContent: 'center'}}>
            <Text style = {{fontSize: 32, fontWeight: 'bold'}}>{data.title}</Text>
            <Text style = {{fontSize: 14}}>{data.date}</Text>
            <Text style = {{fontSize: 26, marginTop: 10}}>{data.content}</Text>
            <View style = {{flexDirection: 'row', justifyContent: 'space-around', margin: 10}}>

                <Button 
                    mode = "contained"
                    icon = {'update'}
                    onPress = {() => props.navigation.navigate('Edit', {data: data})}
                    >Edit</Button>

                <Button 
                    mode = "contained"
                    icon = {'delete'}
                    onPress = {() => deleteData(data)}
                    >Delete</Button>

            </View>
        </View>
    </ScrollView>
  )
}

export default Details