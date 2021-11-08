import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { Divider } from "react-native-elements";
import { POSTS } from "./../../data/posts";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider orientation="vertical" width={1} />
      <PostHeader post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center'}}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{ uri: post.profile_picture}} style={styles.story}/>
      <Text style={{ color: "white", marginLeft: 6, fontWeight: 'bold' }}>{post.user}</Text>
    </View>
    <Text style={{color: "white", fontWeight: "900", fontSize: 35}}>...</Text>
  </View>
);

export default Post;

const styles = StyleSheet.create({
     story: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#FF8501",
  },

});
