import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Button, TextInput } from 'react-native-paper'


function Edit(props) {

    const data = props.route.params.data;

    const [title, setTitle] = useState(data.title)
    const [content, setContent] = useState(data.content)

    const updateData = () => {
        
        fetch('Access-Control-Allow-Origin', `http://192.168.127.1:3000/update/${data.id}`, {

            method: 'PUT',
            headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
            },
            body: JSON.stringify({ title: title, content: content })

        })
        .then(resp => resp.json())
        .then(data => {
            props.navigation.navigate('Home', {data: data})
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
                onPress = {() => updateData()}
        >Update Articles</Button>
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

export default Edit