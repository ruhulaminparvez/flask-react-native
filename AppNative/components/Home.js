import React, { Component, useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper';

function Home (props){

    const [data, setData] = useState([])
    const [Loading, setLoading] = useState(true)

    const loadData = () => {
        fetch('http://192.168.127.1:3000/get', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(article => {
            setData(article)
            setLoading(false)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        loadData()
       
    }, [])


    const clickedItem = (data) => {
        props.navigation.navigate('Details', {data: data})
    }

    


    const renderData = (item) => {
       return (
            <Card style = {styles.cardStyle}>
                <Text style = {{ fontSize: 22, fontWeight: 'bold' }}  onPress={() => clickedItem(item)} >{item.title}</Text>
                <Text style = {{ fontSize: 16 }}>{item.content}</Text>
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
                onRefresh = {() => loadData()}
                refreshing = {Loading}
                keyExtractor={item => `${item.id}`}
            />

            <FAB
                style = {styles.fab}
                small = {false}
                icon = "plus"
                theme = {{colors:{accent:"#56BBF1"}}}
                onPress = {() => props.navigation.navigate('Create')}
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