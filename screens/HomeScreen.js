import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "./../components/home/Header";
import Stories from "./../components/home/Stories";
import Post from "./../components/home/Post";
import { POSTS } from "./../data/posts";
import BottomTabs, { bottomTabsIcons } from "./../components/home/BottomTabs";
import firebase from "./../firebase";
import "firebase/compat/firestore";
const db = firebase.firestore();

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collectionGroup("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        console.log(
          "POSTS",
          snapshot.docs.map((doc) => doc.data())
        );
        setPosts(
          snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
        );
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabsIcons} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
