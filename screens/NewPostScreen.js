import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import AddNewPost from './../components/newPost/AddNewPost';

const NewPostScreen = () => {
    return (
        <SafeAreaView style={{backgroundColor: "black", flex: 1}}>
            {/* <Text>New post screen</Text> */}
            <AddNewPost />
        </SafeAreaView>
    )
}

export default NewPostScreen

const styles = StyleSheet.create({})
