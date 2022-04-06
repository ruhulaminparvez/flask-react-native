import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper';

function Home (){

   const data  = [
       {id:1, title: "First Title", body: "First Body"},
       {id:2, title: "Second Title", body: "Second Body"},
       {id:3, title: "Third Title", body: "Third Body"}
   ]

    const renderData = (item) => {
       return (
            <Card style = {styles.cardStyle}>
                <Text style = {{ fontSize: 22, fontWeight: 'bold' }}>{item.title}</Text>
                <Text style = {{ fontSize: 16 }}>{item.body}</Text>
            </Card>
       );
    }
    return (
        <View style = {{flex:1}}>
            <FlatList
                data={data}
                renderItem={({item}) => {
                    return renderData(item)
                }}
                keyExtractor={item => `${item.id}`}
            />

            <FAB
                style = {styles.fab}
                small = {false}
                icon = "plus"
                theme = {{colors:{accent:"#21325E"}}}
                onPress = {() => console.log("Pressed")}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        margin: 15,
        padding: 15
    },

    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0
    }

});

export default Home