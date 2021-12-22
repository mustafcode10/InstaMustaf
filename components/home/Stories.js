import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      {/* <Text style={{color: 'white'}}>STORIES</Text> */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{alignItems: 'center'}}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: "white", margin: 2 }}>{story.user.length > 11 ? story.user.slice(0, 6).toLowerCase() + '...' : story.user.toLowerCase()}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 18,
    borderWidth: 3,
    borderColor: "#FF8501",
  },
});
