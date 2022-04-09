import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

function Create(props) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const insertData = () => {

        fetch('http://192.168.127.1:3000/add', {

            method: 'POST',
            headers: {
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, content: content })

        })
        .then(resp => resp.json())
        .then(data => {
            props.navigation.navigate('Home')
        })
        .catch(error => console.log(error))
    }

  return (
    <View>
        <TextInput style = {styles.titleStyle}
            label = "Title"
            value = {title}
            mode = "outlined"
            onChangeText = {(text) => setTitle(text)}
        />

        <TextInput style = {styles.contentStyle}
                    label = "Description"
                    value = {content}
                    mode = "outlined"
                    multiline = {true}
                    numberOfLines = {10}
                    onChangeText = {(content) => setContent(content)}
        />

        <Button style = {styles.buttonStyle}
                mode = "contained"
                icon = {'pencil'}
                onPress = {() => insertData()}
        >Insert Articles</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle: {
        marginTop: 30,
        padding: 10,
        margin: 15
    },
    contentStyle: {
        marginTop: 10,
        padding: 10,
        margin: 15
    },
    buttonStyle: {
        marginTop: 10,
        padding: 10,
        margin: 15,
        backgroundColor: '#94DAFF'
    }

})

export default Create