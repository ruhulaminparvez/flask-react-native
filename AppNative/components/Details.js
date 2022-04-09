import React from 'react'
import {View, ScrollView } from 'react-native'
import { Text, Button } from 'react-native-paper'

function Details(props) {

    const data = props.route.params.data;


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
                    onPress = {() => console.log('Edit')}
                    >Edit</Button>

                <Button 
                    mode = "contained"
                    icon = {'delete'}
                    onPress = {() => console.log('Delete')}
                    >Delete</Button>

            </View>
        </View>
    </ScrollView>
  )
}

export default Details